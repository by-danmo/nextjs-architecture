(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/react-query/react-query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createQueryClient",
    ()=>createQueryClient,
    "queryConfig",
    ()=>queryConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
const queryConfig = {
    queries: {
        // throwOnError: true,
        refetchOnWindowFocus: false,
        retry: 0
    },
    mutations: {
        retry: 0
    }
};
const createQueryClient = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: queryConfig
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/env.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$env",
    ()=>$env,
    "createEnv",
    ()=>createEnv,
    "formatEnvError",
    ()=>formatEnvError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$chalk$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/node_modules/chalk/source/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
;
/**
 * Format Error function
 */ const envErrors = {
    server: [],
    client: []
};
const formatEnvError = (error)=>{
    const { issues } = error;
    issues.forEach((issue)=>{
        envErrors[issue.path[0]].push("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$chalk$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].bold.blue(issue.path[1]), " : ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$chalk$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].bold.red("".concat(issue.message, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$chalk$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].bold.yellow("( excepted :  ".concat(issue.expected, " )")), " ")), " "));
    });
    throw new Error("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$chalk$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].bold.red('Error: Invalid env provided\n'), "\nThe following variables are missing or invalid ❌:\n(ℹ️ Consult the '.env.example' file to see the required variables)\n\n ").concat(Object.entries(envErrors).map((param)=>{
        let [key, value] = param;
        return value.length ? "".concat(key, " : \n").concat(value.map((item)=>"  - ".concat(item)).join('\n')) : '';
    }).join('\n')));
};
const $env = {
    server: {
        NODE_ENV: ("TURBOPACK compile-time value", "development"),
        TRPC_URL: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TRPC_URL
    },
    client: {
        NEXT_PUBLIC_TRPC_URL: ("TURBOPACK compile-time value", "/trpc")
    }
};
const EnvSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    server: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
            'development',
            'test',
            'production'
        ]),
        TRPC_URL: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(1)
    }),
    client: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
        NEXT_PUBLIC_TRPC_URL: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(1)
    })
});
const createEnv = ()=>{
    const parsedEnv = EnvSchema.safeParse($env);
    try {
        if (!parsedEnv.success) {
            formatEnvError(parsedEnv.error);
        }
    } catch (err) {
        console.error(err.message);
        __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].exit(1);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/site.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Ce fichier de configuration permet de définir les informations générales du site
 * Il contient le titre du site, la description, et d'autre informations de méta-données si vous en avez besoin : voir dans app/layout.tsx dans la partie export metadata pour voir comment ces informations sont utilisées
 */ __turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    meta: {
        title: 'NextJs Template',
        description: 'Build amazing things, Not from 0'
    },
    logo: {
        default: '/assets/images/',
        colored: '/assets/images/'
    },
    icon: null
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$config$2f$env$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/env.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$config$2f$site$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/site.config.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/tprc/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trpc",
    ()=>trpc,
    "trpcClient",
    ()=>trpcClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$config$2f$env$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/config/env.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/@trpc/react-query/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/@trpc/client/dist/index.mjs [app-client] (ecmascript)");
;
;
const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTRPCReact"])();
const trpcClient = trpc.createClient({
    links: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpBatchLink"])({
            url: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$config$2f$env$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$env"].client.NEXT_PUBLIC_TRPC_URL
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/utils/providers-tree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProvidersTree",
    ()=>buildProvidersTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const buildProvidersTree = (providers)=>{
    const InitialComponent = (param)=>{
        let { children } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    };
    return providers.reduce((AccComponents, param)=>{
        let [Provider, props = {}] = param;
        const ProviderTree = (param)=>{
            let { children } = param;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccComponents, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Provider, {
                    ...props,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/utils/providers-tree.tsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/utils/providers-tree.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        };
        return ProviderTree;
    }, InitialComponent);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/providers/trpc.provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$tprc$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/tprc/client.ts [app-client] (ecmascript)");
;
;
const TprcProvider = (param)=>{
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$tprc$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trpc"].Provider, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/providers/trpc.provider.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TprcProvider;
const __TURBOPACK__default__export__ = TprcProvider;
var _c;
__turbopack_context__.k.register(_c, "TprcProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/providers/root.provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$react$2d$query$2f$react$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/react-query/react-query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
/**
 * Ce fichier contient tout les providers qui permettent d'envelopper les composants de notre application
 * le composant ainsi obtenu peut être marqué en useClient et importer dans le app/layout qui lui reste en SSR
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$tprc$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/tprc/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$providers$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/utils/providers-tree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/sonner@2.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$providers$2f$trpc$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/providers/trpc.provider.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$react$2d$query$2f$react$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQueryClient"])();
const ProviderTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$providers$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProvidersTree"])([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$providers$2f$trpc$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        {
            client: __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$tprc$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trpcClient"],
            queryClient
        }
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"],
        {
            client: queryClient
        }
    ]
]);
_c = ProviderTree;
const Provider = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderTree, {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-center",
                richColors: true
            }, void 0, false, {
                fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/providers/root.provider.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/providers/root.provider.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Provider;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProviderTree");
__turbopack_context__.k.register(_c1, "Provider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Dev_SideQuest_nextjs-architecture-blank_apps_web_src_a010605f._.js.map