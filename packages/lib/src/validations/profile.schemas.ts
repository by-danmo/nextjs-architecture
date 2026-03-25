import { z } from 'zod';

// ─── Update Profile ─────────────────────────────────────────────────────────

export const updateProfileSchema = z.object({
    firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    phone: z
        .string()
        .regex(/^\+?[\d\s\-()]{8,}$/, "Numéro de téléphone invalide")
        .optional()
        .or(z.literal('')),
    about: z.string().max(500, "La description ne peut pas dépasser 500 caractères").optional()
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

// ─── Update Shop ─────────────────────────────────────────────────────────────

export const updateShopSchema = z.object({
    shopName: z.string().min(2, "Le nom de la boutique doit contenir au moins 2 caractères"),
    shopDescription: z
        .string()
        .max(1000, "La description ne peut pas dépasser 1000 caractères")
        .optional(),
    shopLogo: z.string().url("URL du logo invalide").optional().or(z.literal(''))
});

export type UpdateShopValues = z.infer<typeof updateShopSchema>;

// ─── Change Password ─────────────────────────────────────────────────────────

export const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, "Le mot de passe actuel est requis"),
        newPassword: z
            .string()
            .min(8, "Le nouveau mot de passe doit contenir au moins 8 caractères")
            .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
            .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
        confirmNewPassword: z.string().min(1, "Veuillez confirmer le nouveau mot de passe")
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ['confirmNewPassword']
    });

export type ChangePasswordValues = z.infer<typeof changePasswordSchema>;
