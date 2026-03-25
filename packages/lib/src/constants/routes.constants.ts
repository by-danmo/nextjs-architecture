/**
 * Ce fichier de constants contient toutes les routes de l'application
 * C'est un moyen de tout centraliser pour une meilleur gestion des routes
 */

export const APP_ROUTES = {
  login: "/connexion",
  marketplace: {
    label: "Marketplace",
    href: "/marketplace",
  },

  blog: {
    label: "Blog",
    href: "/blog",
    single: (slug: string) => `${APP_ROUTES.blog.href}/${slug}`,
  },
  contact: {
    label: "Contact",
    href: "/contact",
  },
  cgu: {
    label: "Conditions d'utilisations",
    href: "/terms-conditions",
  },
  vendeuse: {
    label: "Vendeuses",
    href: "/sellers",
  },
  about: {
    label: "À Propos",
    href: "/about-us",
  },
  faq: {
    label: "F.A.Q",
    href: "/faq",
  },
  profile: {
    root: "/profile",
  },
};
