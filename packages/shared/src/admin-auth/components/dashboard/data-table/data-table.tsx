"use client";

import {
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Filter } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchInput } from "../../../../ui/search-input";

import { cn } from "@multi-app/lib/utils/generics";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../icons/arrows-icons";
import { Button } from "../../../../ui/button";
import { Select } from "../../../../ui/select";
import { FilterDropdown } from "./filter-dropdown";
import { SortDropdown } from "./sort-dropdown";
import type { DropdownPosition, FilterStatusOption, SortOption } from "./types";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  searchPlaceholder?: string;
  filterStatusOptions?: FilterStatusOption[];
  sortOptions?: SortOption[];
  amountColumnId?: string;
  statusColumnId?: string;
  className?: string;
  pageSize?: number;
  emptyMessage?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  /** Enable server-side pagination. When provided, the DataTable delegates page control to the parent. */
  serverPagination?: {
    totalItems: number;
    currentPage: number; // 0-indexed
    onPageChange: (page: number) => void;
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title = "Liste",
  searchPlaceholder = "Rechercher...",
  filterStatusOptions = [],
  sortOptions = [],
  amountColumnId,
  className,
  pageSize = 10,
  emptyMessage = "Aucun résultat trouvé.",
  primaryAction,
  serverPagination,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // Dropdown states
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  // Refs and positions for portal dropdowns
  const filterBtnRef = useRef<HTMLDivElement>(null);
  const sortBtnRef = useRef<HTMLDivElement>(null);
  const [filterPos, setFilterPos] = useState<DropdownPosition>({
    top: 0,
    right: 0,
  });
  const [sortPos, setSortPos] = useState<DropdownPosition>({
    top: 0,
    right: 0,
  });

  const calcFilterPos = () => {
    if (filterBtnRef.current) {
      const r = filterBtnRef.current.getBoundingClientRect();
      setFilterPos({ top: r.bottom + 4, right: window.innerWidth - r.right });
    }
  };

  const calcSortPos = () => {
    if (sortBtnRef.current) {
      const r = sortBtnRef.current.getBoundingClientRect();
      setSortPos({ top: r.bottom + 4, right: window.innerWidth - r.right });
    }
  };

  useEffect(() => {
    if (!isFilterDropdownOpen && !isSortDropdownOpen) return;
    const update = () => {
      if (isFilterDropdownOpen) calcFilterPos();
      if (isSortDropdownOpen) calcSortPos();
    };
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [isFilterDropdownOpen, isSortDropdownOpen]);

  // Temporary states for dropdowns
  const [pendingSort, setPendingSort] = useState<{
    id: string;
    desc: boolean;
  } | null>(null);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedAmountRange, setSelectedAmountRange] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  // Calculate amount range and data for chart
  const amountData = useMemo(() => {
    if (!amountColumnId) return [];
    return data
      .map((item: any) => {
        const value = item[amountColumnId];
        return typeof value === "number" ? value : 0;
      })
      .sort((a, b) => a - b);
  }, [data, amountColumnId]);

  const amountRange = useMemo(() => {
    if (amountData.length === 0) return { min: 0, max: 1000 };
    return {
      min: Math.floor(Math.min(...amountData)),
      max: Math.ceil(Math.max(...amountData)),
    };
  }, [amountData]);

  // Initialize selected amount range when data loads
  useMemo(() => {
    if (
      selectedAmountRange.min === 0 &&
      selectedAmountRange.max === 0 &&
      amountRange.max > 0
    ) {
      setSelectedAmountRange(amountRange);
    }
  }, [amountRange]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    ...(serverPagination
      ? {
          manualPagination: true,
          pageCount: Math.ceil(serverPagination.totalItems / pageSize),
          onPaginationChange: (updater) => {
            const current = {
              pageIndex: serverPagination.currentPage,
              pageSize,
            };
            const next =
              typeof updater === "function" ? updater(current) : updater;
            serverPagination.onPageChange(next.pageIndex);
          },
        }
      : {}),
    state: {
      sorting,
      columnFilters,
      globalFilter,
      ...(serverPagination
        ? { pagination: { pageIndex: serverPagination.currentPage, pageSize } }
        : {}),
    },
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
  });

  // Handlers
  const handleSortChange = (id: string, direction: "asc" | "desc") => {
    setPendingSort({ id, desc: direction === "desc" });
    // Close dropdown immediately for better UX
    // setIsSortDropdownOpen(false);
    // handleSortApply();
  };

  const handleSortClear = () => {
    setPendingSort(null);
    setSorting([]);
  };

  const handleSortApply = () => {
    if (pendingSort) {
      setSorting([
        {
          id: pendingSort.id,
          desc: pendingSort.desc,
        },
      ]);
    }
    setIsSortDropdownOpen(false);
  };

  const handleFilterClear = () => {
    setSelectedStatuses([]);
    setSelectedAmountRange(amountRange);
    setColumnFilters([]);
  };

  const handleFilterApply = () => {
    const newFilters: ColumnFiltersState = [];

    if (selectedStatuses.length > 0) {
      // Assuming status column id is 'status'
      newFilters.push({
        id: "status",
        value: selectedStatuses,
      });
    }

    if (
      amountColumnId &&
      (selectedAmountRange.min !== amountRange.min ||
        selectedAmountRange.max !== amountRange.max)
    ) {
      newFilters.push({
        id: amountColumnId,
        value: [selectedAmountRange.min, selectedAmountRange.max],
      });
    }

    setColumnFilters(newFilters);
    setIsFilterDropdownOpen(false);
  };

  // Pagination info
  const totalItems = serverPagination
    ? serverPagination.totalItems
    : table.getFilteredRowModel().rows.length;
  const currentPage = table.getState().pagination.pageIndex + 1;
  const startIndex =
    totalItems > 0
      ? (currentPage - 1) * table.getState().pagination.pageSize + 1
      : 0;
  const endIndex = Math.min(
    currentPage * table.getState().pagination.pageSize,
    totalItems,
  );

  return (
    <div
      className={cn("flex flex-col bg-white rounded-2xl shadow-sm", className)}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8 lg:py-6">
        {/* Title */}
        <h2 className="text-base lg:text-lg font-semibold text-gray-900 font-sans">
          {title}
        </h2>

        {/* Actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Search */}
          <SearchInput
            placeholder={searchPlaceholder}
            value={globalFilter ?? ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGlobalFilter(e.target.value)
            }
            className="w-[200px] lg:w-120"
          />

          {/* Filter Button */}
          {filterStatusOptions.length > 0 || amountColumnId ? (
            <div ref={filterBtnRef} className="relative">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  calcFilterPos();
                  setIsFilterDropdownOpen(!isFilterDropdownOpen);
                }}
                className={cn(
                  "flex w-fit items-center whitespace-nowrap py-4.5 gap-2 px-4 h-auto",
                  "border border-gray-200 rounded-xl",
                  "text-sm font-medium text-gray-600",
                  "hover:bg-gray-50",
                  isFilterDropdownOpen && "bg-gray-50 border-primary",
                )}
                icon={<Filter className="w-4 h-4" />}
              >
                <span> Filtrer </span>
                {(selectedStatuses.length > 0 ||
                  (amountRange.max > 0 &&
                    (selectedAmountRange.min !== amountRange.min ||
                      selectedAmountRange.max !== amountRange.max))) && (
                  <span className="ml-1 p-1 size-5 flex items-center justify-center text-[10px] bg-primary text-white rounded-full">
                    {selectedStatuses.length +
                      (selectedAmountRange.min !== amountRange.min ||
                      selectedAmountRange.max !== amountRange.max
                        ? 1
                        : 0)}
                  </span>
                )}
              </Button>

              <FilterDropdown
                isOpen={isFilterDropdownOpen}
                onClose={() => setIsFilterDropdownOpen(false)}
                statusOptions={filterStatusOptions}
                selectedStatuses={selectedStatuses}
                onStatusChange={setSelectedStatuses}
                amountRange={amountRange}
                selectedAmountRange={selectedAmountRange}
                onAmountRangeChange={(min, max) =>
                  setSelectedAmountRange({ min, max })
                }
                amountData={amountData}
                onClear={handleFilterClear}
                onApply={handleFilterApply}
                position={filterPos}
              />
            </div>
          ) : null}

          {/* Sort Button */}
          {sortOptions.length > 0 ? (
            <div ref={sortBtnRef} className="relative">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  calcSortPos();
                  setIsSortDropdownOpen(!isSortDropdownOpen);
                }}
                className={cn(
                  "flex w-fit items-center whitespace-nowrap py-2.5 gap-2 px-4 h-auto",
                  "border border-gray-200 rounded-xl",
                  "text-sm font-medium text-gray-600",
                  "hover:bg-gray-50",
                  isSortDropdownOpen && "bg-gray-50 border-primary",
                )}
                icon={<ArrowUpDown className="w-4 h-4" />}
              >
                Trier par
                {sorting.length > 0 && (
                  <span className="ml-1 p-1 size-5 z-10 flex items-center justify-center text-[10px] bg-primary text-white rounded-full">
                    1
                  </span>
                )}
              </Button>

              <SortDropdown
                isOpen={isSortDropdownOpen}
                onClose={() => setIsSortDropdownOpen(false)}
                options={sortOptions}
                selectedSort={
                  pendingSort
                    ? {
                        id: pendingSort.id,
                        direction: pendingSort.desc
                          ? ("desc" as const)
                          : ("asc" as const),
                      }
                    : sorting.length > 0 && sorting[0]
                      ? {
                          id: sorting[0].id,
                          direction: sorting[0].desc
                            ? ("desc" as const)
                            : ("asc" as const),
                        }
                      : null
                }
                onSortChange={handleSortChange}
                onClear={handleSortClear}
                onApply={handleSortApply}
                position={sortPos}
              />
            </div>
          ) : null}

          {/* Primary Action Button */}
          {primaryAction && (
            <Button
              type="button"
              onClick={primaryAction.onClick}
              className={cn(
                "flex items-center gap-2",
                "px-5 py-3.5 h-auto",
                "bg-[#D62F42] text-white",
                "rounded-xl font-medium",
                "hover:bg-[#B91C1C] transition-colors",
              )}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </Button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto min-h-[200px]">
        <table className="w-full">
          <thead className="bg-gray-50 border-y border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    style={{
                      width:
                        header.column.columnDef.size !== 150
                          ? header.column.columnDef.size
                          : undefined,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      style={{
                        width:
                          cell.column.columnDef.size !== 150
                            ? cell.column.columnDef.size
                            : undefined,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="h-24 text-center text-sm text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">
            {startIndex} - {endIndex}
          </span>{" "}
          sur <span className="font-medium text-gray-900">{totalItems}</span>{" "}
          Entrées
        </div>

        <div className="flex items-center gap-3">
          <div className="w-[90px]">
            <Select
              options={[
                { label: "10", value: "10" },
                { label: "20", value: "20" },
                { label: "50", value: "50" },
                { label: "100", value: "100" },
              ]}
              value={table.getState().pagination.pageSize.toString()}
              onChange={(value) => table.setPageSize(Number(value))}
              className="py-2 h-9 rounded-md"
              direction="up"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-9 px-4 text-gray-600 font-medium border-gray-200 rounded-md"
            icon={<ArrowLeftIcon className="w-4 h-4" />}
          >
            Précédent
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-9 px-4 text-gray-600 font-medium border-gray-200 rounded-md"
            icon={<ArrowRightIcon className="w-4 h-4" />}
            invertIconPosition
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
