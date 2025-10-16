# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### En cours de développement

#### Système d'Authentification (Branche: improvements)

- Développement de `MinimalAuth` class pour un système d'auth personnalisé
- Configuration des routes API catch-all pour l'authentification
- Schémas de validation Zod pour login, reset password, OTP
- Types TypeScript complets pour User, Session, TokenPayload

#### À venir

- [ ] Implémentation complète du Bearer token dans les requêtes
- [ ] Fonction `getSession()` côté client
- [ ] Fonction `getToken()` côté client
- [ ] Gestion automatique du refresh token
- [ ] OAuth providers (Google, GitHub, etc.)
- [ ] Authentification à deux facteurs (2FA)

---

## [1.0.0] - 2025-10-15

### 🎉 Version Initiale

#### Ajouté

**Framework & Core**

- ✨ Configuration Next.js 15.5.5 avec App Router
- ✨ React 19.2.0 avec Server Components
- ✨ TypeScript 5.5.4 avec configuration stricte
- ✨ PNPM comme gestionnaire de paquets
- ✨ Turbopack pour le développement rapide

**Styling & UI**

- 🎨 TailwindCSS 4.1.14 intégré
- 🎨 Framer Motion 12.4.7 pour les animations
- 🎨 Class Variance Authority pour les variants de composants
- 🎨 Lucide React pour les icônes
- 🎨 Fonts: Urbanist Variable, DM Serif Display & Text
- 🎨 Système de thème dynamique (en préparation)

**Composants UI**

- 📦 Button avec variants (default, destructive, outline, secondary, link)
- 📦 Input avec gestion d'erreurs et labels
- 📦 Logo configurable (text/image)
- 📦 MagneticButton avec effet magnétique interactif
- 📦 Hero section animée avec nuages défilants
- 📦 Spinner et icônes de feedback
- 📦 Callout pour messages informatifs
- 📦 Header avec navigation
- 📦 Footer responsive
- 📦 Container, Flex, et ShouldShow helpers

**Data Management**

- 📊 TanStack Query 5.61.4 (React Query) configuré
- 📊 Zustand 5.0.3 pour l'état global
- 📊 Client API personnalisé avec gestion SSR
- 📊 UI Store avec theme, sidebar, modals, notifications

**Formulaires & Validation**

- 📝 React Hook Form 7.53.0
- 📝 Zod 3.23.8 pour la validation
- 📝 Composant Form wrapper avec DevTools
- 📝 Schémas de validation pour authentification
- 📝 Integration Hookform Resolvers

**Configuration**

- ⚙️ Variables d'environnement avec validation Zod
- ⚙️ Configuration du site (metadata, logo)
- ⚙️ Constants pour routes et API
- ⚙️ Support SSR/CSR

**Outils de Développement**

- 🔧 ESLint 8.57.0 avec règles strictes
- 🔧 Prettier pour le formatage
- 🔧 Biome 1.9.4 comme linter alternatif
- 🔧 Husky 9.1.7 pour les git hooks
- 🔧 Commitlint 19.4.1 pour les commits conventionnels
- 🔧 Commitizen 4.3.0 pour l'aide aux commits
- 🔧 Lint-staged 15.2.10 intégré dans `pnpm commit`
- 🔧 Configuration lint-staged: `{src,e2e,.storybook}/**/*.(ts|tsx|js)`
- 🔧 Pre-commit hook retiré (linting manuel via pnpm commit)

**Tests**

- 🧪 Playwright 1.48.2 configuré
- 🧪 Tests E2E de base (homepage, navigation)
- 🧪 Configuration multi-browsers (Chrome, Firefox, Safari)

**Storybook**

- 📚 Storybook 9.1.1 configuré
- 📚 Addon essentials
- 📚 Addon A11y pour l'accessibilité
- 📚 Addon Vitest pour tests unitaires
- 📚 Addon Styling Webpack
- 📚 Support Next.js intégré
- 📚 Auto-documentation activée

**Hooks Personnalisés**

- 🪝 useIsClient - Détection hydratation client
- 🪝 useLocalStorage - Storage avec SSR
- 🪝 useToggle - Boolean state management
- 🪝 useDebounce - Debouncing de valeurs
- 🪝 useCopyToClipboard - Copie dans le presse-papier
- 🪝 useMediaQuery - Détection de media queries
- 🪝 useAsync - Gestion d'opérations asynchrones

**Utilitaires**

- 🛠️ cn() - Fusion de classes Tailwind
- 🛠️ formatMoney - Formatage de devises
- 🛠️ formatNumber - Formatage de nombres
- 🛠️ formatPercentage - Formatage de pourcentages
- 🛠️ formatFileSize - Formatage de tailles de fichiers
- 🛠️ buildProvidersTree - Éviter le Provider Hell
- 🛠️ Toast utilities avec Sonner

**Architecture**

- 🏗️ Structure modulaire par features
- 🏗️ Design atomique pour les composants
- 🏗️ Séparation claire app/components/lib/features
- 🏗️ Types TypeScript globaux centralisés
- 🏗️ Context API pour état local partagé

**Documentation**

- 📖 README avec instructions de démarrage
- 📖 Documentation complète dans _docs_/
- 📖 COMPLETE_ARCHITECTURE.md avec plan de migration
- 📖 .env.example pour les variables
- 📖 Commentaires dans le code
- 📖 Configuration robots.txt pour SEO

**Authentification (Fondations)**

- 🔐 Structure de base pour MinimalAuth
- 🔐 Routes API avec catch-all pattern
- 🔐 Schémas de validation (login, reset password, OTP)
- 🔐 Types pour User, Session, TokenPayload
- 🔐 Middleware de protection des routes
- 🔐 Endpoint configuration

#### Configuration

**Next.js**

```json
{
    "reactStrictMode": true,
    "output": "standalone"
}
```

**TypeScript**

```json
{
    "strict": true,
    "target": "ES2017",
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] }
}
```

**ESLint**

- Configuration standard + Next.js
- TypeScript strict rules
- React hooks rules
- Tailwind CSS plugin
- Prettier integration

**Environnement Requis**

- Node.js >= 20.x
- PNPM >= 8.x
- Variables: NEXT_PUBLIC_API_URL, SESSION_SECRET, NODE_ENV

#### Structure des Dossiers

```
src/
├── app/              # Next.js App Router
├── components/       # Composants réutilisables
│   ├── feedback/     # Loading, Error, Empty states
│   ├── forms/        # Form components
│   ├── icons/        # Custom icons
│   ├── layout/       # Layout components
│   ├── pages/        # Page-level components
│   ├── sections/     # Section components
│   └── ui/           # Base UI components
├── config/           # Configuration
├── context/          # React Contexts
├── data/             # Static data & mocks
├── features/         # Feature modules
│   └── auth/         # Authentication feature
├── hooks/            # Custom hooks
├── lib/              # Libraries & utilities
│   ├── api/          # API client
│   ├── constants/    # App constants
│   ├── react-query/  # React Query config
│   ├── utils/        # Utility functions
│   └── validations/  # Global schemas
├── providers/        # React Providers
├── stores/           # Zustand stores
└── types/            # TypeScript types
```

#### Scripts Disponibles

```bash
pnpm dev              # Serveur de développement
pnpm build            # Build de production
pnpm start            # Serveur de production
pnpm lint             # Linter
pnpm commit           # Commit avec Commitizen
pnpm storybook        # Lancer Storybook
pnpm test:e2e         # Tests Playwright
```

---

## Types de Changements

- `Ajouté` pour les nouvelles fonctionnalités.
- `Modifié` pour les changements dans les fonctionnalités existantes.
- `Obsolète` pour les fonctionnalités bientôt supprimées.
- `Supprimé` pour les fonctionnalités maintenant supprimées.
- `Corrigé` pour les corrections de bugs.
- `Sécurité` pour les vulnérabilités corrigées.

---

## Roadmap

### Version 1.1.0 (Q4 2025)

**Authentification Complète**

- [ ] MinimalAuth class finalisée
- [ ] Bearer token automatique
- [ ] Refresh token flow
- [ ] Session management complet

**Composants UI**

- [ ] Modal/Dialog component
- [ ] Dropdown component
- [ ] Table component
- [ ] Tabs component
- [ ] Toast component avancé

**Features**

- [ ] Dashboard template
- [ ] User management
- [ ] Settings page

### Version 1.2.0 (Q1 2026)

**Authentification Avancée**

- [ ] OAuth providers (Google, GitHub)
- [ ] Two-Factor Authentication (2FA)
- [ ] Magic link login
- [ ] Social login

**Internationalisation**

- [ ] i18n avec next-intl
- [ ] Support multi-langues
- [ ] RTL support

**Performance**

- [ ] Image optimization
- [ ] Code splitting avancé
- [ ] PWA support

### Version 2.0.0 (Q2 2026)

**Architecture**

- [ ] Micro-frontends support
- [ ] Module federation
- [ ] Monorepo structure (Turborepo)

**DevOps**

- [ ] Docker configuration optimisée
- [ ] CI/CD pipelines
- [ ] Automated testing
- [ ] Performance monitoring

---

## Contributeurs

- **Core Team** - Développement initial et maintenance

## License

Propriétaire - © 2025
