"use client";

import { usePanelStore } from "@multi-app/lib/stores/drawer.store";
import { cn } from "@multi-app/lib/utils/generics";
import { Loader2, Pencil, Plus, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { StatusBadge } from "./data-table/status-badge";
import type { StatusVariant } from "./data-table/types";

// ============================================================================
// Types
// ============================================================================

export interface ProductDetailData {
  id: string;
  name: string;
  createdAt: string;
  status: "active" | "inactive";
  price: number;
  stock: number;
  sold: number;
  category: string;
  weight?: string;
  dimensions?: string;
  colors?: string[];
  description?: string;
  images?: string[];
}

export interface OrderHistoryItem {
  id: string;
  date: string;
  productName: string;
  productCategory: string;
  productImage?: string;
  totalPrice: number;
  status: "pending" | "delivered" | "cancelled" | "refused";
}

export interface ProductDetailDrawerProps {
  product: ProductDetailData | null;
  orderHistory?: OrderHistoryItem[];
  isLoadingHistory?: boolean;
  isDeleting?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
}

// ============================================================================
// Helper Components
// ============================================================================

const ColorDot = ({ color }: { color: string }) => (
  <div
    className="w-6 h-6 rounded-full border border-black/20"
    style={{ backgroundColor: color }}
  />
);

const StatItem = ({
  value,
  label,
  showDivider = false,
}: {
  value: string | number;
  label: string;
  showDivider?: boolean;
}) => (
  <>
    <div className="flex-1 flex flex-col items-center justify-center py-3 px-4 gap-1">
      <span className="text-lg font-medium text-gray-900 tracking-tight">
        {value}
      </span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
    {showDivider && <div className="w-px h-12 bg-gray-100" />}
  </>
);

const InfoField = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm text-gray-500 tracking-wide">{label}</span>
    <span className="text-sm font-medium text-gray-900">{value}</span>
  </div>
);

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex-1 py-2 px-3 text-sm font-medium rounded-full transition-all",
      active
        ? "bg-white border border-gray-200 shadow-sm text-gray-900"
        : "text-gray-400 hover:text-gray-600",
    )}
  >
    {children}
  </button>
);

const OrderStatusBadge = ({
  status,
}: {
  status: OrderHistoryItem["status"];
}) => {
  const statusConfig: Record<
    OrderHistoryItem["status"],
    { label: string; variant: StatusVariant }
  > = {
    pending: { label: "En attente", variant: "pending" },
    delivered: { label: "Livré", variant: "success" },
    cancelled: { label: "Annulé", variant: "error" },
    refused: { label: "Refusé", variant: "error" },
  };

  const config = statusConfig[status];
  return <StatusBadge label={config.label} variant={config.variant} />;
};

// ============================================================================
// Main Component
// ============================================================================

export const ProductDetailDrawer = ({
  product,
  orderHistory = [],
  isLoadingHistory = false,
  isDeleting = false,
  onDelete,
  onEdit,
  onAdd,
}: ProductDetailDrawerProps) => {
  const { closePanel } = usePanelStore();
  const [activeTab, setActiveTab] = useState<"general" | "history">("general");

  if (!product) return null;

  const initials = product.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
            Détails du produit
          </h2>
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            #{product.id}
          </span>
        </div>
        <button
          type="button"
          onClick={closePanel}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-gray-900" strokeWidth={2} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          {/* Avatar/Initials */}
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-semibold text-gray-900">
              {initials}
            </span>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col gap-0.5">
            <span className="text-lg font-medium text-gray-900">
              {product.name}
            </span>
            <span className="text-sm text-gray-400">
              Créé le {product.createdAt}
            </span>
          </div>

          {/* Status Badge */}
          <div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              product.status === "active"
                ? "bg-green-50 text-green-500"
                : "bg-gray-100 text-gray-500",
            )}
          >
            {product.status === "active" ? "Actif" : "Inactif"}
          </div>
        </div>

        {/* Stats Counter */}
        <div className="flex items-center border border-gray-100 rounded-xl p-1">
          <StatItem
            value={product.price.toLocaleString("fr-FR")}
            label="Prix"
            showDivider
          />
          <StatItem value={product.stock} label="Stock" showDivider />
          <StatItem value={product.sold} label="Vendu" />
        </div>

        {/* Tabs Menu */}
        <div className="flex items-center p-1 gap-2 bg-gray-50 rounded-full">
          <TabButton
            active={activeTab === "general"}
            onClick={() => setActiveTab("general")}
          >
            Informations générales
          </TabButton>
          <TabButton
            active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          >
            Historique de commande
          </TabButton>
        </div>

        {/* Tab Content */}
        {activeTab === "general" ? (
          <>
            {/* Product Images */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-900">
                Images du produit
              </span>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {(product.images && product.images.length > 0
                  ? product.images
                  : [null, null, null, null]
                ).map((img, idx) => (
                  <div
                    key={idx}
                    className="w-[130px] h-[130px] flex-shrink-0 rounded-lg bg-gray-200 border border-gray-100 overflow-hidden"
                  >
                    {img && (
                      <Image
                        src={img}
                        alt={`Product image ${idx + 1}`}
                        width={130}
                        height={130}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info Card */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-3">
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <InfoField label="Nom du produit" value={product.name} />
                <InfoField label="Catégorie" value={product.category} />
                {product.weight && (
                  <InfoField label="Poids" value={product.weight} />
                )}
                {product.dimensions && (
                  <InfoField label="Dimensions" value={product.dimensions} />
                )}
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Couleurs</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, idx) => (
                      <ColorDot key={idx} color={color} />
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {product.description && (
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Descriptions</span>
                  <p className="text-sm font-medium text-gray-900 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Order History Tab */
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[100px_1fr_100px_100px] gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-900">Date</span>
              <span className="text-sm font-semibold text-gray-900">
                Produit
              </span>
              <span className="text-sm font-semibold text-gray-900">
                Prix total
              </span>
              <span className="text-sm font-semibold text-gray-900">
                Statut
              </span>
            </div>

            {/* Table Body */}
            <div className="max-h-[400px] overflow-y-auto">
              {isLoadingHistory && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                </div>
              )}
              {!isLoadingHistory &&
                orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="grid grid-cols-[100px_1fr_100px_100px] gap-2 px-4 py-3 border-b border-gray-100 last:border-b-0 items-center"
                  >
                    {/* Date */}
                    <span className="text-sm text-gray-600">{order.date}</span>

                    {/* Product */}
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                        {order.productImage && (
                          <Image
                            src={order.productImage}
                            alt={order.productName}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {order.productName}
                        </span>
                        <span className="text-xs text-gray-400 truncate">
                          {order.productCategory}
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <span className="text-sm text-gray-900">
                      {order.totalPrice.toLocaleString("fr-FR")}
                    </span>

                    {/* Status */}
                    <OrderStatusBadge status={order.status} />
                  </div>
                ))}

              {!isLoadingHistory && orderHistory.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-gray-400">
                  Aucun historique de commande
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
        {/* Delete Button */}
        <button
          type="button"
          onClick={onDelete}
          disabled={isDeleting}
          className={cn(
            "flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:bg-gray-100 transition-colors",
            isDeleting && "opacity-60 cursor-not-allowed",
          )}
        >
          {isDeleting ? (
            <Loader2 className="w-6 h-6 text-[#F43F5E] animate-spin" />
          ) : (
            <Trash2 className="w-6 h-6 text-[#F43F5E]" />
          )}
          <span className="text-base font-medium text-[#F43F5E]">
            {isDeleting ? "Suppression..." : "Supprimer"}
          </span>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Edit Button */}
          <button
            type="button"
            onClick={onEdit}
            className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
          >
            <Pencil className="w-6 h-6 text-gray-900" />
            <span className="text-base font-medium text-gray-900">
              Modifier
            </span>
          </button>

          {/* Add Button */}
          <button
            type="button"
            onClick={onAdd}
            className="flex items-center gap-3 px-4 py-3 bg-[#D62F42] rounded-xl hover:bg-[#C12A3B] transition-colors"
          >
            <Plus className="w-6 h-6 text-white" />
            <span className="text-base font-medium text-white">Ajouter</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailDrawer;
