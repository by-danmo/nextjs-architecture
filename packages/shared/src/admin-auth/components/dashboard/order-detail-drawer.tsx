"use client";

import { usePanelStore } from "@multi-app/lib/stores/drawer.store";
import { cn } from "@multi-app/lib/utils/generics";
import { Check, Loader2, MapPin, MessageSquare, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// ============================================================================
// Types
// ============================================================================

export interface OrderItem {
  id: string;
  name: string;
  variant?: string;
  variantColor?: string;
  unitPrice: number;
  quantity: number;
  imageUrl?: string;
}

export interface PaymentInfo {
  method: string;
  methodIcon?: string;
  phoneNumber?: string;
  status: "paid" | "pending" | "failed" | "refunded";
}

export interface OrderDetailData {
  id: string;
  orderNumber?: string;
  customerName: string;
  customerEmail: string;
  customerInitials?: string;
  totalAmount: number;
  estimatedDelivery: string;
  paymentStatus: "paid" | "pending" | "failed" | "refunded";
  items: OrderItem[];
  payment: PaymentInfo;
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
  deliveryAddress: string;
  shippingPhone?: string;
  shippingNote?: string;
}

export interface OrderDetailDrawerProps {
  order: OrderDetailData | null;
  currentStatus?: string;
  isLoading?: boolean;
  onAccept?: () => void;
  onRefuse?: () => void;
  onMarkProcessing?: () => void;
  onMarkShipped?: () => void;
  onMarkDelivered?: () => void;
  onMessage?: () => void;
}

// ============================================================================
// Helper Components
// ============================================================================

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

const SummaryRow = ({
  label,
  value,
  isBold = false,
}: {
  label: string;
  value: string;
  isBold?: boolean;
}) => (
  <div
    className={cn(
      "flex items-center justify-between py-2",
      isBold && "border-t border-gray-100 pt-3 mt-1",
    )}
  >
    <span
      className={cn(
        "text-sm",
        isBold ? "font-medium text-gray-900" : "text-gray-500",
      )}
    >
      {label}
    </span>
    <span
      className={cn(
        "text-sm",
        isBold ? "font-semibold text-gray-900" : "text-gray-900",
      )}
    >
      {value}
    </span>
  </div>
);

const PaymentStatusBadge = ({ status }: { status: PaymentInfo["status"] }) => {
  const config = {
    paid: { label: "Payé", className: "text-green-500" },
    pending: { label: "En attente", className: "text-amber-500" },
    failed: { label: "Échoué", className: "text-red-500" },
    refunded: { label: "Remboursé", className: "text-purple-500" },
  };

  const { label, className } = config[status];

  return (
    <span
      className={cn("flex items-center gap-1 text-sm font-medium", className)}
    >
      {status === "paid" && <Check className="w-4 h-4" />}
      {label}
    </span>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export const OrderDetailDrawer = ({
  order,
  currentStatus,
  isLoading = false,
  onAccept,
  onRefuse,
  onMarkProcessing,
  onMarkShipped,
  onMarkDelivered,
  onMessage,
}: OrderDetailDrawerProps) => {
  const { closePanel } = usePanelStore();
  const [activeTab, setActiveTab] = useState<"general" | "delivery">("general");

  if (!order) return null;

  const initials =
    order.customerInitials ||
    order.customerName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const formatPrice = (amount: number) =>
    `XOF ${amount.toLocaleString("fr-FR")}`;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
            Détails de la commande
          </h2>
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            #{order.orderNumber ?? order.id.slice(0, 8)}
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
        {/* Customer Profile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-semibold text-gray-900">
                {initials}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-medium text-gray-900">
                {order.customerName}
              </span>
              <span className="text-sm text-blue-500">
                {order.customerEmail}
              </span>
            </div>
          </div>

          {/* Message Button */}
          {onMessage && (
            <button
              type="button"
              onClick={onMessage}
              className="p-2.5 bg-[#D62F42] rounded-lg hover:bg-[#C12A3B] transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center border border-gray-100 rounded-xl p-1">
          <StatItem
            value={order.totalAmount.toLocaleString("fr-FR")}
            label="Montant total"
            showDivider
          />
          <StatItem
            value={order.estimatedDelivery}
            label="Livraison estimée"
            showDivider
          />
          <StatItem
            value={order.paymentStatus === "paid" ? "Payé" : "En attente"}
            label="Statut de paiement"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center p-1 gap-2 bg-gray-50 rounded-full">
          <TabButton
            active={activeTab === "general"}
            onClick={() => setActiveTab("general")}
          >
            Informations générales
          </TabButton>
          <TabButton
            active={activeTab === "delivery"}
            onClick={() => setActiveTab("delivery")}
          >
            Détails de livraison
          </TabButton>
        </div>

        {activeTab === "general" ? (
          <>
            {/* Order Items */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  Article commandé
                </span>
              </div>
              <div className="divide-y divide-gray-100">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      {/* Product Image */}
                      <div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                        {item.imageUrl && (
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {item.name}
                        </span>
                        {item.variant && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            {item.variantColor && (
                              <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: item.variantColor }}
                              />
                            )}
                            <span>{item.variant}</span>
                            <span>·</span>
                            <span>
                              XOF {item.unitPrice.toLocaleString("fr-FR")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-gray-900">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </span>
                      <span className="text-xs text-gray-500">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Info */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  Information de paiement
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  {/* Payment Method Icon */}
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    {order.payment.methodIcon ? (
                      <Image
                        src={order.payment.methodIcon}
                        alt={order.payment.method}
                        width={24}
                        height={24}
                      />
                    ) : (
                      <span className="text-red-500 font-bold text-sm">
                        {order.payment.method.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Payment Details */}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {order.payment.method}
                    </span>
                    {order.payment.phoneNumber && (
                      <span className="text-xs text-gray-500">
                        {order.payment.phoneNumber}
                      </span>
                    )}
                  </div>
                </div>

                <PaymentStatusBadge status={order.payment.status} />
              </div>
            </div>

            {/* Order Summary */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Résumé de la commande
              </h4>
              <SummaryRow
                label="Sous-total"
                value={formatPrice(order.subtotal)}
              />
              <SummaryRow label="TVA" value={formatPrice(order.tax)} />
              <SummaryRow
                label="Livraison"
                value={formatPrice(order.shippingCost)}
              />
              <SummaryRow
                label="Paiement total"
                value={formatPrice(order.total)}
                isBold
              />
            </div>

            {/* Delivery Address */}
            <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-red-400">
                  Adresse de livraison
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {order.deliveryAddress}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {/* Delivery Address */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  Adresse de livraison
                </span>
              </div>
              <div className="flex items-start gap-3 px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-900">
                    {order.deliveryAddress}
                  </span>
                  {order.shippingPhone && (
                    <span className="text-sm text-gray-500">
                      {order.shippingPhone}
                    </span>
                  )}
                  {order.shippingNote && (
                    <span className="text-xs text-gray-400 italic">
                      {order.shippingNote}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Estimated delivery */}
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Livraison estimée</span>
                <span className="text-sm font-semibold text-gray-900">
                  {order.estimatedDelivery}
                </span>
              </div>
            </div>

            {/* Payment method recap */}
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Mode de paiement</span>
                <span className="text-sm font-semibold text-gray-900">
                  {order.payment.method}
                </span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Montant</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatPrice(order.total)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {currentStatus !== "delivered" &&
        currentStatus !== "cancelled" &&
        currentStatus !== "refunded" && (
          <div className="flex items-center justify-end gap-3 px-4 py-4 border-t border-gray-200">
            {/* Cancel / Refuse — available until shipped */}
            {onRefuse && currentStatus !== "shipped" && (
              <button
                type="button"
                onClick={onRefuse}
                disabled={isLoading}
                className={cn(
                  "px-6 py-3 text-base font-medium",
                  "bg-white border border-gray-200 rounded-xl",
                  "text-gray-900 hover:bg-gray-50 transition-colors",
                  isLoading && "opacity-50 cursor-not-allowed",
                )}
              >
                {currentStatus === "pending" ? "Refuser" : "Annuler"}
              </button>
            )}

            {/* pending → processing (accept + prepare in one step) */}
            {currentStatus === "pending" && onAccept && (
              <button
                type="button"
                onClick={onAccept}
                disabled={isLoading}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 text-base font-medium",
                  "bg-[#D62F42] rounded-xl",
                  "text-white hover:bg-[#C12A3B] transition-colors",
                  isLoading && "opacity-75 cursor-not-allowed",
                )}
              >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Accepter
              </button>
            )}

            {/* confirmed → processing */}
            {currentStatus === "confirmed" && onMarkProcessing && (
              <button
                type="button"
                onClick={onMarkProcessing}
                disabled={isLoading}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 text-base font-medium",
                  "bg-[#D62F42] rounded-xl",
                  "text-white hover:bg-[#C12A3B] transition-colors",
                  isLoading && "opacity-75 cursor-not-allowed",
                )}
              >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                En préparation
              </button>
            )}

            {/* processing → shipped */}
            {currentStatus === "processing" && onMarkShipped && (
              <button
                type="button"
                onClick={onMarkShipped}
                disabled={isLoading}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 text-base font-medium",
                  "bg-[#D62F42] rounded-xl",
                  "text-white hover:bg-[#C12A3B] transition-colors",
                  isLoading && "opacity-75 cursor-not-allowed",
                )}
              >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Expédier
              </button>
            )}

            {/* shipped → delivered */}
            {currentStatus === "shipped" && onMarkDelivered && (
              <button
                type="button"
                onClick={onMarkDelivered}
                disabled={isLoading}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 text-base font-medium",
                  "bg-[#D62F42] rounded-xl",
                  "text-white hover:bg-[#C12A3B] transition-colors",
                  isLoading && "opacity-75 cursor-not-allowed",
                )}
              >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Marquer comme livré
              </button>
            )}
          </div>
        )}
    </>
  );
};

export default OrderDetailDrawer;
