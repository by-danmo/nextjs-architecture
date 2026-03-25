import { z } from 'zod';

// ─── Login ─────────────────────────────────────────────────────────────────

export const loginSchema = z.object({
    email: z.string().email("Adresse e-mail invalide"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    rememberMe: z.boolean().optional().default(false)
});

export type LoginFormValues = z.infer<typeof loginSchema>;

// ─── Registration Step 1 ────────────────────────────────────────────────────

export const registerStep1Schema = z.object({
    firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    birthDate: z.string().min(1, "La date de naissance est requise"),
    email: z.string().email("Adresse e-mail invalide"),
    password: z
        .string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
        .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
});

export type RegisterStep1FormValues = z.infer<typeof registerStep1Schema>;

// ─── Registration Step 2 ────────────────────────────────────────────────────

export const registerStep2Schema = z.object({
    shopName: z.string().min(2, "Le nom de la boutique doit contenir au moins 2 caractères"),
    description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
    profilePhoto: z.instanceof(File).nullable().optional(),
    coverPhoto: z.instanceof(File).nullable().optional()
});

export type RegisterStep2FormValues = z.infer<typeof registerStep2Schema>;

// ─── Forgot Password ────────────────────────────────────────────────────────

export const forgotPasswordEmailSchema = z.object({
    email: z.string().email("Adresse e-mail invalide")
});

export type ForgotPasswordEmailValues = z.infer<typeof forgotPasswordEmailSchema>;

// ─── OTP Verification ───────────────────────────────────────────────────────

export const otpVerificationSchema = z.object({
    otpCode: z
        .string()
        .length(6, "Le code OTP doit contenir exactement 6 chiffres")
        .regex(/^\d+$/, "Le code OTP ne doit contenir que des chiffres")
});

export type OtpVerificationValues = z.infer<typeof otpVerificationSchema>;

// ─── Reset Password ─────────────────────────────────────────────────────────

export const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
            .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
        confirmPassword: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères")
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ['confirmPassword']
    });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
