"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { CloudUpload, Plus, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../../../ui/button";
import { GlobalModal } from "../../../ui/global-modal";
import { Input } from "../../../ui/input";
import { Select } from "../../../ui/select";
import { TextArea } from "../../../ui/textarea";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface AddProductModalVariant {
  id: string;
  type: string;
  values: string[];
}

export interface AddProductModalFormData {
  images: File[];
  name: string;
  description: string;
  category: string;
  quantity: number;
  price: number;
  discount: number;
  discountType: string;
  sizes: string[];
  gender: string;
  hasVariants: boolean;
  variants: AddProductModalVariant[];
}

export interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddProductModalFormData) => Promise<void>;
  onSaveDraft?: (data: AddProductModalFormData) => Promise<void>;
  categories?: Array<{ value: string; label: string }>;
  isLoading?: boolean;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;
type ProductSize = (typeof SIZES)[number];

const GENDERS = [
  { value: "femme", label: "Femme" },
  { value: "homme", label: "Homme" },
  // { value: "unisexe", label: "Unisexe" },
] as const;

const DISCOUNT_TYPES = [
  { value: "percentage", label: "Pourcentage (%)" },
  { value: "fixed", label: "Montant fixe (FCFA)" },
  { value: "seasonal", label: "Remise saisonnière" },
];

const INITIAL_FORM: AddProductModalFormData = {
  images: [],
  name: "",
  description: "",
  category: "",
  quantity: 0,
  price: 0,
  discount: 0,
  discountType: "",
  sizes: [],
  gender: "",
  hasVariants: false,
  variants: [],
};

// ─────────────────────────────────────────────
// Shared field style — matches SearchInput look
// ─────────────────────────────────────────────

const field =
  "rounded-xl border-gray-200 bg-gray-50 text-sm py-2.5 focus:ring-primary/20 focus:border-primary";

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <p className="text-sm font-medium text-gray-700 mb-2">
      {children}
      {required && <span className="text-primary ml-0.5">*</span>}
    </p>
  );
}

function SectionCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-100 rounded-2xl p-6",
        className,
      )}
    >
      <h3 className="text-base font-semibold text-gray-900 mb-5">{title}</h3>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export function AddProductModal({
  isOpen,
  onClose,
  onSubmit,
  onSaveDraft,
  categories = [],
  isLoading = false,
}: AddProductModalProps) {
  const [form, setForm] = useState<AddProductModalFormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [primaryIdx, setPrimaryIdx] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const busy = isLoading || submitting || savingDraft;

  const resetAndClose = () => {
    if (busy) return;
    setForm(INITIAL_FORM);
    setPrimaryIdx(0);
    onClose();
  };

  const addImages = (files: FileList | null) => {
    if (!files) return;
    const valid = Array.from(files).filter((f) => f.size <= 5 * 1024 * 1024);
    setForm((p) => ({ ...p, images: [...p.images, ...valid] }));
  };

  const removeImage = (idx: number) => {
    setForm((p) => ({ ...p, images: p.images.filter((_, i) => i !== idx) }));
    setPrimaryIdx((p) => Math.min(p, Math.max(0, form.images.length - 2)));
  };

  const toggleSize = (size: ProductSize) => {
    setForm((p) => ({
      ...p,
      sizes: p.sizes.includes(size)
        ? p.sizes.filter((s) => s !== size)
        : [...p.sizes, size],
    }));
  };

  const handlePublish = async () => {
    setSubmitting(true);
    try {
      await onSubmit(form);
      setForm(INITIAL_FORM);
      setPrimaryIdx(0);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDraft = async () => {
    if (!onSaveDraft) return;
    setSavingDraft(true);
    try {
      await onSaveDraft(form);
    } finally {
      setSavingDraft(false);
    }
  };

  const previewUrl = form.images[primaryIdx]
    ? URL.createObjectURL(form.images[primaryIdx])
    : null;

  const canPublish = !!form.name.trim() && !!form.category && form.price > 0;

  // ── Layout ──────────────────────────────────

  const content = (
    <div className="flex flex-col h-full min-h-0">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 shrink-0">
        <h2 className="text-lg font-semibold text-gray-900">
          Ajouter un nouveau produit
        </h2>

        <div className="flex items-center gap-3">
          {onSaveDraft && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDraft}
              isLoading={savingDraft}
              disabled={busy}
              className="w-auto text-sm"
            >
              Enregistrer en brouillon
            </Button>
          )}
          <Button
            type="button"
            size="sm"
            onClick={handlePublish}
            isLoading={submitting || isLoading}
            disabled={busy || !canPublish}
            className="w-auto text-sm"
          >
            Publier le produit
          </Button>
          <button
            type="button"
            onClick={resetAndClose}
            disabled={busy}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 p-8">
          {/* ── Left column ── */}
          <div className="space-y-6">
            {/* General Information */}
            <SectionCard title="Informations générales">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <FieldLabel required>Nom du produit</FieldLabel>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Ex: Robe d'été fleurie"
                    className={field}
                  />
                </div>

                {/* Description */}
                <div>
                  <FieldLabel>Description du produit</FieldLabel>
                  <TextArea
                    value={form.description}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        description: (
                          e as React.ChangeEvent<HTMLTextAreaElement>
                        ).target.value,
                      }))
                    }
                    placeholder="Description détaillée du produit..."
                    className={cn(
                      field,
                      "min-h-[13rem] max-h-[13rem] rounded-xl",
                    )}
                  />
                </div>

                {/* Sizes */}
                <div>
                  <FieldLabel>Taille</FieldLabel>
                  <p className="text-xs text-gray-400 mb-3">
                    Sélectionner les tailles disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((size) => {
                      const active = form.sizes.includes(size);
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => toggleSize(size)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium border transition-all",
                            active
                              ? "bg-primary text-white border-primary shadow-sm"
                              : "bg-white text-gray-700 border-gray-200 hover:border-primary/40",
                          )}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <FieldLabel>Genre</FieldLabel>
                  <p className="text-xs text-gray-400 mb-3">
                    Sélectionner le genre du produit
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {GENDERS.map(({ value, label }) => {
                      const active = form.gender === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setForm((p) => ({ ...p, gender: value }))
                          }
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all",
                            active
                              ? "border-primary text-primary bg-primary/5"
                              : "border-gray-200 text-gray-600 bg-white hover:border-gray-300",
                          )}
                        >
                          <span
                            className={cn(
                              "w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0",
                              active ? "border-primary" : "border-gray-300",
                            )}
                          >
                            {active && (
                              <span className="w-2 h-2 rounded-full bg-primary" />
                            )}
                          </span>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Pricing & Stock */}
            <SectionCard title="Prix & Stock">
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FieldLabel required>Prix de base</FieldLabel>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none font-medium">
                        FCFA
                      </span>
                      <Input
                        type="number"
                        min={0}
                        value={form.price || ""}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            price: parseFloat(e.target.value) || 0,
                          }))
                        }
                        placeholder="0"
                        className={cn(field, "pl-14")}
                      />
                    </div>
                  </div>
                  <div>
                    <FieldLabel required>Stock</FieldLabel>
                    <Input
                      type="number"
                      min={0}
                      value={form.quantity || ""}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          quantity: parseInt(e.target.value) || 0,
                        }))
                      }
                      placeholder="0"
                      className={field}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FieldLabel>Remise (%)</FieldLabel>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={form.discount || ""}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          discount: parseFloat(e.target.value) || 0,
                        }))
                      }
                      placeholder="0"
                      className={field}
                    />
                  </div>
                  <div>
                    <FieldLabel>Type de remise</FieldLabel>
                    <Select
                      value={form.discountType}
                      onChange={(val) =>
                        setForm((p) => ({ ...p, discountType: val }))
                      }
                      options={DISCOUNT_TYPES}
                      placeholder="Sélectionner..."
                      className="rounded-xl border-gray-200 py-2.5 text-sm bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-6">
            {/* Images */}
            <SectionCard title="Images du produit">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => addImages(e.target.files)}
              />

              {/* Main preview / upload zone */}
              <div
                className={cn(
                  "relative rounded-xl overflow-hidden border-2 border-dashed border-gray-200",
                  "transition-colors hover:border-primary/40 cursor-pointer",
                  previewUrl
                    ? "aspect-[4/3]"
                    : "h-52 flex flex-col items-center justify-center",
                )}
                onClick={() => fileInputRef.current?.click()}
              >
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="Aperçu principal"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="p-4 bg-white rounded-full shadow-sm mb-3">
                      <CloudUpload className="w-7 h-7 text-primary/60" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Cliquez ou glissez vos images
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      JPEG, PNG, WEBP — 5 Mo max
                    </p>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              {form.images.length > 0 && (
                <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                  {form.images.map((file, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "group relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all",
                        idx === primaryIdx
                          ? "border-primary shadow-md"
                          : "border-gray-200 hover:border-gray-300",
                      )}
                      onClick={() => setPrimaryIdx(idx)}
                    >
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={`Image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(idx);
                        }}
                        className="absolute top-0.5 right-0.5 bg-white/90 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
                        aria-label="Supprimer l'image"
                      >
                        <X className="w-3 h-3 text-gray-600" />
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="shrink-0 w-16 h-16 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center hover:border-primary/40 transition-colors"
                    aria-label="Ajouter une image"
                  >
                    <Plus className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              )}
            </SectionCard>

            {/* Category */}
            <SectionCard title="Catégorie">
              <FieldLabel required>Catégorie du produit</FieldLabel>
              <Select
                value={form.category}
                onChange={(val) => setForm((p) => ({ ...p, category: val }))}
                options={categories}
                placeholder="Sélectionner une catégorie"
                direction="up"
                className="rounded-xl border-gray-200 py-2.5 text-sm bg-gray-50"
              />
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={resetAndClose}
      isLoading={isLoading}
      className="!max-w-6xl !p-0 !pt-0 max-h-[92vh] [&>[data-slot='dialog-close']]:!hidden"
      views={[content]}
    />
  );
}
