# Quick Start Guide - Admin Auth Module

## 🚀 Installation

Le module est déjà disponible dans le monorepo. Aucune installation nécessaire.

## 📦 Import

```tsx
import {
  LoginForm,
  RegisterStep1Form,
  RegisterStep2Form,
  ForgotPasswordForm,
  VerifyOTPForm,
  ResetPasswordForm,
  AuthHeaderTitle,
  RegistrationStepper,
  UserAuthIcon
} from '@multi-app/design-sys/admin-auth';

// Types
import type {
  LoginFormData,
  RegisterStep1FormData,
  RegisterStep2FormData
} from '@multi-app/design-sys/admin-auth';
```

## ⚡ Usage rapide

### Login Page

```tsx
'use client';

import {
  LoginForm,
  AuthHeaderTitle,
  UserAuthIcon
} from '@multi-app/design-sys/admin-auth';
import { signIn } from '@multi-app/lib/auth/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ConnexionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await signIn.email(data);
      if (result.error) setError(result.error.message);
      else router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 w-full">
      <AuthHeaderTitle
        title="Connexion"
        subtitle="Bienvenue!"
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

### Register Step 1

```tsx
'use client';

import {
  RegisterStep1Form,
  AuthHeaderTitle,
  RegistrationStepper,
  UserAuthIcon
} from '@multi-app/design-sys/admin-auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function InscriptionStep1Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      sessionStorage.setItem('registrationStep1', JSON.stringify(data));
      router.push('/inscription/step-2');
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 w-full">
      <AuthHeaderTitle
        title="Créez un compte !"
        icon={<UserAuthIcon />}
      />
      <RegistrationStepper currentStep={1} />
      <RegisterStep1Form
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        onNavigateToLogin={() => router.push('/connexion')}
      />
    </div>
  );
}
```

### Register Step 2

```tsx
'use client';

import {
  RegisterStep2Form,
  AuthHeaderTitle,
  RegistrationStepper,
  UserAuthIcon
} from '@multi-app/design-sys/admin-auth';
import { signUp } from '@multi-app/lib/auth/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function InscriptionStep2Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (step2Data, step1Data) => {
    setLoading(true);
    try {
      const result = await signUp.email({
        email: step1Data.email,
        password: step1Data.password,
        name: `${step1Data.firstName} ${step1Data.lastName}`
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        sessionStorage.removeItem('registrationStep1');
        router.push('/success');
      }
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 w-full">
      <AuthHeaderTitle
        title="Créez un compte !"
        icon={<UserAuthIcon />}
      />
      <RegistrationStepper currentStep={2} />
      <RegisterStep2Form
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        onNavigateToLogin={() => router.push('/connexion')}
        onNavigateBack={() => router.push('/inscription/step-1')}
      />
    </div>
  );
}
```

## 🎨 Layout recommandé

```tsx
// app/(auth)/layout.tsx
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left - Gradient */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="relative w-full flex flex-col justify-end items-center px-16 py-24"
          style={{
            background: 'linear-gradient(0deg, #D62F42 0%, #DE5968 100%)'
          }}
        >
          <h1 className="text-white text-[6rem]">Your Brand</h1>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[50rem]">{children}</div>
      </div>
    </div>
  );
}
```

## 📝 Props essentielles

### Tous les formulaires acceptent:

```tsx
{
  onSubmit: (data) => Promise<void>;  // Fonction callback
  loading?: boolean;                   // État de chargement
  error?: string;                      // Message d'erreur
}
```

### Props de navigation (optionnelles):

```tsx
{
  onNavigateToLogin?: () => void;
  onNavigateToRegister?: () => void;
  onNavigateToForgotPassword?: () => void;
  onNavigateBack?: () => void;
}
```

## ✅ Pattern recommandé

1. Créer un état pour `loading` et `error`
2. Implémenter `handleSubmit` avec try/catch
3. Appeler l'API auth dans `handleSubmit`
4. Gérer les erreurs et rediriger en cas de succès
5. Passer les callbacks de navigation

## 🔧 Validation automatique

Tous les formulaires incluent:
- ✅ Validation temps réel avec zod
- ✅ Messages d'erreur en français
- ✅ Type-safety avec TypeScript
- ✅ Performance optimisée (react-hook-form)

## 📚 Documentation complète

Voir [README.md](./README.md) pour:
- Tous les composants disponibles
- Props détaillées
- Exemples avancés
- Types TypeScript
- Best practices

## 🆘 Support

Questions? Voir:
- `README.md` dans ce dossier
- `REFACTORING_AUTH_ADMIN.md` à la racine
- Code source dans `components/`
