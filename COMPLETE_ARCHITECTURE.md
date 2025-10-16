# Architecture Next.js Complète - Migration Exhaustive

## 🎯 Vue d'ensemble

Cette architecture reprend **TOUS** les éléments existants de votre projet et les réorganise selon les meilleures pratiques modernes.

## 📁 Nouvelle Structure Complète

```
src/
├── app/                          # Next.js App Router (inchangé)
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   ├── provider.tsx             # Migré depuis app/provider.tsx
│   └── page.tsx
│
├── components/                   # Composants UI réutilisables
│   ├── ui/                      # Composants de base (Design System)
│   │   ├── button/              # Migré depuis shared/components/button/
│   │   ├── input/               # Migré depuis shared/components/atoms/form-input.tsx
│   │   ├── logo/                # Migré depuis shared/components/atoms/logo.tsx
│   │   ├── icons/               # Migré depuis shared/components/atoms/icons/
│   │   │   ├── cart-icon.tsx
│   │   │   ├── heart-icon.tsx
│   │   │   └── search-icon.tsx
│   │   └── index.ts             # Barrel exports
│   │
│   ├── layout/                  # Composants de mise en page
│   │   ├── header/              # Migré depuis shared/components/molecules/header.tsx
│   │   ├── footer/              # Migré depuis shared/components/molecules/footer.tsx
│   │   ├── sidebar/             # Pour futurs besoins
│   │   ├── navigation/          # Navigation globale
│   │   └── helpers/             # Migré depuis shared/components/layouts/helpers/
│   │       └── flex.tsx
│   │
│   ├── forms/                   # Composants de formulaires
│   │   ├── auth-forms/          # Formulaires d'authentification
│   │   ├── contact-forms/       # Autres formulaires
│   │   └── index.ts
│   │
│   ├── feedback/                # États de chargement, erreurs, vide
│   │   ├── loading/
│   │   ├── error-boundary/
│   │   ├── empty-state/
│   │   └── skeleton/
│   │
│   └── pages/                   # Composants de page complexes
│       └── example.page.tsx     # Migré depuis shared/components/pages/
│
├── features/                    # Modules fonctionnels
│   ├── auth/                    # Feature d'authentification
│   │   ├── components/          # Composants spécifiques à l'auth
│   │   │   ├── login-form.tsx   # Migré depuis features/auth/components/
│   │   │   ├── forgot-password-email.tsx
│   │   │   ├── otp-verification.tsx
│   │   │   └── reset-password.tsx
│   │   ├── hooks/               # Hooks d'authentification
│   │   │   ├── use-auth.ts
│   │   │   ├── use-login.ts
│   │   │   └── use-otp.ts
│   │   ├── services/            # Services API et logique métier
│   │   │   ├── auth-api.service.ts
│   │   │   └── auth.service.ts  # Migré depuis features/auth/api/
│   │   ├── stores/              # État local de la feature
│   │   │   └── auth.store.ts
│   │   ├── types/               # Types spécifiques à l'auth
│   │   │   └── auth.types.ts    # Migré depuis features/auth/schemas/
│   │   ├── utils/               # Utilitaires d'auth
│   │   ├── views/               # Pages/vues principales
│   │   │   └── auth-page.tsx    # Migré depuis features/auth/views/
│   │   └── index.ts             # API publique de la feature
│   │
│   ├── dashboard/               # Feature tableau de bord
│   ├── user-management/         # Future feature
│   └── shopping/                # Pour e-commerce (cart, wishlist)
│
├── lib/                         # Utilitaires et configurations partagés
│   ├── api/                     # Client API
│   │   ├── client.ts            # Client API principal
│   │   ├── endpoints.ts         # Définition des endpoints
│   │   └── types.ts             # Types API
│   │
│   ├── auth/                    # Utilitaires d'authentification
│   │   ├── session.ts           # Gestion des sessions
│   │   ├── tokens.ts            # Gestion des tokens
│   │   └── middleware.ts        # Middleware d'auth
│   │
│   ├── theme/                   # Système de thèmes
│   │   ├── theme-manager.ts     # Gestionnaire de thèmes
│   │   ├── colors.ts            # Migré depuis styles/colors.ts
│   │   └── theme-provider.tsx   # Migré depuis shared/providers/
│   │
│   ├── validations/             # Schémas de validation Zod
│   │   ├── auth.schemas.ts      # Migré depuis features/auth/schemas/
│   │   ├── user.schemas.ts
│   │   └── common.schemas.ts
│   │
│   ├── constants/               # Constantes de l'application
│   │   ├── app.constants.ts     # Migré depuis constants/
│   │   ├── routes.constants.ts
│   │   └── api.constants.ts
│   │
│   ├── utils/                   # Utilitaires généraux
│   │   ├── cn.ts                # Utilitaire className
│   │   ├── format.ts            # Migré depuis shared/utils/format-money.ts
│   │   ├── crypto.ts            # Migré depuis shared/utils/crypto.ts
│   │   ├── toast.ts             # Migré depuis shared/utils/toastify.ts
│   │   ├── providers-tree.ts    # Migré depuis shared/utils/build-providers-tree.tsx
│   │   ├── response-wrapper.ts  # Migré depuis shared/utils/response-wrapper.tsx
│   │   └── theme-utils.ts       # Migré depuis shared/utils/setThemeColor.ts
│   │
│   └── react-query/             # Configuration React Query
│       ├── client.ts            # Migré depuis shared/lib/react-query.ts
│       └── providers.tsx
│
├── hooks/                       # Hooks globaux partagés
│   ├── use-local-storage.ts
│   ├── use-debounce.ts
│   ├── use-media-query.ts
│   └── index.ts                 # Migré depuis shared/hooks/
│
├── stores/                      # État global (Zustand)
│   ├── ui.store.ts              # Migré depuis shared/store/useUIStore.ts
│   ├── auth.store.ts            # Store global d'auth
│   ├── theme.store.ts           # Store de thème
│   └── index.ts                 # Migré depuis shared/store/
│
├── providers/                   # Providers React
│   ├── theme.provider.tsx       # Migré depuis shared/providers/themecolors.provider.tsx
│   ├── auth.provider.tsx        # Nouveau provider d'auth
│   ├── query.provider.tsx       # Provider React Query
│   └── root.provider.tsx        # Provider racine qui combine tous
│
├── data/                        # Données statiques et mock
│   ├── menu.data.ts             # Migré depuis shared/data/menu.data.tsx
│   ├── navigation.data.ts       # Données de navigation
│   └── mock/                    # Données de mock pour dev
│
├── types/                       # Types TypeScript globaux
│   ├── global.d.ts              # Types globaux
│   ├── api.types.ts             # Types API
│   ├── ui.types.ts              # Types UI
│   └── index.ts                 # Migré depuis shared/types/
│
├── styles/                      # Styles globaux
│   ├── globals.css              # Styles CSS globaux
│   ├── components.css           # Styles de composants
│   └── themes.css               # Variables CSS des thèmes
│
├── assets/                      # Assets statiques
│   ├── images/                  # Migré depuis shared/assets/ et public/assets/
│   ├── icons/                   # Icônes SVG
│   └── fonts/                   # Polices locales
│
├── config/                      # Configuration (inchangé mais amélioré)
│   ├── env.ts                   # Configuration d'environnement
│   ├── site.config.ts           # Configuration du site
│   ├── app-route.config.ts      # Configuration des routes
│   └── index.ts
│
├── context/                     # Contextes React (si nécessaire)
│   ├── theme.context.tsx        # Contexte de thème (si pas Zustand)
│   └── index.ts                 # Migré depuis shared/context/
│
└── middleware.ts                # Middleware Next.js (inchangé)
```

## 🔄 Plan de Migration Détaillé

### Phase 1: Structure de Base

```bash
# Créer la nouvelle structure
mkdir -p src/{components/{ui,layout,forms,feedback,pages},lib/{api,auth,theme,validations,constants,utils,react-query},hooks,stores,providers,data,assets/{images,icons,fonts},context}
```

### Phase 2: Migration des Composants UI

```bash
# Composants atomiques
mv src/shared/components/atoms/form-input.tsx → src/components/ui/input/
mv src/shared/components/atoms/logo.tsx → src/components/ui/logo/
mv src/shared/components/atoms/icons/ → src/components/ui/icons/
mv src/shared/components/button/ → src/components/ui/button/

# Composants de layout
mv src/shared/components/molecules/header.tsx → src/components/layout/header/
mv src/shared/components/molecules/footer.tsx → src/components/layout/footer/
mv src/shared/components/layouts/helpers/ → src/components/layout/helpers/

# Composants de page
mv src/shared/components/pages/ → src/components/pages/
mv src/shared/components/organisms/ → src/components/forms/ # ou feedback/ selon le type
```

### Phase 3: Migration des Utilitaires

```bash
# Utilitaires
mv src/shared/utils/format-money.ts → src/lib/utils/format.ts
mv src/shared/utils/crypto.ts → src/lib/utils/crypto.ts
mv src/shared/utils/toastify.ts → src/lib/utils/toast.ts
mv src/shared/utils/build-providers-tree.tsx → src/lib/utils/providers-tree.ts
mv src/shared/utils/response-wrapper.tsx → src/lib/utils/response-wrapper.ts
mv src/shared/utils/setThemeColor.ts → src/lib/utils/theme-utils.ts

# API et auth
mv src/shared/lib/api-client.ts → src/lib/api/client.ts
mv src/shared/lib/auth/ → src/lib/auth/
mv src/shared/lib/react-query.ts → src/lib/react-query/client.ts
```

### Phase 4: Migration des Stores et Providers

```bash
# Stores
mv src/shared/store/useUIStore.ts → src/stores/ui.store.ts
mv src/shared/store/ → src/stores/

# Providers
mv src/shared/providers/themecolors.provider.tsx → src/providers/theme.provider.tsx

# Context (si utilisé)
mv src/shared/context/ → src/context/
```

### Phase 5: Migration des Données et Types

```bash
# Données
mv src/shared/data/ → src/data/

# Types
mv src/shared/types/ → src/types/

# Assets
mv src/shared/assets/ → src/assets/
mv public/assets/ → src/assets/images/
```

### Phase 6: Migration des Features

```bash
# Réorganiser les features existantes
# Chaque feature aura sa propre structure complète
```

## 🎨 Améliorations Apportées

### 1. **Séparation Claire des Responsabilités**

- **UI Components**: Composants purement visuels et réutilisables
- **Layout Components**: Composants de mise en page spécifiques
- **Feature Components**: Composants avec logique métier
- **Page Components**: Composants de page complexes

### 2. **Gestion Améliorée du Thème**

- Migration du système de couleurs existant
- Provider de thème optimisé
- Utilitaires de thème centralisés
- Support CSS variables + Tailwind

### 3. **Architecture API Robuste**

- Client API type-safe
- Gestion d'erreurs centralisée
- Cache et optimisations React Query
- Endpoints typés

### 4. **Système d'Auth Sécurisé**

- Gestion des tokens sécurisée
- Sessions server-side
- Middleware d'authentification
- Hooks d'auth type-safe

### 5. **État Global Optimisé**

- Zustand pour l'état client
- React Query pour l'état serveur
- Stores feature-scopés
- Persistence intelligente

## 📊 Mapping Fichier par Fichier

| Ancien Chemin                               | Nouveau Chemin                        | Notes                    |
| ------------------------------------------- | ------------------------------------- | ------------------------ |
| `shared/components/atoms/form-input.tsx`    | `components/ui/input/input.tsx`       | Amélioré avec validation |
| `shared/components/atoms/logo.tsx`          | `components/ui/logo/logo.tsx`         | Optimisé pour SEO        |
| `shared/components/button/button.tsx`       | `components/ui/button/button.tsx`     | Variants améliorés       |
| `shared/components/molecules/header.tsx`    | `components/layout/header/header.tsx` | Navigation responsive    |
| `shared/components/molecules/footer.tsx`    | `components/layout/footer/footer.tsx` | Footer moderne           |
| `shared/utils/format-money.ts`              | `lib/utils/format.ts`                 | Plus d'utilitaires       |
| `shared/utils/toastify.ts`                  | `lib/utils/toast.ts`                  | API améliorée            |
| `shared/store/useUIStore.ts`                | `stores/ui.store.ts`                  | Store optimisé           |
| `shared/providers/themecolors.provider.tsx` | `providers/theme.provider.tsx`        | Provider amélioré        |
| `shared/data/menu.data.tsx`                 | `data/menu.data.ts`                   | Types améliorés          |
| `styles/colors.ts`                          | `lib/theme/colors.ts`                 | Système de thème         |
| `features/auth/components/`                 | `features/auth/components/`           | Structure améliorée      |
| `features/auth/schemas/`                    | `lib/validations/auth.schemas.ts`     | Validation centralisée   |
