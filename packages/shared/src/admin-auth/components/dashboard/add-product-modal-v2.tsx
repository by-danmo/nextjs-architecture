"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { CartLoading } from "../../../../feedback/loading/cart-loading";
import { Button } from "../../../../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../../../../ui/dialog";
import { Input } from "../../../../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../ui/select";
import { Switch } from "../../../../ui/switch";
import { Textarea } from "../../../../ui/textarea";

// Types
export interface ProductVariant {
  id: string;
  type: string;
  values: Array<{ value: string; color?: string }>;
  price: number;
}

export interface AddProductFormData {
  images: File[];
  name: string;
  description: string;
  category: string;
  quantity: number;
  price: number;
  hasVariants: boolean;
  variants: ProductVariant[];
}

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddProductFormData) => Promise<void>;
  categories?: Array<{ value: string; label: string }>;
  isLoading?: boolean;
}

const variantTypeOptions = [
  { value: "couleur", label: "Couleur" },
  { value: "taille", label: "Taille" },
  { value: "materiau", label: "Matériau" },
];

const colorOptions = [
  { value: "Vert", color: "#00C12B" },
  { value: "Rouge", color: "#F50606" },
  { value: "Jaune", color: "#F5DD06" },
  { value: "Orange", color: "#F57906" },
  { value: "Bleu", color: "#06CAF5" },
  { value: "Noir", color: "#000000" },
  { value: "Blanc", color: "#FFFFFF" },
  { value: "Rose", color: "#FF69B4" },
];

const ColorTag = ({
  value,
  color,
  onRemove,
}: {
  value: string;
  color?: string;
  onRemove: () => void;
}) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm">
    {color && (
      <span
        className="w-4 h-4 rounded-full border border-black/10"
        style={{ backgroundColor: color }}
      />
    )}
    <span className="text-gray-700">{value}</span>
    <button
      type="button"
      onClick={onRemove}
      className="text-gray-400 hover:text-gray-600"
    >
      <X className="w-3 h-3" />
    </button>
  </span>
);

const VariantRow = ({
  variant,
  onChange,
  onRemove,
}: {
  variant: ProductVariant;
  onChange: (variant: ProductVariant) => void;
  onRemove: () => void;
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const addColorValue = (colorValue: string, colorHex: string) => {
    if (!variant.values.find((v) => v.value === colorValue)) {
      onChange({
        ...variant,
        values: [...variant.values, { value: colorValue, color: colorHex }],
      });
    }
    setShowColorPicker(false);
  };

  const removeValue = (index: number) => {
    onChange({
      ...variant,
      values: variant.values.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
      <div className="flex justify-between items-center">
        <Select
          value={variant.type}
          onValueChange={(type) => onChange({ ...variant, type })}
        >
          <SelectTrigger className="w-[150px] bg-white">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            {variantTypeOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          className="text-red-500 hover:bg-red-50 hover:text-red-700"
        >
          <X size={16} />
        </Button>
      </div>

      <div className="relative">
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Valeurs
        </label>
        <div
          className={cn(
            "flex flex-wrap items-center gap-2",
            "px-3 py-2 min-h-[44px]",
            "bg-white border border-gray-200 rounded-lg",
            "cursor-pointer hover:border-gray-300 transition-colors",
          )}
          onClick={() => variant.type === "couleur" && setShowColorPicker(true)}
        >
          {variant.values.map((v, idx) => (
            <ColorTag
              key={idx}
              value={v.value}
              color={v.color}
              onRemove={(e) => {
                e.stopPropagation();
                removeValue(idx);
              }}
            />
          ))}
          {variant.values.length === 0 && (
            <span className="text-sm text-gray-400">
              {variant.type === "couleur"
                ? "Cliquez pour ajouter des couleurs"
                : "Ajouter des valeurs..."}
            </span>
          )}
        </div>

        {/* Color Picker Dropdown */}
        {showColorPicker && variant.type === "couleur" && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowColorPicker(false)}
            />
            <div className="absolute z-50 w-64 mt-2 p-3 bg-white border border-gray-200 rounded-xl shadow-xl left-0 top-full">
              <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                Couleurs disponibles
              </p>
              <div className="grid grid-cols-4 gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => addColorValue(color.value, color.color)}
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-lg border transition-all",
                      variant.values.find((v) => v.value === color.value)
                        ? "border-[#D62F42] bg-[#D62F42]/5 ring-2 ring-[#D62F42]/20"
                        : "border-gray-100 hover:border-gray-300",
                    )}
                    title={color.value}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-black/5 shadow-sm"
                      style={{ backgroundColor: color.color }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Supplément de prix
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
            €
          </span>
          <Input
            type="number"
            placeholder="0"
            value={variant.price}
            onChange={(e) =>
              onChange({ ...variant, price: parseFloat(e.target.value) || 0 })
            }
            className="pl-7 h-10 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export function AddProductModal({
  isOpen,
  onClose,
  onSubmit,
  categories = [],
  isLoading = false,
}: AddProductModalProps) {
  const [formData, setFormData] = useState<AddProductFormData>({
    images: [],
    name: "",
    description: "",
    category: "",
    quantity: 1,
    price: 0,
    hasVariants: false,
    variants: [],
  });

  const [internalLoading, setInternalLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newFiles],
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInternalLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setInternalLoading(false);
    }
  };

  const addVariant = () => {
    setFormData((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        {
          id: `variant-${Date.now()}`,
          type: "couleur",
          values: [],
          price: 0,
        },
      ],
    }));
  };

  const updateVariant = (index: number, variant: ProductVariant) => {
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.map((v, i) => (i === index ? variant : v)),
    }));
  };

  const removeVariant = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  };

  const submitting = isLoading || internalLoading;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-2xl h-[90vh] flex flex-col">
        {submitting && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm animate-in fade-in duration-300">
            <CartLoading />
          </div>
        )}

        <div className="p-6 border-b border-gray-100 flex-none bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Nouveau produit
          </DialogTitle>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <form
            id="add-product-form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Column: Images */}
            <div className="space-y-8">
              <div
                className="group relative border-2 border-dashed border-gray-200 hover:border-[#D62F42]/50 rounded-3xl p-10 transition-all bg-gray-50/30 hover:bg-[#D62F42]/5 text-center cursor-pointer min-h-[400px] flex flex-col items-center justify-center"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="w-20 h-20 bg-white rounded-full shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                  <Upload className="w-8 h-8 text-[#D62F42]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Glissez vos photos ici
                </h3>
                <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Supporte JPG, PNG. Max 5MB.
                </p>
              </div>

              {/* Image Grid Preview */}
              {formData.images.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Aperçu ({formData.images.length})
                  </h4>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {formData.images.map((file, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm group bg-white"
                      >
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${idx}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1 right-1 bg-white p-1 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-red-50"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Details & Variants */}
            <div className="space-y-8">
              <div className="space-y-6 bg-white rounded-3xl p-1">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Nom du produit
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ex: Robe d'été fleurie"
                    className="h-14 bg-gray-50 border-gray-100 focus:border-[#D62F42] focus:ring-[#D62F42]/10 rounded-xl text-lg px-4"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Prix
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4 text-gray-400 font-medium">
                        €
                      </span>
                      <Input
                        type="number"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            price: parseFloat(e.target.value),
                          })
                        }
                        className="pl-8 h-12 bg-gray-50 border-gray-100 focus:border-[#D62F42] focus:ring-[#D62F42]/10 rounded-xl font-mono text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Stock initial
                    </label>
                    <Input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          quantity: parseInt(e.target.value),
                        })
                      }
                      className="h-12 bg-gray-50 border-gray-100 focus:border-[#D62F42] focus:ring-[#D62F42]/10 rounded-xl font-mono text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Catégorie
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={(val) =>
                      setFormData({ ...formData, category: val })
                    }
                  >
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 focus:border-[#D62F42] focus:ring-[#D62F42]/10 rounded-xl">
                      <SelectValue placeholder="Choisir une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Description
                  </label>
                  <Textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="bg-gray-50 border-gray-100 focus:border-[#D62F42] focus:ring-[#D62F42]/10 rounded-xl resize-none p-4"
                    placeholder="Décrivez votre produit en quelques lignes..."
                  />
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      Variantes
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ajouter des options (taille, couleur...)
                    </p>
                  </div>
                  <Switch
                    checked={formData.hasVariants}
                    onCheckedChange={(checked) => {
                      setFormData((prev) => ({
                        ...prev,
                        hasVariants: checked,
                      }));
                      if (checked && formData.variants.length === 0)
                        addVariant();
                    }}
                  />
                </div>

                {formData.hasVariants && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {formData.variants.map((variant, idx) => (
                      <VariantRow
                        key={variant.id}
                        variant={variant}
                        onChange={(v) => updateVariant(idx, v)}
                        onRemove={() => removeVariant(idx)}
                      />
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addVariant}
                      className="w-full h-12 border-dashed border-gray-300 text-gray-500 hover:border-[#D62F42] hover:text-[#D62F42] hover:bg-[#D62F42]/5 rounded-xl gap-2"
                    >
                      <Upload className="w-4 h-4 rotate-45" />{" "}
                      {/* Plus icon workaround or import Plus */}
                      Ajouter une variante
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-100 bg-white flex justify-end gap-4 flex-none shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={submitting}
            className="h-12 px-8 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            form="add-product-form"
            disabled={submitting}
            className="h-12 px-8 bg-[#D62F42] hover:bg-[#b91e30] text-white rounded-xl shadow-lg shadow-[#D62F42]/30 transition-all hover:scale-[1.02] min-w-[200px]"
          >
            {submitting ? "Publication en cours..." : "Publier le produit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
