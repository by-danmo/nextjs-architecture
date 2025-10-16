# Workflow d'Amélioration - Système d'Authentification

**Issue:** #9  
**Branch:** improvements  
**Date de début:** Octobre 2025  
**Statut:** 🚧 En cours de développement

---

## 🎯 Objectif

Implémenter un système d'authentification personnalisé, léger et flexible pour le projet Next.js Architecture Blank, sans dépendre de bibliothèques lourdes comme `next-auth` ou `better-auth`.

## 🤔 Contexte et Décision

### Problématique

Lors de l'évaluation des solutions d'authentification disponibles, plusieurs constats ont été faits :

#### Better-Auth

✅ **Avantages:**

- Très performant
- Panoplie de fonctionnalités complètes
- Modern et bien maintenu

❌ **Inconvénients:**

- Nécessite une connexion directe à une base de données
- Pas adapté pour notre cas d'utilisation avec API tierce
- Configuration complexe pour notre architecture

#### Next-Auth

✅ **Avantages:**

- Mature et éprouvé
- Grande communauté
- Fonction `authorize` pour API tierces

❌ **Inconvénients:**

- Pas assez flexible pour nos besoins
- Configuration verbale
- Dépendance lourde

### Solution Retenue: MinimalAuth

Développer un système d'authentification personnalisé qui :

1. ✅ **Légèreté**: Minimal dependencies, code optimisé
2. ✅ **Flexibilité**: S'adapte à n'importe quelle API backend
3. ✅ **Extensibilité**: Facile d'ajouter OAuth, 2FA, etc.
4. ✅ **Type-Safety**: TypeScript strict partout
5. ✅ **Simplicité**: API claire et intuitive

---

## 📋 Plan d'Action

### Phase 1: Fondations ✅ Complété

- [x] Créer la structure de base du système d'authentification
- [x] Définir les types TypeScript (`User`, `Session`, `TokenPayload`)
- [x] Créer les schémas de validation Zod
- [x] Configurer les routes API avec catch-all pattern
- [x] Établir la structure des features auth

**Fichiers créés:**

```
src/
├── app/api/auth/[...authRoute]/route.ts
├── features/auth/
│   ├── api/
│   │   ├── endpoint.ts
│   │   ├── example.api.ts
│   │   └── sign-up.api.ts
│   ├── schemas/
│   │   └── auth-schemas.ts
│   └── views/
│       └── auth-page.tsx
├── types/
│   └── auth.d.ts
└── middleware.ts
```

### Phase 2: Core Authentication (En cours 🚧)

#### 2.1 MinimalAuth Class

- [x] Créer la classe `MinimalAuth` dans `lib/auth/auth-handler.ts`
- [x] Définir la configuration de base
    ```typescript
    {
      authEndpoint: string,
      refreshTokenEndpoint: string,
      redirect: { signIn: string, signOut: string }
    }
    ```
- [x] Implémenter le handler de base pour les routes
- [ ] **En cours:** Finaliser la logique d'authentification
- [ ] **En cours:** Implémenter la gestion des erreurs

#### 2.2 Token Management

- [ ] Créer `lib/auth/tokens.ts`
    - [ ] Fonction `verifyToken(token: string)`
    - [ ] Fonction `decodeToken(token: string)`
    - [ ] Fonction `refreshToken(refreshToken: string)`
    - [ ] Gestion de l'expiration des tokens

#### 2.3 Session Management

- [ ] Créer `lib/auth/session.ts`
    - [ ] Fonction `createSession(user: User, tokens: TokenPayload)`
    - [ ] Fonction `getSession()` côté serveur
    - [ ] Fonction `updateSession(session: Session)`
    - [ ] Fonction `deleteSession()`
    - [ ] Storage avec cookies httpOnly

### Phase 3: Client-Side Integration

#### 3.1 Client Hooks

- [ ] Créer `features/auth/hooks/use-auth.ts`

    ```typescript
    export function useAuth() {
        return {
            user,
            isAuthenticated,
            isLoading,
            signIn,
            signOut,
            signUp
        };
    }
    ```

- [ ] Créer `features/auth/hooks/use-session.ts`
    - [ ] `getSession()` côté client
    - [ ] `getToken()` côté client
    - [ ] Synchronisation avec le serveur

#### 3.2 Auth Provider

- [ ] Créer `providers/auth.provider.tsx`
- [ ] Intégrer dans `root.provider.tsx`
- [ ] Gestion du state global d'authentification

### Phase 4: API Integration

#### 4.1 Bearer Token

- [ ] Modifier `lib/api/client.ts`
- [ ] Ajouter automatiquement le Bearer token aux requêtes
- [ ] Gérer le cas sans token (routes publiques)

```typescript
private async getHeaders(customHeaders?) {
    const headers = { ...this.defaultHeaders, ...customHeaders };

    // Ajouter le Bearer token
    const token = await getToken();
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
}
```

#### 4.2 Refresh Token Flow

- [ ] Intercepter les erreurs 401
- [ ] Tenter le refresh token automatiquement
- [ ] Retry la requête originale
- [ ] Rediriger vers login si le refresh échoue

### Phase 5: UI Components

#### 5.1 Formulaires d'Authentification

- [ ] Refactoriser `features/auth/components/`
    - [ ] login-form.tsx
    - [ ] forgot-password-email.tsx
    - [ ] otp-verification.tsx
    - [ ] reset-password.tsx
    - [ ] sign-up-form.tsx

#### 5.2 Auth Guards

- [ ] Créer composant `AuthGuard`
- [ ] Créer composant `GuestGuard`
- [ ] Utilisation dans les layouts

### Phase 6: Advanced Features (Futur)

- [ ] OAuth Providers
    - [ ] Google OAuth
    - [ ] GitHub OAuth
    - [ ] Facebook OAuth
- [ ] Two-Factor Authentication (2FA)
    - [ ] SMS OTP
    - [ ] Email OTP
    - [ ] Authenticator App (TOTP)
- [ ] Magic Link Authentication
- [ ] Biometric Authentication (WebAuthn)

---

## 🗂️ Structure de Fichiers Cible

```
src/
├── app/api/auth/
│   └── [...authRoute]/
│       └── route.ts              # ✅ Route handler
├── features/auth/
│   ├── api/
│   │   ├── endpoint.ts           # ✅ API endpoints
│   │   ├── auth-api.service.ts   # 🚧 Service API
│   │   └── sign-up.api.ts        # ✅ Sign-up API
│   ├── components/
│   │   ├── login-form.tsx        # 📝 À créer
│   │   ├── forgot-password.tsx   # 📝 À créer
│   │   ├── otp-verification.tsx  # 📝 À créer
│   │   └── reset-password.tsx    # 📝 À créer
│   ├── hooks/
│   │   ├── use-auth.ts           # 📝 À créer
│   │   ├── use-login.ts          # 📝 À créer
│   │   └── use-session.ts        # 📝 À créer
│   ├── schemas/
│   │   └── auth-schemas.ts       # ✅ Schémas de validation
│   ├── stores/
│   │   └── auth.store.ts         # 📝 À créer
│   └── views/
│       └── auth-page.tsx         # ✅ Page d'auth
├── lib/auth/
│   ├── auth-handler.ts           # 🚧 MinimalAuth class
│   ├── session.ts                # 📝 À créer
│   ├── tokens.ts                 # 📝 À créer
│   └── middleware.ts             # 📝 À créer
├── providers/
│   ├── auth.provider.tsx         # 📝 À créer
│   └── root.provider.tsx         # ✅ Existe
├── types/
│   └── auth.d.ts                 # ✅ Types définis
└── middleware.ts                  # ✅ Middleware de base
```

**Légende:**

- ✅ Complété
- 🚧 En cours
- 📝 À créer

---

## 🔄 Workflow de Développement

### 1. Créer une Feature

```bash
# Créer une branche pour la feature
git checkout improvements
git pull origin improvements
git checkout -b auth/feature-name

# Développer la feature
# ...

# Commit avec Commitizen
pnpm commit
# Type: feat
# Scope: auth
# Message: add token refresh logic
```

### 2. Tests

```bash
# Tests E2E
pnpm test:e2e

# Vérifier les types
pnpm build

# Lint
pnpm lint
```

### 3. Merge

```bash
# Push et créer PR vers improvements
git push origin auth/feature-name
# Créer Pull Request sur GitHub
```

---

## 📊 Progression

### Vue d'ensemble

```
Phase 1: Fondations            ████████████ 100%
Phase 2: Core Auth             ████░░░░░░░░  30%
Phase 3: Client Integration    ░░░░░░░░░░░░   0%
Phase 4: API Integration       ░░░░░░░░░░░░   0%
Phase 5: UI Components         ░░░░░░░░░░░░   0%
Phase 6: Advanced Features     ░░░░░░░░░░░░   0%

Total Progress:                ██░░░░░░░░░░  20%
```

### Checklist Détaillée

#### Core Authentication

- [x] Types TypeScript
- [x] Schémas de validation
- [x] Routes API de base
- [x] Middleware de protection
- [ ] MinimalAuth class complète
- [ ] Token management
- [ ] Session management

#### Client-Side

- [ ] useAuth hook
- [ ] useSession hook
- [ ] Auth Provider
- [ ] getSession() client
- [ ] getToken() client

#### API Integration

- [ ] Bearer token automatique
- [ ] Refresh token flow
- [ ] Error handling 401
- [ ] Retry logic

#### UI Components

- [ ] Login form
- [ ] Sign-up form
- [ ] Forgot password
- [ ] OTP verification
- [ ] Reset password
- [ ] Auth guards

---

## 🐛 Issues et Blocages

### Issues Actuels

1. **MinimalAuth Implementation**
    - **Status:** 🚧 En cours
    - **Blocage:** Décision sur le storage des tokens (cookies vs localStorage)
    - **Solution proposée:** Cookies httpOnly côté serveur, localStorage côté client pour le refresh

2. **Type Safety**
    - **Status:** ⚠️ Attention requise
    - **Note:** S'assurer que tous les types sont correctement exportés et utilisés

### Issues Résolus

1. ✅ **Choix de la bibliothèque d'authentification**
    - Décision: Créer MinimalAuth

2. ✅ **Structure des fichiers**
    - Organisation claire établie

---

## 📝 Notes de Développement

### Décisions Techniques

1. **Tokens**
    - Access Token: JWT, courte durée (15min)
    - Refresh Token: JWT, longue durée (7 jours)
    - Storage: Cookies httpOnly pour sécurité

2. **API Calls**
    - Utilisation du client API existant
    - Bearer token ajouté automatiquement
    - Refresh automatique sur 401

3. **State Management**
    - Zustand pour l'état global auth
    - React Query pour les requêtes API
    - Context pour les features isolées

### Bonnes Pratiques

1. **Security First**
    - Cookies httpOnly pour les tokens
    - CSRF protection
    - XSS protection
    - Rate limiting sur les endpoints auth

2. **Developer Experience**
    - API claire et intuitive
    - TypeScript strict
    - Documentation inline
    - Exemples d'utilisation

3. **Testing**
    - Tests unitaires pour les fonctions utils
    - Tests d'intégration pour les flows
    - Tests E2E pour les parcours utilisateur

---

## 🔗 Références

### Documentation

- [Next.js Authentication](https://nextjs.org/docs/authentication)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [OAuth 2.0](https://oauth.net/2/)
- [WebAuthn](https://webauthn.guide/)

### Inspirations

- next-auth (patterns et architecture)
- better-auth (API design)
- Supabase Auth (simplicité)

---

## ✅ Checklist Avant Merge

- [ ] Tous les tests passent
- [ ] Documentation à jour
- [ ] Types TypeScript complets
- [ ] Pas de `any` ou `@ts-ignore`
- [ ] Code review effectué
- [ ] Changelog mis à jour
- [ ] Exemples d'utilisation ajoutés

---

**Dernière mise à jour:** 15 octobre 2025  
**Responsable:** Core Team  
**Reviewer:** À assigner
