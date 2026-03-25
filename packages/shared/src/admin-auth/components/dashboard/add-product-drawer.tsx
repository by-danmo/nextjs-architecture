"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { ChevronDown, Plus, Upload, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

// ============================================================================
// Types
// ============================================================================

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

export interface AddProductDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddProductFormData) => void;
  categories?: Array<{ value: string; label: string }>;
}

// ============================================================================
// Default Categories
// ============================================================================

const defaultCategories = [
  { value: "beaute", label: "Beauté" },
  { value: "mode", label: "Mode" },
  { value: "accessoires", label: "Accessoires" },
  { value: "maison", label: "Maison & Déco" },
  { value: "alimentation", label: "Alimentation" },
];

// ============================================================================
// Variant Type Options
// ============================================================================

const variantTypeOptions = [
  { value: "couleur", label: "Couleur" },
  { value: "taille", label: "Taille" },
  { value: "materiau", label: "Matériau" },
];

// ============================================================================
// Color Options for Color Variants
// ============================================================================

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

// ============================================================================
// Helper Components
// ============================================================================

const FormLabel = ({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <label className="block text-sm font-medium text-gray-900 mb-2">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

const FormInput = ({
  placeholder,
  value,
  onChange,
  type = "text",
  className,
}: {
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={cn(
      "w-full px-[1.6rem] py-[1.4rem] text-base",
      "bg-white border border-gray-200 rounded-2xl",
      "placeholder:text-gray-400",
      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
      "transition-colors",
      className,
    )}
  />
);

const FormSelect = ({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between gap-2",
          "px-[1.6rem] py-[1.4rem] text-base text-left",
          "bg-white border border-gray-200 rounded-2xl",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "transition-colors",
        )}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value
            ? options.find((o) => o.value === value)?.label
            : placeholder || "Sélectionnez..."}
        </span>
        <ChevronDown
          className={cn(
            "w-6 h-6 text-gray-400 transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="max-h-72 overflow-y-auto py-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full px-[1.6rem] py-[1.2rem] text-base text-left",
                    "hover:bg-gray-50 transition-colors",
                    option.value === value && "bg-primary-50 text-primary",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Switch = ({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
}) => (
  <div className="flex items-start gap-3">
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-[2.8rem] w-[5rem] shrink-0 cursor-pointer items-center rounded-full transition-colors",
        checked ? "bg-[#22C55E]" : "bg-gray-200",
      )}
    >
      <span
        className={cn(
          "pointer-events-none block h-[2.2rem] w-[2.2rem] rounded-full bg-white shadow-lg transition-transform",
          checked ? "translate-x-[2.4rem]" : "translate-x-[0.3rem]",
        )}
      />
    </button>
    {(label || description) && (
      <div className="flex flex-col gap-1">
        {label && (
          <span className="text-base font-medium text-gray-900">{label}</span>
        )}
        {description && (
          <span className="text-sm text-gray-500 leading-relaxed">
            {description}
          </span>
        )}
      </div>
    )}
  </div>
);

const ColorTag = ({
  value,
  color,
  onRemove,
}: {
  value: string;
  color?: string;
  onRemove: () => void;
}) => (
  <span className="inline-flex items-center gap-2 px-[1.2rem] py-[0.6rem] bg-gray-100 rounded-full text-base">
    {color && (
      <span
        className="w-[1.6rem] h-[1.6rem] rounded-full border border-black/10"
        style={{ backgroundColor: color }}
      />
    )}
    <span className="text-gray-700">{value}</span>
    <button
      type="button"
      onClick={onRemove}
      className="text-gray-400 hover:text-gray-600"
    >
      <X className="w-4 h-4" />
    </button>
  </span>
);

// ============================================================================
// Variant Row Component
// ============================================================================

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
    <div className="grid grid-cols-[180px_1fr_180px] gap-4 items-start">
      {/* Type de variante */}
      <FormSelect
        value={variant.type}
        onChange={(type) => onChange({ ...variant, type })}
        options={variantTypeOptions}
        placeholder="Type"
      />

      {/* Valeurs */}
      <div className="relative">
        <div
          className={cn(
            "flex flex-wrap items-center gap-2",
            "px-[1.4rem] py-[1.2rem] min-h-[5rem]",
            "bg-white border border-gray-200 rounded-2xl",
            "cursor-text",
          )}
          onClick={() => variant.type === "couleur" && setShowColorPicker(true)}
        >
          {variant.values.map((v, idx) => (
            <ColorTag
              key={idx}
              value={v.value}
              color={v.color}
              onRemove={() => removeValue(idx)}
            />
          ))}
          {variant.values.length === 0 && (
            <span className="text-base text-gray-400">
              Ajouter des valeurs...
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
            <div className="absolute z-50 w-full mt-2 p-4 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Choisissez une couleur
              </p>
              <div className="grid grid-cols-4 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => addColorValue(color.value, color.color)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-xl text-base",
                      "hover:bg-gray-50 transition-colors border",
                      variant.values.find((v) => v.value === color.value)
                        ? "border-primary bg-primary-50"
                        : "border-transparent",
                    )}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-black/10"
                      style={{ backgroundColor: color.color }}
                    />
                    <span className="text-gray-700">{color.value}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Prix de variante */}
      <FormInput
        placeholder="XOF 0"
        value={variant.price > 0 ? `XOF ${variant.price}` : ""}
        onChange={(val) => {
          const num = parseInt(val.replace(/\D/g, "")) || 0;
          onChange({ ...variant, price: num });
        }}
      />
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export const AddProductDrawer = ({
  isOpen,
  onClose,
  onSubmit,
  categories = defaultCategories,
}: AddProductDrawerProps) => {
  // Form state
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [hasVariants, setHasVariants] = useState(false);
  const [variants, setVariants] = useState<ProductVariant[]>([]);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);

  const resetForm = useCallback(() => {
    setImages([]);
    setImagePreviewUrls([]);
    setName("");
    setDescription("");
    setCategory("");
    setQuantity(0);
    setPrice(0);
    setHasVariants(false);
    setVariants([]);
  }, []);

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = () => {
    const formData: AddProductFormData = {
      images,
      name,
      description,
      category,
      quantity,
      price,
      hasVariants,
      variants,
    };
    onSubmit(formData);
  };

  // File handling
  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files).filter(
      (file) => file.type.startsWith("image/") && images.length < 10,
    );

    const newUrls = newFiles.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...newFiles].slice(0, 10));
    setImagePreviewUrls((prev) => [...prev, ...newUrls].slice(0, 10));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeImage = (index: number) => {
    const urlToRevoke = imagePreviewUrls[index];
    if (urlToRevoke) {
      URL.revokeObjectURL(urlToRevoke);
    }
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      {
        id: `variant-${Date.now()}`,
        type: "couleur",
        values: [],
        price: 0,
      },
    ]);
  };

  const updateVariant = (index: number, variant: ProductVariant) => {
    setVariants((prev) => prev.map((v, i) => (i === index ? variant : v)));
  };

  const removeVariant = (index: number) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40"
        onClick={handleClose}
      />

      {/* Drawer Panel */}
      <div
        className={cn(
          "fixed z-50 flex flex-col",
          "bg-white rounded-2xl shadow-2xl",
          "w-[720px] max-h-[calc(100vh-20px)]",
          "top-[10px] right-[10px] bottom-[10px]",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Créer un produit
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-7 h-7 text-gray-900" strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Image Upload */}
          <div>
            <FormLabel>Images du produits</FormLabel>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={cn(
                "border-2 border-dashed rounded-2xl p-8 text-center transition-colors",
                isDragging
                  ? "border-primary bg-primary-50"
                  : "border-gray-200 hover:border-gray-300",
              )}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-[#D62F42]" />
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900 cursor-pointer hover:text-primary">
                    Choisissez un fichier ou glissez-déposez-le ici.
                    <input
                      type="file"
                      multiple
                      accept="image/jpeg,image/png"
                      onChange={(e) => handleFiles(e.target.files)}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-400">
                  Vous pouvez télécharger jusqu'à 10 images aux formats JPEG,
                  PNG, d'une taille maximale de 50 Mo.
                </p>
              </div>
            </div>

            {/* Image Previews */}
            {imagePreviewUrls.length > 0 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {imagePreviewUrls.map((url, idx) => (
                  <div
                    key={idx}
                    className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={url}
                      alt={`Preview ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Name */}
          <div>
            <FormLabel>Nom du produit</FormLabel>
            <FormInput
              placeholder="Entrez le nom de votre produit"
              value={name}
              onChange={setName}
            />
          </div>

          {/* Description */}
          <div>
            <FormLabel>Description</FormLabel>
            <textarea
              placeholder="Écrivez ici la description de votre produit..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={cn(
                "w-full px-[1.6rem] py-[1.4rem] text-base resize-y",
                "bg-white border border-gray-200 rounded-2xl",
                "placeholder:text-gray-400",
                "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                "transition-colors",
              )}
            />
          </div>

          {/* Category and Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FormLabel>Catégorie</FormLabel>
              <FormSelect
                value={category}
                onChange={setCategory}
                options={categories}
                placeholder="Sélectionnez une catégorie"
              />
            </div>
            <div>
              <FormLabel>Quantité</FormLabel>
              <FormInput
                type="number"
                placeholder="0"
                value={quantity || ""}
                onChange={(val) => setQuantity(parseInt(val) || 0)}
              />
            </div>
          </div>

          {/* Price */}
          <div>
            <FormLabel>Prix / montant</FormLabel>
            <FormInput
              placeholder="XOF 0"
              value={price > 0 ? `XOF ${price.toLocaleString("fr-FR")}` : ""}
              onChange={(val) => {
                const num = parseInt(val.replace(/\D/g, "")) || 0;
                setPrice(num);
              }}
            />
          </div>

          {/* Variants Toggle */}
          <div className="pt-2">
            <Switch
              checked={hasVariants}
              onChange={(checked) => {
                setHasVariants(checked);
                if (checked && variants.length === 0) {
                  addVariant();
                }
              }}
              label="Ajouter des variantes de produit"
              description="Activez cette option pour ajouter des variantes de produit telles que la couleur, la taille..."
            />
          </div>

          {/* Variants Section */}
          {hasVariants && (
            <div className="space-y-4 pt-2">
              {/* Variant Headers */}
              <div className="grid grid-cols-[140px_1fr_140px] gap-3 text-sm font-medium text-gray-500">
                <span>Type de variante</span>
                <span>Valeur</span>
                <span>Prix de variante</span>
              </div>

              {/* Variant Rows */}
              {variants.map((variant, index) => (
                <VariantRow
                  key={variant.id}
                  variant={variant}
                  onChange={(v) => updateVariant(index, v)}
                  onRemove={() => removeVariant(index)}
                />
              ))}

              {/* Add Variant Button */}
              <button
                type="button"
                onClick={addVariant}
                className={cn(
                  "flex items-center justify-center gap-3 w-full",
                  "px-5 py-4 text-base font-medium",
                  "bg-white border border-gray-200 rounded-2xl",
                  "text-gray-700 hover:bg-gray-50 transition-colors",
                )}
              >
                <Plus className="w-6 h-6" />
                Ajouter une variante
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 px-6 py-5 border-t border-gray-200">
          {/* Cancel Button */}
          <button
            type="button"
            onClick={handleClose}
            className={cn(
              "px-8 py-4 text-base font-medium",
              "bg-white border border-gray-200 rounded-2xl",
              "text-gray-900 hover:bg-gray-50 transition-colors",
            )}
          >
            Annuler
          </button>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className={cn(
              "px-8 py-4 text-base font-medium",
              "bg-[#D62F42] rounded-2xl",
              "text-white hover:bg-[#C12A3B] transition-colors",
            )}
          >
            Ajouter
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProductDrawer;
