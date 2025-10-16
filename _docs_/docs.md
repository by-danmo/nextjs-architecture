# Next.js Architecture Blank - Documentation Complète

**Version:** 1.0.0  
**Dernière mise à jour:** 15 octobre 2025  
**Next.js Version:** 15.5.5  
**Branch actuelle:** improvements

## 📚 Table des Matières

1. [Introduction](#introduction)
2. [Philosophie du Projet](#philosophie-du-projet)
3. [Stack Technologique](#stack-technologique)
4. [Structure du Projet](#structure-du-projet)
5. [Installation et Configuration](#installation-et-configuration)
6. [Scripts et Commandes](#scripts-et-commandes)
7. [Architecture des Composants](#architecture-des-composants)
8. [Système d'Authentification](#système-dauthentification)
9. [Gestion d'État](#gestion-détat)
10. [API et Requêtes HTTP](#api-et-requêtes-http)
11. [Styles et Thèmes](#styles-et-thèmes)
12. [Formulaires et Validation](#formulaires-et-validation)
13. [Tests](#tests)
14. [Storybook](#storybook)
15. [Conventions et Bonnes Pratiques](#conventions-et-bonnes-pratiques)
16. [Déploiement](#déploiement)

---

## Introduction

Ce projet est un **template Next.js 15** professionnel, modulaire et prêt pour la production. Il intègre les meilleures pratiques actuelles du développement web moderne et fournit une base solide pour construire des applications React évolutives.

### 🎯 Objectifs

-   🚀 **Démarrage Rapide**: Configuration minimale, commencez à coder immédiatement
-   🏗️ **Architecture Scalable**: Structure modulaire qui supporte la croissance
-   🎨 **UI/UX Moderne**: Composants réutilisables avec Tailwind CSS et animations
-   🔒 **Authentification Flexible**: Système d'auth personnalisable sans dépendance lourde
-   ✅ **Qualité de Code**: Outils intégrés (ESLint, Prettier, Husky, TypeScript)
-   📚 **Documentation**: Documentation complète et exemples pratiques
-   🧪 **Tests**: Configuration Playwright pour tests E2E

### 🌟 Caractéristiques Principales

-   ✨ Next.js 15.5.5 avec App Router
-   🎭 React 19 avec Server Components
-   💨 TailwindCSS 4 pour le styling
-   🎯 TypeScript strict pour la sécurité des types
-   🔄 Tanstack Query (React Query) pour le data fetching
-   🐻 Zustand pour la gestion d'état globale
-   🎬 Framer Motion pour les animations
-   📝 React Hook Form + Zod pour les formulaires
-   🎨 Storybook 9 pour la documentation des composants
-   🧪 Playwright pour les tests E2E
-   🪝 Husky + Commitlint pour les git hooks
-   📦 PNPM comme gestionnaire de paquets

---

## Philosophie du Projet

### Principes Fondamentaux

1. **Modularité**

    - Fonctionnalités isolées dans des features autonomes
    - Composants réutilisables et découplés
    - Architecture par couches bien définie

2. **Scalabilité**

    - Structure qui supporte la croissance sans refactoring majeur
    - Patterns établis pour ajouter de nouvelles fonctionnalités
    - Performance optimisée (SSR, CSR, Static Generation)

3. **Expérience Développeur (DX)**

    - Configuration TypeScript stricte
    - Auto-completion et IntelliSense optimisés
    - Hot reload rapide avec Turbopack
    - Outils de qualité de code automatisés

4. **Maintenabilité**
    - Code auto-documenté avec types TypeScript
    - Structure de fichiers cohérente et prévisible
    - Conventions de nommage claires
    - Tests et Storybook intégrés

---

## Stack Technologique

### Core Framework

| Technologie | Version | Utilisation                        |
| ----------- | ------- | ---------------------------------- |
| Next.js     | 15.5.5  | Framework React avec SSR/SSG       |
| React       | 19.2.0  | Library UI avec Server Components  |
| TypeScript  | 5.5.4   | Langage typé pour JavaScript       |
| PNPM        | Latest  | Gestionnaire de paquets performant |

### Styling & UI

| Technologie              | Version | Utilisation                             |
| ------------------------ | ------- | --------------------------------------- |
| TailwindCSS              | 4.1.14  | Framework CSS utility-first             |
| Framer Motion            | 12.4.7  | Animations et transitions               |
| Class Variance Authority | 0.7.0   | Gestion des variants de composants      |
| Lucide React             | 0.545.0 | Icônes modernes                         |
| Fontsource               | Latest  | Polices optimisées (Urbanist, DM Serif) |

### Data Management

| Technologie    | Version | Utilisation                          |
| -------------- | ------- | ------------------------------------ |
| Tanstack Query | 5.61.4  | Gestion des données serveur et cache |
| Zustand        | 5.0.3   | État global côté client              |
| Axios          | 1.7.7   | Client HTTP                          |

### Forms & Validation

| Technologie         | Version | Utilisation             |
| ------------------- | ------- | ----------------------- |
| React Hook Form     | 7.53.0  | Gestion des formulaires |
| Zod                 | 3.23.8  | Validation de schémas   |
| @hookform/resolvers | 3.9.0   | Intégration RHF + Zod   |

### Development Tools

| Technologie | Version | Utilisation                        |
| ----------- | ------- | ---------------------------------- |
| Biome       | 1.9.4   | Linter et formatter rapide         |
| ESLint      | 8.57.0  | Linter JavaScript/TypeScript       |
| Prettier    | Latest  | Formatage de code                  |
| Husky       | 9.1.7   | Git hooks (commit-msg)             |
| Lint-staged | 15.2.10 | Linting pré-commit via pnpm commit |
| Commitlint  | 19.4.1  | Validation des commits             |
| Commitizen  | 4.3.0   | Helper pour commits conventionnels |

### Testing

| Technologie | Version | Utilisation                    |
| ----------- | ------- | ------------------------------ |
| Playwright  | 1.48.2  | Tests end-to-end               |
| Storybook   | 9.1.1   | Documentation et tests visuels |

### Authentication & Security

| Technologie  | Version | Utilisation                          |
| ------------ | ------- | ------------------------------------ |
| jsonwebtoken | 9.0.2   | JWT tokens                           |
| Custom Auth  | -       | MinimalAuth class (en développement) |

---

## Structure du Projet

### Vue d'ensemble

```
nextjs-architecture-blank/
├── .husky/                    # Git hooks configuration
├── .storybook/                # Storybook configuration
├── .vscode/                   # VSCode settings
├── _docs_/                    # Documentation du projet
├── e2e/                       # Tests Playwright
│   └── test/                  # Fichiers de tests E2E
├── public/                    # Assets statiques
│   └── assets/                # Images, fonts, etc.
└── src/                       # Code source principal
    ├── app/                   # Next.js App Router
    │   ├── (dashboard)/       # Route group - Dashboard
    │   ├── (landing)/         # Route group - Landing page
    │   │   └── page.tsx       # Page d'accueil
    │   ├── api/               # API Routes
    │   │   └── auth/          # Routes d'authentification
    │   ├── globals.css        # Styles globaux
    │   ├── layout.tsx         # Layout racine
    │   ├── middleware.ts      # Middleware Next.js
    │   └── robots.txt         # Configuration SEO
    ├── assets/                # Assets internes
    │   ├── fonts/             # Polices personnalisées
    │   └── images/            # Images du projet
    ├── components/            # Composants réutilisables
    │   ├── feedback/          # États UI (loading, error, empty)
    │   ├── forms/             # Composants de formulaires
    │   ├── icons/             # Icônes personnalisées
    │   ├── layout/            # Composants de mise en page
    │   ├── pages/             # Page-level components
    │   ├── sections/          # Sections réutilisables
    │   └── ui/                # Composants UI de base
    ├── config/                # Configuration
    │   ├── env.config.ts      # Variables d'environnement
    │   ├── site.config.ts     # Configuration du site
    │   └── index.ts           # Export centralisé
    ├── context/               # React Contexts
    │   ├── example.context.tsx
    │   └── index.ts
    ├── data/                  # Données statiques et mock
    │   ├── menu.data.ts       # Données de navigation
    │   └── mock/              # Données de développement
    ├── features/              # Features modulaires
    │   └── auth/              # Feature authentification
    │       ├── api/           # API calls
    │       ├── components/    # Composants spécifiques
    │       ├── schemas/       # Schémas de validation
    │       ├── stores/        # État local de la feature
    │       ├── types/         # Types TypeScript
    │       ├── utils/         # Utilitaires
    │       └── views/         # Pages/vues
    ├── hooks/                 # Custom React Hooks
    │   └── index.ts           # Hooks réutilisables
    ├── lib/                   # Bibliothèques et utils
    │   ├── api/               # Client API
    │   ├── constants/         # Constantes de l'app
    │   ├── react-query/       # Configuration React Query
    │   ├── utils/             # Fonctions utilitaires
    │   └── validations/       # Schémas de validation globaux
    ├── providers/             # React Providers
    │   └── root.provider.tsx  # Provider racine
    ├── stores/                # Zustand stores
    │   └── ui.store.ts        # Store UI global
    └── types/                 # Types TypeScript globaux
        ├── auth.d.ts          # Types d'authentification
        ├── common.d.ts        # Types communs
        ├── env.d.ts           # Types d'environnement
        └── index.ts           # Export des types
```

### Organisation par Couches

Le projet suit une architecture en couches claire :

1. **app/** - Couche de routing et pages (Next.js App Router)
2. **components/** - Composants UI réutilisables (présentation)
3. **features/** - Modules fonctionnels avec logique métier
4. **lib/** - Utilitaires, helpers, et configurations
5. **hooks/** - Logic réutilisable côté client
6. **stores/** - État global de l'application
7. **types/** - Définitions de types TypeScript

---

## Installation et Configuration

### Prérequis

-   Node.js 20.x ou supérieur
-   PNPM 8.x ou supérieur (recommandé)
-   Git

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd nextjs-architecture-blank

# Installer les dépendances
pnpm install

# Copier le fichier d'environnement
cp .env.example .env

# Configurer les variables d'environnement
# Éditer le fichier .env avec vos valeurs
```

### Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
# API Configuration
NEXT_PUBLIC_API_URL="https://your-api.com"

# Session Configuration
SESSION_SECRET="your-super-secret-key-min-32-characters"

# Node Environment
NODE_ENV="development"
```

#### Variables Requises

| Variable              | Description                  | Exemple                             |
| --------------------- | ---------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_API_URL` | URL de l'API backend         | `https://api.example.com`           |
| `SESSION_SECRET`      | Secret pour les sessions JWT | String de 32+ caractères            |
| `NODE_ENV`            | Environnement d'exécution    | `development`, `production`, `test` |

### Validation des Variables

Le projet utilise Zod pour valider les variables d'environnement au démarrage. Si une variable est manquante ou invalide, le serveur ne démarrera pas et affichera une erreur détaillée dans le terminal.

Configuration dans `src/config/env.config.ts` :

```typescript
import chalk from 'chalk';
import * as z from 'zod';

export const $env = {
    server: {
        NODE_ENV: process.env.NODE_ENV,
        SESSION_SECRET: process.env.SESSION_SECRET
    },
    client: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
    }
};

const EnvSchema = z.object({
    server: z.object({
        NODE_ENV: z.enum(['development', 'test', 'production']),
        SESSION_SECRET: z.string().min(32)
    }),
    client: z.object({
        NEXT_PUBLIC_API_URL: z.string().url()
    })
});
```

---

## Scripts et Commandes

### Développement

```bash
# Démarrer le serveur de développement (avec Turbopack)
pnpm dev
# → Ouvre http://localhost:3000

# Build de production
pnpm build

# Démarrer le serveur de production
pnpm start
```

### Qualité de Code

```bash
# Linter le code
pnpm lint

# Formater le code avec Prettier
pnpm format
```

### Commits

```bash
# Créer un commit avec Commitizen (recommandé)
pnpm commit
# → Cette commande fait automatiquement :
#    1. Lance lint-staged (ESLint + Prettier sur les fichiers modifiés)
#    2. Ajoute les fichiers au staging (git add -A)
#    3. Lance l'assistant interactif Commitizen
```

**Note:** Le pre-commit hook a été retiré. Le linting est maintenant géré par la commande `pnpm commit` elle-même, donnant plus de contrôle au développeur.

**Types de commits disponibles:**

-   `feat`: Nouvelle fonctionnalité
-   `fix`: Correction de bug
-   `docs`: Documentation
-   `style`: Formatage (pas de changement de code)
-   `refactor`: Refactoring sans changement de fonctionnalité
-   `perf`: Amélioration de performance
-   `test`: Ajout/modification de tests
-   `build`: Build system ou dépendances
-   `ci`: Configuration CI/CD
-   `chore`: Tâches diverses

### Tests

```bash
# Tests E2E avec Playwright
pnpm test:e2e

# Tests E2E en mode UI
pnpm test:e2e:ui

# Tests E2E en mode debug
pnpm test:e2e:debug
```

### Storybook

```bash
# Lancer Storybook en mode développement
pnpm storybook
# → Ouvre http://localhost:6006

# Build Storybook pour production
pnpm build-storybook
```

---

## Architecture des Composants

### Système de Design Atomique

Le projet utilise la méthodologie Atomic Design pour organiser les composants :

#### 1. Atoms (Atomes) - `src/components/ui/`

Composants de base réutilisables, indivisibles.

**Exemples:**

-   `Button` - Bouton avec variants
-   `Input` - Champ de saisie
-   `Logo` - Logo du site
-   `Spinner` - Icône de chargement

```tsx
// src/components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
    'inline-flex items-center justify-center cursor-pointer w-full font-medium transition-colors',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-white hover:bg-destructive/90',
                outline: 'border border-black bg-transparent hover:bg-muted/50'
            },
            size: {
                default: 'px-[4rem] py-[1.9rem]',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8'
            }
        }
    }
);
```

#### 2. Molecules (Molécules) - `src/components/feedback/`, `src/components/forms/`

Combinaisons d'atomes formant des composants fonctionnels.

**Exemples:**

-   `Callout` - Message informatif avec icône
-   `InputError` - Input avec affichage d'erreur
-   `LoadingState` - État de chargement
-   `EmptyState` - État vide

#### 3. Organisms (Organismes) - `src/components/layout/`, `src/components/sections/`

Sections complexes composées de plusieurs molécules.

**Exemples:**

-   `Header` - En-tête avec navigation
-   `Footer` - Pied de page
-   `Hero` - Section hero animée
-   `Sidebar` - Barre latérale de navigation

#### 4. Templates - `src/components/layout/`

Layouts de page réutilisables.

**Exemples:**

-   `Container` - Conteneur responsive
-   `Flex` - Layout flexbox configurable
-   `ShouldShow` - Rendu conditionnel

#### 5. Pages - `src/app/` et `src/components/pages/`

Pages complètes ou composants de page complexes.

### Helpers de Layout

#### Container

Composant pour centrer et limiter la largeur du contenu :

```tsx
<Container maxWidth="140rem" padding="xl">
    {children}
</Container>
```

#### Flex

Helper pour créer des layouts flexbox :

```tsx
<Flex
    settings={{
        align: 'center',
        justify: 'between',
        spacing: 'gap-5',
        isColumn: false
    }}
>
    {children}
</Flex>
```

#### ShouldShow

Composant pour le rendu conditionnel :

```tsx
<ShouldShow
    when={isLoggedIn}
    show={<UserProfile />}
    elseShow={<LoginButton />}
/>
```

### Composants Animés

Le projet utilise Framer Motion pour les animations :

**MagneticButton:**

```tsx
<MagneticButton strength={1} stiffness={200}>
    <button>Bouton Magnétique</button>
</MagneticButton>
```

---

## Système d'Authentification

### Architecture

Le projet implémente un système d'authentification personnalisé et flexible, en cours de développement, qui évite les dépendances lourdes comme `next-auth` ou `better-auth`.

#### Objectif

Créer une solution d'authentification :

-   ✅ Légère et performante
-   ✅ Compatible avec des APIs tierces
-   ✅ Extensible (OAuth, 2FA, refresh tokens)
-   ✅ Type-safe avec TypeScript

### Structure Actuelle

```
src/
├── app/api/auth/
│   └── [...authRoute]/
│       └── route.ts           # Catch-all route handler
├── features/auth/
│   ├── api/
│   │   ├── endpoint.ts        # Endpoints d'authentification
│   │   ├── example.api.ts     # Exemple d'API call
│   │   └── sign-up.api.ts     # API sign-up
│   ├── components/
│   │   └── index.tsx          # Export des composants auth
│   ├── schemas/
│   │   └── auth-schemas.ts    # Schémas Zod de validation
│   └── views/
│       └── auth-page.tsx      # Page d'authentification
└── lib/auth/
    └── auth-handler.ts        # MinimalAuth class (en développement)
```

### MinimalAuth Class (En Cours)

```typescript
// src/app/api/auth/[...authRoute]/route.ts
import { MinimalAuth } from '@/lib/auth/auth-handler';

const auth = new MinimalAuth({
    authEndpoint: '/authentication/sign-in',
    refreshTokenEndpoint: '/authentication/refresh-token',
    redirect: {
        signIn: '/dashboard',
        signOut: '/login'
    }
});

export async function POST(req: NextRequest, { params }) {
    return auth.handler(req, { params });
}
```

### Schémas de Validation

```typescript
// src/features/auth/schemas/auth-schemas.ts
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional().default(false)
});

export const resetPasswordSchema = z
    .object({
        password: z.string().min(6),
        confirmPassword: z.string().min(6)
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });
```

### Types d'Authentification

```typescript
// src/types/auth.d.ts
type User = {
    sub: string;
    email: string;
    role: string;
    name?: string;
    avatar?: string;
    iat: number;
    exp: number;
};

type TokenPayload = {
    accessToken: string;
    refreshToken: string;
};

type SessionData = {
    user: User;
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
};
```

### Middleware de Protection

```typescript
// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { APP_ROUTES } from './lib/constants/routes.constants';

const protectedRoutes = [APP_ROUTES.dashboard.root];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const tokenPayload = ''; // TODO: Get from session

    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (!tokenPayload && isProtectedRoute) {
        return NextResponse.redirect(new URL(APP_ROUTES.login, request.url));
    }

    return NextResponse.next();
}
```

### Roadmap Authentification

**Fonctionnalités en cours de développement:**

-   [x] Configuration de base MinimalAuth
-   [x] Schémas de validation Zod
-   [x] Route handlers API
-   [ ] Bearer token dans les fetch requests
-   [ ] getSession() côté client
-   [ ] getToken() côté client
-   [ ] Refresh token automatique
-   [ ] OAuth providers (Google, GitHub)
-   [ ] Two-Factor Authentication (2FA)
-   [ ] Session management avec cookies

---

## Gestion d'État

### Architecture Multi-Store

Le projet utilise une approche hybride pour la gestion d'état :

1. **Zustand** - État client global
2. **TanStack Query** - État serveur et cache
3. **React Context** - État local partagé (si nécessaire)

### Zustand - État Global

#### UI Store

```typescript
// src/stores/ui.store.ts
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface UIState {
    // Theme
    theme: Theme;
    setTheme: (theme: Theme) => void;

    // Sidebar
    isSidebarCollapsed: boolean;
    toggleSidebar: () => void;

    // Modals
    modals: Record<string, boolean>;
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;

    // Notifications
    notifications: Array<Notification>;
    addNotification: (notification: Omit<Notification, 'id'>) => void;
}

export const useUIStore = create<UIState>()(
    devtools(
        persist(
            (set) => ({
                theme: 'main-theme',
                isSidebarCollapsed: false,
                modals: {},
                notifications: []
                // ... actions
            }),
            {
                name: 'ui-storage',
                partialize: (state) => ({
                    theme: state.theme,
                    isSidebarCollapsed: state.isSidebarCollapsed
                })
            }
        )
    )
);
```

#### Selectors Optimisés

```typescript
// Hooks de sélection pour éviter les re-renders
export const useTheme = () => useUIStore((state) => state.theme);
export const useSidebar = () =>
    useUIStore((state) => ({
        isCollapsed: state.isSidebarCollapsed,
        toggle: state.toggleSidebar
    }));
```

### TanStack Query - État Serveur

Configuration dans `src/lib/react-query/react-query.ts` :

```typescript
import { QueryClient } from '@tanstack/react-query';

export const queryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
            if (error?.status >= 400 && error?.status < 500) {
                return false;
            }
            return failureCount < 3;
        },
        staleTime: 1000 * 60 * 5 // 5 minutes
    },
    mutations: {
        retry: false
    }
};

export const createQueryClient = () => {
    return new QueryClient({ defaultOptions: queryConfig });
};
```

#### Exemple d'Utilisation

```typescript
// src/features/auth/api/example.api.ts
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';

interface User {
    id: number;
    name: string;
    email: string;
}

export const getUser = async () => {
    return await apiClient.get<User>('https://api.example.com/user/1');
};

export const useGetUser = () =>
    useQuery<User, Error>({
        queryKey: ['user'],
        queryFn: getUser
    });
```

### React Context

Utilisé pour l'état local partagé dans une partie de l'app :

```typescript
// src/context/example.context.tsx
import { createContext, useContext, useState } from 'react';

interface ExampleContextValue {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const ExampleContext = createContext<ExampleContextValue | undefined>(
    undefined
);

export function ExampleProvider({ children, initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    const value = {
        count,
        increment: () => setCount((prev) => prev + 1),
        decrement: () => setCount((prev) => prev - 1)
    };

    return (
        <ExampleContext.Provider value={value}>
            {children}
        </ExampleContext.Provider>
    );
}

export function useExample() {
    const context = useContext(ExampleContext);
    if (!context) {
        throw new Error('useExample must be used within ExampleProvider');
    }
    return context;
}
```

---

## API et Requêtes HTTP

### Client API

Le projet utilise un client API personnalisé basé sur Fetch API :

```typescript
// src/lib/api/client.ts
class ApiClient {
    private baseURL: string;
    private defaultHeaders: Record<string, string>;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }

    async request<T>(endpoint: string, options: RequestOptions) {
        const url = this.buildUrl(endpoint, options.params);
        const headers = await this.getHeaders(options.headers);

        const response = await fetch(url, {
            method: options.method || 'GET',
            headers,
            body: options.body ? JSON.stringify(options.body) : undefined,
            cache: options.cache,
            signal: controller.signal
        });

        return this.handleResponse<T>(response);
    }

    async get<T>(endpoint: string, options?) {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    async post<T>(endpoint: string, body?, options?) {
        return this.request<T>(endpoint, { ...options, method: 'POST', body });
    }
}

export const apiClient = new ApiClient(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
);
```

### Types de Réponse

```typescript
export type ApiResponse<T = any> = {
    data?: T;
    error?: string;
    success: boolean;
    message?: string;
};
```

### Gestion des Cookies SSR

Le client gère automatiquement les cookies côté serveur :

```typescript
private async getHeaders(customHeaders?: Record<string, string>) {
    const headers = { ...this.defaultHeaders, ...customHeaders };

    // Côté serveur : récupération des cookies
    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        const cookieString = cookieStore
            .getAll()
            .map((c) => `${c.name}=${c.value}`)
            .join('; ');

        if (cookieString) {
            headers.Cookie = cookieString;
        }
    }

    return headers;
}
```

### Pattern d'Utilisation

```typescript
// 1. Définir le type de réponse
interface Product {
    id: number;
    name: string;
    price: number;
}

// 2. Créer la fonction API
export const getProduct = async (id: number) => {
    return await apiClient.get<Product>(`/products/${id}`);
};

// 3. Créer le hook React Query
export const useGetProduct = (id: number) =>
    useQuery<Product, Error>({
        queryKey: ['product', id],
        queryFn: () => getProduct(id),
        enabled: !!id
    });

// 4. Utiliser dans un composant
function ProductDetail({ id }: { id: number }) {
    const { data, isLoading, error } = useGetProduct(id);

    if (isLoading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return <div>{data.name}</div>;
}
```

---

## Styles et Thèmes

### TailwindCSS 4

Configuration dans `postcss.config.mjs` :

```javascript
const config = {
    plugins: {
        '@tailwindcss/postcss': {}
    }
};
```

### Styles Globaux

```css
/* src/app/globals.css */
@import 'tailwindcss';

:root {
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 145, 194, 228;
    --background-end-rgb: 254, 255, 243;
}

@layer base {
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: color, background-color 200ms ease;
    }

    html {
        font-size: 62.5%; /* 1rem = 10px */
    }

    body {
        font-family: 'Urbanist Variable', sans-serif;
        font-size: 1.6rem;
    }

    h1 {
        @apply text-[4.8rem];
        font-family: 'DM Serif Display', serif;
    }
}
```

### Utilitaires Personnalisés

```css
@layer utilities {
    .flex-full-center {
        @apply flex items-center justify-center;
    }

    .hero-bg {
        background: linear-gradient(
            180deg,
            rgb(var(--background-start-rgb)) 0%,
            rgb(var(--background-end-rgb)) 100%
        );
    }

    .link {
        @apply relative transition-all w-max hover:font-bold;

        &::after {
            content: '';
            @apply absolute -bottom-2 left-0 w-full h-[.22rem] bg-black;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }
}
```

### Polices

```typescript
// src/app/layout.tsx
import '@fontsource-variable/urbanist'; // 100-900 weights
import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-text';
```

### Utility Function

```typescript
// src/lib/utils/generics.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

---

## Formulaires et Validation

### React Hook Form + Zod

Le projet utilise React Hook Form avec résolution Zod pour une validation type-safe :

#### Composant Form Wrapper

```typescript
// src/components/forms/form.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import type { Schema } from 'zod';

interface FormProps<TFormValues> {
    validationSchema?: Schema;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods, fieldArray) => React.ReactNode;
    showDevTools?: boolean;
}

export const Form = <TFormValues>({
    validationSchema,
    onSubmit,
    children,
    showDevTools = true
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>({
        mode: 'onChange',
        resolver: validationSchema ? zodResolver(validationSchema) : undefined
    });

    const fieldArray = useFieldArray({
        control: methods.control,
        name: 'items'
    });

    return (
        <>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children(methods, fieldArray)}
            </form>
            {process.env.NODE_ENV === 'development' && showDevTools && (
                <DevTool control={methods.control} />
            )}
        </>
    );
};
```

#### Exemple d'Utilisation

```typescript
import { Form } from '@/components/forms';
import { loginSchema, type LoginFormValues } from '@/features/auth/schemas';

function LoginForm() {
    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
    };

    return (
        <Form validationSchema={loginSchema} onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
                <>
                    <Input
                        {...register('email')}
                        error={errors.email?.message}
                        label="Email"
                    />
                    <Input
                        {...register('password')}
                        type="password"
                        error={errors.password?.message}
                        label="Password"
                    />
                    <Button type="submit">Se connecter</Button>
                </>
            )}
        </Form>
    );
}
```

### Composant Input

```typescript
// src/components/ui/input.tsx
import { forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, id, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    id={id}
                    ref={ref}
                    className={cn(
                        'flex h-10 w-full rounded-md border px-3 py-2',
                        error && 'border-destructive',
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
        );
    }
);
```

---

## Tests

### Playwright

Configuration dans `playwright.config.ts` :

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './e2e/test',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: 'html',
    use: {
        trace: 'on-first-retry'
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } }
    ]
});
```

### Exemple de Test

```typescript
// e2e/test/example.spec.ts
import { expect, test } from '@playwright/test';

test("Page d'accueil avec titre correct", async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveTitle(/NextJs Template/);
});

test('Navigation fonctionnelle', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.url()).toContain('/dashboard');
});
```

---

## Storybook

### Configuration

````typescript
### Storybook

Configuration dans `.storybook/main.ts` :

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-a11y',           // Tests d'accessibilité
        '@storybook/addon-vitest',         // Intégration Vitest
        '@storybook/addon-styling-webpack' // Support styling
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {}
    },
    docs: {
        autodocs: true
    }
};
````

**Version:** Storybook 9.1.1 avec Next.js integration

````

### Exemple de Story

```typescript
// src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
    title: 'UI/Button',
    component: Button,
    args: {
        children: 'Button'
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'default'
    }
};

export const Destructive: Story = {
    args: {
        variant: 'destructive'
    }
};

export const Loading: Story = {
    args: {
        isLoading: true
    }
};
````

---

## Conventions et Bonnes Pratiques

### TypeScript

1. **Import de Types**

    ```typescript
    // ✅ Bon
    import type { User } from './types';

    // ❌ Mauvais
    import { User } from './types';
    ```

2. **No Any**

    ```typescript
    // ❌ Éviter
    function process(data: any) {}

    // ✅ Préférer
    function process<T>(data: T) {}
    ```

3. **Promesses sans await**
    ```typescript
    // Si une promesse n'est pas await, utiliser void
    void fetchData();
    ```

### Conventions de Nommage

-   **Fichiers**: `kebab-case.tsx`, `user-profile.tsx`
-   **Composants**: `PascalCase`, `UserProfile`
-   **Hooks**: `camelCase`, `useUserData`
-   **Constants**: `UPPER_SNAKE_CASE`, `API_URL`
-   **Types**: `PascalCase`, `UserData`

### Lint-Staged Configuration

Le projet utilise `lint-staged` pour automatiser le linting et le formatage avant les commits :

```json
{
    "{src,e2e,.storybook}/**/*.(ts|tsx|js)": [
        "eslint --fix",
        "npx prettier . --write"
    ]
}
```

**Fonctionnement:**

-   Cible les fichiers dans `src/`, `e2e/`, et `.storybook/`
-   Applique ESLint avec auto-fix
-   Formate avec Prettier
-   S'exécute uniquement via `pnpm commit` (pas de pre-commit hook automatique)

### Structure des Fichiers

```
feature/
├── components/          # Composants de la feature
├── hooks/              # Hooks spécifiques
├── api/                # API calls
├── schemas/            # Validation schemas
├── types/              # Types TypeScript
├── utils/              # Utilitaires
├── stores/             # État local
└── index.ts            # Export public
```

### Commits Conventionnels

Format : `type(scope): message`

```bash
feat(auth): add login form validation
fix(ui): correct button hover state
docs(readme): update installation instructions
refactor(api): simplify error handling
```

### Provider Tree Pattern

Éviter le "Provider Hell" :

```typescript
// ❌ Mauvais
<Provider1>
    <Provider2>
        <Provider3>{children}</Provider3>
    </Provider2>
</Provider1>;

// ✅ Bon
const ProviderTree = buildProvidersTree([
    [Provider1, {}],
    [Provider2, {}],
    [Provider3, {}]
]);

<ProviderTree>{children}</ProviderTree>;
```

---

## Déploiement

### Build de Production

```bash
# Build l'application
pnpm build

# Le build génère un dossier .next/ et utilise standalone output
# Configuration dans next.config.ts
```

### Configuration Next.js

```typescript
// next.config.ts
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone' // Pour Docker
};
```

### Docker (Configuration par la team DevOps)

Le projet est configuré pour être déployé via Docker.

### Variables d'Environnement en Production

Assurez-vous de définir toutes les variables requises :

```env
NEXT_PUBLIC_API_URL="https://production-api.com"
SESSION_SECRET="production-secret-very-long-and-secure"
NODE_ENV="production"
```

---

## Support et Contribution

### Obtenir de l'Aide

-   📖 Consulter cette documentation
-   💬 Contacter l'équipe de développement
-   🐛 Créer une issue sur le repository

### Contribuer

1. Créer une branche depuis `improvements`
2. Faire les modifications
3. Utiliser `pnpm commit` pour créer un commit conventionnel
4. Créer une Pull Request vers `improvements`

---

**Dernière mise à jour:** 15 octobre 2025  
**Maintenu par:** Core Team  
**License:** Propriétaire
