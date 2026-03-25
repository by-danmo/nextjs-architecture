import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

/**
 * FormCheckbox - Composant checkbox réutilisable intégré avec react-hook-form
 *
 * Utilise Controller de react-hook-form pour gérer la valeur de la checkbox.
 * Affiche automatiquement les erreurs de validation sous la checkbox.
 *
 * @example
 * ```tsx
 * <FormCheckbox
 *   name="terms"
 *   control={control}
 *   label={<span>J'accepte les conditions</span>}
 * />
 * ```
 */
interface FormCheckboxProps<T extends FieldValues> {
  /** Nom du champ dans le formulaire (doit correspondre à un champ du schéma) */
  name: Path<T>;
  /** Instance de control de react-hook-form */
  control: Control<T>;
  /** Label affiché à côté de la checkbox (peut contenir du JSX) */
  label?: React.ReactNode;
  /** Classes CSS additionnelles pour le wrapper label */
  className?: string;
}

export function FormCheckbox<T extends FieldValues>({
  name,
  control,
  label,
  className,
}: FormCheckboxProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <label
          className={`flex items-start gap-3 cursor-pointer ${className || ""}`}
        >
          <Checkbox
            label={label}
            checked={field.value}
            onCheckedChange={field.onChange}
            error={error?.message}
          />
        </label>
      )}
    />
  );
}
