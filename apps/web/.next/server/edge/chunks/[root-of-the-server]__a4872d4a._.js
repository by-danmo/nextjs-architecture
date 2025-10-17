(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__a4872d4a._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/constants/routes.constants.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Ce fichier de constants contient toutes les routes de l'application
 * C'est un moyen de tout centraliser pour une meilleur gestion des routes
 */ __turbopack_context__.s([
    "APP_ROUTES",
    ()=>APP_ROUTES
]);
const APP_ROUTES = {
    login: '/login',
    dashboard: {
        root: '/dashboard'
    }
};
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$constants$2f$routes$2e$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/constants/routes.constants.ts [middleware-edge] (ecmascript)");
;
;
const protectedRoutes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$constants$2f$routes$2e$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APP_ROUTES"].dashboard.root
];
let protectedPathname = '';
async function middleware(request) {
    // Get the pathname from the request URL
    const { pathname } = request.nextUrl;
    // get Server Token Payload
    const tokenPayload = '';
    // Verify if the route is protected
    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));
    // If the route is protected and the user is not authenticated, redirect to login
    if (!tokenPayload && isProtectedRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$constants$2f$routes$2e$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APP_ROUTES"].login, request.url));
    }
    if (isProtectedRoute) {
        // Store the protected pathname in a variable to use it when the user is authenticated and want to go on login page
        protectedPathname = pathname;
    }
    // if the route is not protected and the user is authenticated, redirect to callback url
    if (tokenPayload && pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$constants$2f$routes$2e$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["APP_ROUTES"].login)) //TURBOPACK unreachable
    ;
}
const config = {
    matcher: [
        /*
            * Match all request paths except for the ones starting with:
            * - _next/static
            * - _next/image
            * - favicon.ico
            * - api
            * - public
            * - sitemap.xml
            * - robots.txt
            
        */ '/((?!_next/static|_next/image|favicon.ico|api|public|sitemap.xml|robots.txt).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a4872d4a._.js.map