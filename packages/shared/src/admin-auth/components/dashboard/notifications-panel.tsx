"use client";

import { usePanelStore } from "@multi-app/lib/stores/drawer.store";
import { cn } from "@multi-app/lib/utils/generics";
import { Bell, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/button";
import { FilterTag } from "./filter-tag";

// ============================================================================
// Types & Mock Data
// ============================================================================

export type NotifCategory = "Commandes" | "Stock" | "Modération";

interface MockNotification {
  id: string;
  title: string;
  body: string;
  time: string;
  category: NotifCategory;
  color: "red" | "green" | "blue" | "orange";
}

const colorStyles: Record<
  MockNotification["color"],
  { border: string; title: string; body: string; dot: string; time: string }
> = {
  red: {
    border: "border-red-400",
    title: "text-gray-800",
    body: "text-gray-500",
    dot: "bg-red-500",
    time: "text-gray-400",
  },
  green: {
    border: "border-green-400",
    title: "text-gray-800",
    body: "text-gray-500",
    dot: "bg-green-500",
    time: "text-gray-400",
  },
  blue: {
    border: "border-blue-400",
    title: "text-gray-800",
    body: "text-gray-500",
    dot: "bg-blue-500",
    time: "text-gray-400",
  },
  orange: {
    border: "border-orange-400",
    title: "text-gray-800",
    body: "text-gray-500",
    dot: "bg-orange-500",
    time: "text-gray-400",
  },
};

const MOCK_NOTIFICATIONS: MockNotification[] = [
  {
    id: "1",
    title: "Alerte stock faible",
    body: 'Le produit "Robe Wax Été" n\'a plus que 2 unités en stock.',
    time: "Il y a 2 heures",
    category: "Stock",
    color: "red",
  },
  {
    id: "2",
    title: "Produit validé",
    body: 'L\'administrateur a validé votre produit "Savon Karité". Il est maintenant en ligne !',
    time: "Hier, 15:42",
    category: "Modération",
    color: "green",
  },
  {
    id: "3",
    title: "Nouvelle commande",
    body: "Vous avez reçu une nouvelle commande (CMD-4602) de 45 000 FCFA.",
    time: "Hier, 14:10",
    category: "Commandes",
    color: "blue",
  },
  {
    id: "4",
    title: "Produit en attente",
    body: '"Jupe Bogolan" est en cours de modération. Vous serez notifié sous 24h.',
    time: "Il y a 3 jours",
    category: "Modération",
    color: "orange",
  },
  {
    id: "5",
    title: "Commande expédiée",
    body: "La commande CMD-4598 a été marquée comme expédiée par votre transporteur.",
    time: "Il y a 3 jours",
    category: "Commandes",
    color: "blue",
  },
];

// ============================================================================
// Sub-components
// ============================================================================

const NotificationItem = ({ notif }: { notif: MockNotification }) => {
  const s = colorStyles[notif.color];
  return (
    <div
      className={cn(
        "p-4 rounded-xl border bg-white flex gap-4 cursor-pointer transition-opacity hover:opacity-80",
        s.border,
      )}
    >
      <div className="mt-1.5 shrink-0">
        <div className={cn("w-2 h-2 rounded-full", s.dot)} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className={cn("font-semibold text-sm", s.title)}>{notif.title}</h4>
        <p className={cn("text-sm mt-1 leading-snug", s.body)}>{notif.body}</p>
        <span className={cn("text-xs mt-2 block", s.time)}>{notif.time}</span>
      </div>
    </div>
  );
};

// ============================================================================
// Panel Component
// ============================================================================

export interface NotificationsPanelProps {
  onViewAll?: () => void;
}

type ActiveTag = "Tout" | NotifCategory;
const TAGS: ActiveTag[] = ["Tout", "Commandes", "Stock", "Modération"];

export const NotificationsPanel = ({ onViewAll }: NotificationsPanelProps) => {
  const { closePanel } = usePanelStore();
  const [activeTag, setActiveTag] = useState<ActiveTag>("Tout");

  const counts = {
    Tout: MOCK_NOTIFICATIONS.length,
    Commandes: MOCK_NOTIFICATIONS.filter((n) => n.category === "Commandes")
      .length,
    Stock: MOCK_NOTIFICATIONS.filter((n) => n.category === "Stock").length,
    Modération: MOCK_NOTIFICATIONS.filter((n) => n.category === "Modération")
      .length,
  } as const;

  const filtered =
    activeTag === "Tout"
      ? MOCK_NOTIFICATIONS
      : MOCK_NOTIFICATIONS.filter((n) => n.category === activeTag);

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Alertes système
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Activité de la plateforme, stocks et modération.
          </p>
        </div>
        <button
          type="button"
          onClick={closePanel}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors mt-0.5"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Filter Tags */}
      <div className="flex items-center gap-2 flex-wrap px-6 py-3 border-b border-gray-50">
        {TAGS.map((tag) => (
          <FilterTag
            key={tag}
            label={tag}
            count={counts[tag]}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
              <Bell className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 font-medium">Tout est à jour !</p>
            <p className="text-sm text-gray-400">
              Vos alertes apparaîtront ici.
            </p>
          </div>
        ) : (
          filtered.map((notif) => (
            <NotificationItem key={notif.id} notif={notif} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <Button
          onClick={onViewAll}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Voir toutes les alertes
        </Button>
      </div>
    </>
  );
};
