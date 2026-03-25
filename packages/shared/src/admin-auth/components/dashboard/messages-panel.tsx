"use client";

import { usePanelStore } from "@multi-app/lib/stores/drawer.store";
import { cn } from "@multi-app/lib/utils/generics";
import { MessageSquareMore, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/button";
import { FilterTag } from "./filter-tag";

// ============================================================================
// Types & Mock Data
// ============================================================================

type MessageType = "order" | "support" | "general";

interface MockMessage {
  id: string;
  senderName: string;
  initials: string;
  preview: string;
  time: string;
  type: MessageType;
  isRead: boolean;
  tag?: string;
  tagColor?: string;
}

const tagColorMap: Record<string, string> = {
  primary: "bg-white border border-primary/40 text-primary",
  green: "bg-white border border-green-400 text-green-700",
  red: "bg-white border border-red-400 text-red-600",
};

const MOCK_MESSAGES: MockMessage[] = [
  {
    id: "1",
    senderName: "Awa Diallo",
    initials: "AD",
    preview: "Bonjour, je voudrais savoir quand ma commande sera expédiée ?",
    time: "Il y a 10 min",
    type: "order",
    isRead: false,
    tag: "CMD-4589",
    tagColor: "primary",
  },
  {
    id: "2",
    senderName: "Marie Koné",
    initials: "MK",
    preview:
      "Merci beaucoup pour la livraison rapide, les produits sont magnifiques !",
    time: "Aujourd'hui, 09:30",
    type: "order",
    isRead: true,
    tag: "Livrée",
    tagColor: "green",
  },
  {
    id: "3",
    senderName: "Service Support",
    initials: "SS",
    preview:
      "Un litige a été ouvert pour la commande CMD-4501. Veuillez répondre sous 48h.",
    time: "Hier, 11:15",
    type: "support",
    isRead: false,
    tag: "Litige",
    tagColor: "red",
  },
  {
    id: "4",
    senderName: "Fatou Camara",
    initials: "FC",
    preview: "Est-ce que le tissu du produit est disponible en taille XL ?",
    time: "Hier, 08:45",
    type: "general",
    isRead: true,
  },
];

// ============================================================================
// Sub-components
// ============================================================================

const MessageItem = ({ msg }: { msg: MockMessage }) => (
  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-xs font-semibold text-primary">
          {msg.initials}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm text-gray-900">
              {msg.senderName}
            </span>
            {!msg.isRead && (
              <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
            )}
          </div>
          <span className="text-xs text-gray-400 shrink-0">{msg.time}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{msg.preview}</p>
        {msg.tag && (
          <div className="mt-2">
            <span
              className={cn(
                "text-xs px-2 py-1 rounded-md font-medium",
                tagColorMap[msg.tagColor ?? "primary"] ??
                  "bg-gray-100 text-gray-600",
              )}
            >
              {msg.tag}
            </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ============================================================================
// Panel Component
// ============================================================================

export interface MessagesPanelProps {
  onViewAll?: () => void;
}

type ActiveTag = "Tout" | "Non lus" | "Commandes" | "Support";
const TAGS: ActiveTag[] = ["Tout", "Non lus", "Commandes", "Support"];

export const MessagesPanel = ({ onViewAll }: MessagesPanelProps) => {
  const { closePanel } = usePanelStore();
  const [activeTag, setActiveTag] = useState<ActiveTag>("Tout");

  const counts = {
    Tout: MOCK_MESSAGES.length,
    "Non lus": MOCK_MESSAGES.filter((m) => !m.isRead).length,
    Commandes: MOCK_MESSAGES.filter((m) => m.type === "order").length,
    Support: MOCK_MESSAGES.filter((m) => m.type === "support").length,
  } as const;

  const filtered =
    activeTag === "Tout"
      ? MOCK_MESSAGES
      : activeTag === "Non lus"
        ? MOCK_MESSAGES.filter((m) => !m.isRead)
        : activeTag === "Commandes"
          ? MOCK_MESSAGES.filter((m) => m.type === "order")
          : MOCK_MESSAGES.filter((m) => m.type === "support");

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Messages des clients
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Consultez et répondez aux messages liés à vos commandes.
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
              <MessageSquareMore className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 font-medium">Aucun message</p>
            <p className="text-sm text-gray-400">
              Vos communications clients apparaîtront ici.
            </p>
          </div>
        ) : (
          filtered.map((msg) => <MessageItem key={msg.id} msg={msg} />)
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <Button
          onClick={onViewAll}
          variant="outline"
          className="w-full text-primary border-primary/20 hover:bg-primary/5"
        >
          Voir toutes les conversations
        </Button>
      </div>
    </>
  );
};
