# Admin Auth Module

Module d'authentification réutilisable pour les applications admin et seller.

## 📋 Vue d'ensemble

Ce module fournit des composants d'authentification complets et réutilisables utilisant **react-hook-form** pour la validation et la gestion des formulaires. Tous les composants sont agnostiques de la logique métier et acceptent des callbacks pour gérer la soumission et la navigation.

## 🎯 Philosophie

- **Don't Repeat Yourself (DRY)**: Code réutilisable entre applications
- **Separation of Concerns**: Les composants gèrent uniquement l'UI et la validation
- **Composabilité**: Callbacks pour la logique métier et navigation
- **Type Safety**: TypeScript strict avec types exportés
- **Best Practices**: react-hook-form + zod pour validation

## 📦 Composants disponibles

### LoginForm

Formulaire de connexion avec email, mot de passe et "Se souvenir de moi".

```tsx
import { LoginForm } from '@multi-app/design-sys/admin-auth';

<LoginForm
  onSubmit={async (data) => {
    // Logique de connexion
    await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe
    });
  }}
  loading={loading}
  error={error}
  onNavigateToRegister={() => router.push('/inscription/step-1')}
  onNavigateToForgotPassword={() => router.push('/mot-de-passe-oublie')}
/>
```

### RegisterStep1Form

Première étape d'inscription (informations personnelles).

```tsx
import { RegisterStep1Form } from '@multi-app/design-sys/admin-auth';

<RegisterStep1Form
  onSubmit={async (data) => {
    // Sauvegarder en sessionStorage et naviguer
    sessionStorage.setItem('registrationStep1', JSON.stringify(data));
    router.push('/inscription/step-2');
  }}
  loading={loading}
  error={error}
  onNavigateToLogin={() => router.push('/connexion')}
/>
```

### RegisterStep2Form

Deuxième étape d'inscription (détails boutique, photos).

```tsx
import { RegisterStep2Form } from '@multi-app/design-sys/admin-auth';

<RegisterStep2Form
  onSubmit={async (step2Data, step1Data) => {
    // step1Data est automatiquement récupéré depuis sessionStorage
    await signUp.email({
      email: step1Data.email,
      password: step1Data.password,
      name: `${step1Data.firstName} ${step1Data.lastName}`
    });
    
    // Puis enregistrer les détails boutique via API
    // await createShop({ ...step2Data, userId: result.userId });
  }}
  loading={loading}
  error={error}
  onNavigateToLogin={() => router.push('/connexion')}
  onNavigateBack={() => router.push('/inscription/step-1')}
/>
```

### ForgotPasswordForm

Formulaire de demande de réinitialisation de mot de passe.

```tsx
import { ForgotPasswordForm } from '@multi-app/design-sys/admin-auth';

<ForgotPasswordForm
  onSubmit={async (data) => {
    await forgetPassword({ email: data.email });
    setSuccess(true);
  }}
  loading={loading}
  error={error}
  success={success}
  onNavigateToLogin={() => router.push('/connexion')}
/>
```

### VerifyOTPForm

Formulaire de vérification du code OTP à 6 chiffres.

```tsx
import { VerifyOTPForm } from '@multi-app/design-sys/admin-auth';

<VerifyOTPForm
  email={email}
  onSubmit={async (data) => {
    const result = await authClient.emailOtp.verifyEmail({
      email,
      otp: data.otp
    });
    if (result.data) {
      router.push('/reinitialiser-mot-de-passe');
    }
  }}
  onResendOTP={async () => {
    await forgetPassword({ email });
  }}
  loading={loading}
  resending={resending}
  error={error}
  onNavigateToLogin={() => router.push('/connexion')}
/>
```

### ResetPasswordForm

Formulaire de réinitialisation du mot de passe.

```tsx
import { ResetPasswordForm } from '@multi-app/design-sys/admin-auth';

<ResetPasswordForm
  email={email}
  otp={otp}
  onSubmit={async (data) => {
    await resetPassword({
      email,
      otp,
      password: data.password
    });
    router.push('/connexion');
  }}
  loading={loading}
  error={error}
  onNavigateToLogin={() => router.push('/connexion')}
/>
```

### AuthHeaderTitle

En-tête réutilisable pour les pages d'authentification avec icône optionnelle.

```tsx
import { AuthHeaderTitle, UserAuthIcon } from '@multi-app/design-sys/admin-auth';

<AuthHeaderTitle
  title="Connexion"
  subtitle="Lancez-vous dans une carrière dans le monde des affaires !"
  icon={<UserAuthIcon />} // Icône utilisateur par défaut
/>
```

### UserAuthIcon

Icône utilisateur par défaut pour l'authentification (avec fond gradient et bordure).

```tsx
import { UserAuthIcon } from '@multi-app/design-sys/admin-auth';

// Utilisation avec AuthHeaderTitle
<AuthHeaderTitle
  title="Connexion"
  icon={<UserAuthIcon />}
/>

// Ou utilisation standalone
<UserAuthIcon />
```

### RegistrationStepper

Indicateur visuel de progression pour l'inscription multi-étapes.

```tsx
import { RegistrationStepper } from '@multi-app/design-sys/admin-auth';

<RegistrationStepper currentStep={1} /> // ou currentStep={2}
```

## 🔧 Types disponibles

Tous les types sont exportés pour faciliter l'utilisation :

```tsx
import type {
  LoginFormData,
  LoginFormProps,
  RegisterStep1FormData,
  RegisterStep1FormProps,
  RegisterStep2FormData,
  RegisterStep2FormProps,
  ForgotPasswordFormData,
  ForgotPasswordFormProps,
  VerifyOTPFormData,
  VerifyOTPFormProps,
  ResetPasswordFormData,
  ResetPasswordFormProps,
  AuthHeaderTitleProps,
  RegistrationStepperProps
} from '@multi-app/design-sys/admin-auth';
```

## 📝 Exemple d'utilisation complète

### Dans l'app admin

```tsx
// apps/admin/src/app/(auth)/connexion/page.tsx
'use client';

import { LoginForm, AuthHeaderTitle } from '@multi-app/design-sys/admin-auth';
import { signIn } from '@multi-app/lib/auth/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ConnexionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError(undefined);

    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe
      });

      if (result.error) {
        setError(result.error.message || 'Email ou mot de passe incorrect');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 w-full">
      <AuthHeaderTitle
        title="Connexion"
        subtitle="Lancez-vous dans une carrière dans le monde des affaires !"
        icon={<UserAuthIcon />}
      />

      <LoginForm
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        onNavigateToRegister={() => router.push('/inscription/step-1')}
        onNavigateToForgotPassword={() => router.push('/mot-de-passe-oublie')}
      />
    </div>
  );
}
```

### Dans l'app admin-seller

Le même code fonctionne directement ! C'est le principe de réutilisabilité.

```tsx
// apps/admin-seller/src/app/(auth)/connexion/page.tsx
// 👆 Code identique à celui de admin !
```

## 🎨 Layout d'authentification

Les composants sont conçus pour fonctionner avec un layout partagé :

```tsx
// apps/admin/src/app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="relative w-full flex flex-col justify-end items-center px-16 py-24 gap-8"
          style={{
            background: 'linear-gradient(0deg, #D62F42 0%, #DE5968 100%)',
          }}
        >
          <h1 className="text-white text-[6rem] leading-[110%]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
      </div>

      {/* Right Side - Form Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[50rem]">{children}</div>
      </div>
    </div>
  );
}
```

## ✅ Avantages

1. **Maintenabilité**: Un seul endroit pour modifier les formulaires
2. **Cohérence**: UI identique entre admin et admin-seller
3. **Type Safety**: TypeScript strict pour éviter les erreurs
4. **Validation**: react-hook-form + zod intégrés
5. **Flexibilité**: Callbacks pour personnaliser le comportement
6. **Testabilité**: Composants isolés faciles à tester

## 🚀 Prochaines étapes

- [ ] Ajouter tests unitaires pour chaque composant
- [ ] Ajouter Storybook stories pour documentation visuelle
- [ ] Implémenter l'upload réel des photos (S3/Cloudinary)
- [ ] Créer un hook personnalisé `useAuthFlow` pour gérer l'état global
- [ ] Ajouter support i18n pour multilingue
- [ ] Ajouter analytics tracking sur les formulaires

## 📚 Ressources

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Better Auth](https://better-auth.com/)
