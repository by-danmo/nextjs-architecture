"use client";

import { cn } from "@multi-app/lib/utils/generics";

// ============================================================================
// Base Skeleton Component
// ============================================================================

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200/80", className)}
      {...props}
    />
  );
}

// ============================================================================
// Stat Card Skeleton
// ============================================================================

export function StatCardSkeleton() {
  return (
    <div className="flex justify-between flex-col bg-white rounded-2xl h-72 shadow-xs min-w-[260px] flex-1">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-5 w-28" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-end px-6 pb-6 pt-2 lg:px-8 lg:pb-8 gap-3">
        <div className="flex items-baseline gap-3">
          <Skeleton className="h-12 w-36" />
          <Skeleton className="h-6 w-20 ml-2" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Chart Widget Skeleton
// ============================================================================

export function ChartWidgetSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6 border-b border-gray-100">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-10 w-24 rounded-xl" />
      </div>

      {/* Value Section */}
      <div className="flex items-baseline justify-between px-6 py-4 lg:px-8 lg:py-5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 px-6 pb-6 lg:px-8 lg:pb-8">
        <div className="flex items-end justify-between gap-2 h-[250px]">
          {[...Array(12)].map((_, i) => (
            <Skeleton
              key={i}
              className="flex-1 rounded-t-md"
              style={{ height: `${Math.random() * 60 + 40}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Table Skeleton
// ============================================================================

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8 lg:py-6">
        <Skeleton className="h-6 w-32" />
        <div className="flex items-center gap-3 lg:gap-4">
          <Skeleton className="h-10 w-[240px] rounded-xl" />
          <Skeleton className="h-10 w-24 rounded-xl" />
          <Skeleton className="h-10 w-24 rounded-xl" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="w-full">
          {/* Table Header */}
          <div className="flex items-center px-6 py-4 bg-gray-50 border-y border-gray-200">
            <Skeleton className="h-4 w-24 mr-8" />
            <Skeleton className="h-4 w-16 mr-8" />
            <Skeleton className="h-4 w-32 mr-8" />
            <Skeleton className="h-4 w-40 flex-1" />
            <Skeleton className="h-4 w-24 mr-8" />
            <Skeleton className="h-4 w-20" />
          </div>
          {/* Table Rows */}
          {[...Array(rows)].map((_, i) => (
            <div
              key={i}
              className="flex items-center px-6 py-4 border-b border-gray-50"
            >
              <Skeleton className="h-4 w-20 mr-8" />
              <Skeleton className="h-4 w-20 mr-8" />
              <Skeleton className="h-4 w-28 mr-8" />
              <div className="flex items-center gap-3 flex-1 mr-8">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-4 w-24 mr-8" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <Skeleton className="h-4 w-48" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-[90px] rounded-md" />
          <Skeleton className="h-9 w-28 rounded-md" />
          <Skeleton className="h-9 w-28 rounded-md" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Review Card Skeleton
// ============================================================================

export function ReviewCardSkeleton() {
  return (
    <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-4">
      {/* Author and Rating */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-5 w-5 rounded-sm" />
          ))}
        </div>
      </div>
      {/* Comment */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      {/* Product */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Rating Summary Card Skeleton
// ============================================================================

export function RatingSummaryCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-11 w-36 rounded-xl" />
      </div>
      {/* Rating Display */}
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-20 w-24" />
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-6 rounded-sm" />
            ))}
          </div>
          <Skeleton className="h-5 w-28" />
        </div>
        {/* Category Ratings */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-3 flex-1 rounded-full" />
              <Skeleton className="h-4 w-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Bar Chart Skeleton (for Reviews)
// ============================================================================

export function ReviewsBarChartSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-60" />
        <Skeleton className="h-11 w-36 rounded-xl" />
      </div>
      {/* Chart Area */}
      <div className="flex items-end justify-between gap-4 h-[240px] pt-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-3 flex-1">
            <Skeleton
              className="w-full rounded-t-md"
              style={{ height: `${Math.random() * 60 + 30}%` }}
            />
            <Skeleton className="h-4 w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Settings Modal Skeleton
// ============================================================================

export function SettingsModalSkeleton() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
        {/* Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-72 border-r border-gray-100 p-5 flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-14 w-full rounded-xl" />
            ))}
          </div>
          {/* Main Content */}
          <div className="flex-1 p-8 flex flex-col gap-8">
            {/* Profile Photo Section */}
            <div className="flex items-center gap-5">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="flex flex-col gap-3">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-10 w-28 rounded-xl" />
              </div>
            </div>
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-[4.4rem] w-full rounded-xl" />
                </div>
              ))}
            </div>
            {/* Textarea */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-28 w-full rounded-xl" />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-4 px-8 py-6 border-t border-gray-100">
          <Skeleton className="h-14 w-28 rounded-xl" />
          <Skeleton className="h-14 w-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Dashboard Page Skeleton
// ============================================================================

export function DashboardPageSkeleton() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        <ChartWidgetSkeleton />
        <ChartWidgetSkeleton />
      </div>
      {/* Recent Orders Table */}
      <TableSkeleton rows={5} />
    </div>
  );
}

// ============================================================================
// Orders Page Skeleton
// ============================================================================

export function OrdersPageSkeleton() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
      {/* Orders Table */}
      <TableSkeleton rows={10} />
    </div>
  );
}

// ============================================================================
// Reviews Page Skeleton
// ============================================================================

export function ReviewsPageSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <RatingSummaryCardSkeleton />
        <ReviewsBarChartSkeleton />
      </div>
      {/* Reviews Section */}
      <div className="bg-white rounded-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 gap-4">
          <Skeleton className="h-6 w-28" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-[220px] rounded-xl" />
            <Skeleton className="h-12 w-28 rounded-xl" />
            <Skeleton className="h-12 w-28 rounded-xl" />
          </div>
        </div>
        {/* Reviews Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <ReviewCardSkeleton key={i} />
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100">
          <Skeleton className="h-5 w-40" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-11 w-20 rounded-xl" />
            <Skeleton className="h-11 w-28 rounded-xl" />
            <Skeleton className="h-11 w-24 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Statistics Page Skeleton
// ============================================================================

export function StatisticsPageSkeleton() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        <ChartWidgetSkeleton />
        <ChartWidgetSkeleton />
      </div>
      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        <ChartWidgetSkeleton />
        <TableSkeleton rows={5} />
      </div>
    </div>
  );
}

// ============================================================================
// Layout Header Skeleton
// ============================================================================

export function HeaderSkeleton() {
  return (
    <header className="flex items-center justify-between px-8 py-6 lg:px-10 lg:py-7 bg-white">
      {/* Page Info */}
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-5 w-72" />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-5 lg:gap-6">
        <Skeleton className="w-[5.2rem] h-[5.2rem] rounded-[1.4rem]" />
        <Skeleton className="w-[5.2rem] h-[5.2rem] rounded-[1.4rem]" />
        <div className="flex items-center gap-4 px-4 h-[5.2rem] rounded-[1.4rem] bg-gray-50">
          <Skeleton className="size-[4rem] rounded-full" />
          <div className="hidden sm:flex flex-col gap-1.5">
            <Skeleton className="h-[1.6rem] w-36" />
            <Skeleton className="h-[1.4rem] w-28" />
          </div>
          <Skeleton className="h-6 w-6 ml-2" />
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// Products Page Skeleton
// ============================================================================

export function ProductsPageSkeleton() {
  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
      {/* Products Table */}
      <div className="bg-white rounded-2xl overflow-hidden">
        {/* Header with Add Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Skeleton className="h-6 w-44" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-[220px] rounded-xl" />
            <Skeleton className="h-12 w-28 rounded-xl" />
            <Skeleton className="h-12 w-28 rounded-xl" />
            <Skeleton className="h-12 w-48 rounded-xl" />
          </div>
        </div>
        {/* Table Header */}
        <div className="flex items-center px-6 py-4 bg-gray-50 border-b border-gray-100">
          <Skeleton className="h-5 w-24 mr-8" />
          <Skeleton className="h-5 w-48 mr-8 flex-1" />
          <Skeleton className="h-5 w-24 mr-8" />
          <Skeleton className="h-5 w-20 mr-8" />
          <Skeleton className="h-5 w-24 mr-8" />
          <Skeleton className="h-5 w-10" />
        </div>
        {/* Table Rows */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex items-center px-6 py-5 border-b border-gray-50"
          >
            <Skeleton className="h-5 w-24 mr-8" />
            <div className="flex items-center gap-4 flex-1 mr-8">
              <Skeleton className="h-14 w-14 rounded-xl" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-44" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <Skeleton className="h-5 w-28 mr-8" />
            <Skeleton className="h-5 w-12 mr-8" />
            <Skeleton className="h-7 w-20 rounded-full mr-8" />
            <Skeleton className="h-10 w-10 rounded" />
          </div>
        ))}
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-5">
          <Skeleton className="h-5 w-40" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-11 w-24 rounded-xl" />
            <Skeleton className="h-11 w-28 rounded-xl" />
            <Skeleton className="h-11 w-24 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
