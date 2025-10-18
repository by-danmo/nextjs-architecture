(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/ui/magnetic-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagneticButton",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const MagneticButton = (param)=>{
    let { children, strength = 1, stiffness = 200, damping = 13, mass = 0.2 } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouse = (e)=>{
        var _ref_current;
        const { clientX, clientY } = e;
        const rect = (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.getBoundingClientRect();
        if (!rect) return;
        const { height, width, left, top } = rect;
        const middleX = (clientX - (left + width / 2)) * strength;
        const middleY = (clientY - (top + height / 2)) * strength;
        setPosition({
            x: middleX,
            y: middleY
        });
    };
    const reset = ()=>{
        setPosition({
            x: 0,
            y: 0
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        animate: position,
        transition: {
            type: 'spring',
            stiffness,
            damping,
            mass
        },
        style: {
            position: 'relative'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/ui/magnetic-button.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MagneticButton, "5o4ehqgmojCHPSmxMWTPGKSjVtk=");
_c = MagneticButton;
;
var _c;
__turbopack_context__.k.register(_c, "MagneticButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/utils/generics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "formatCurrency",
    ()=>formatCurrency,
    "generateId",
    ()=>generateId,
    "sleep",
    ()=>sleep,
    "truncateText",
    ()=>truncateText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/tailwind-merge@2.5.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(amount) {
    let currency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'USD', locale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'en-US';
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency
    }).format(amount);
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}
function debounce(func, wait) {
    let timeout;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function generateId() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
    return Math.random().toString(36).substring(2, 2 + length);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$magnetic$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/ui/magnetic-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$generics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/utils/generics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Cloud images data
const clouds = [
    {
        positions: '-bottom-[60%]',
        src: '/assets/nuage1.png',
        duration: 15,
        size: undefined
    },
    {
        positions: '-bottom-[60%]',
        src: '/assets/nuage2.png',
        size: {
            width: 1419,
            height: 946
        },
        duration: 9
    },
    {
        positions: '-bottom-[45%]',
        src: '/assets/nuage3.png',
        size: {
            width: 1419,
            height: 946
        },
        duration: 8
    },
    {
        positions: '-bottom-[65%]',
        src: '/assets/nuage4.png',
        size: {
            width: 1419,
            height: 946
        },
        duration: 5
    }
];
// Animation configurations
const DEFAULT_Y = 100;
const notFromZeroText = [
    {
        x: -DEFAULT_Y,
        y: undefined,
        text: '<'
    },
    {
        x: undefined,
        y: DEFAULT_Y,
        text: 'Not'
    },
    {
        x: undefined,
        y: DEFAULT_Y,
        text: 'From'
    },
    {
        x: undefined,
        y: DEFAULT_Y,
        text: 'Zero'
    },
    {
        x: DEFAULT_Y,
        y: undefined,
        text: '/'
    },
    {
        x: DEFAULT_Y,
        y: undefined,
        text: '>'
    },
    {
        x: DEFAULT_Y,
        y: undefined,
        text: ';'
    }
];
const buildAmazingThingsText = [
    {
        x: undefined,
        y: -DEFAULT_Y,
        text: 'Build'
    },
    {
        x: undefined,
        y: DEFAULT_Y,
        text: 'Amazing'
    },
    {
        x: undefined,
        y: DEFAULT_Y,
        text: 'Things'
    }
];
// Framer Motion Variants
const parentVariants = {
    animate: {
        transition: {
            staggerChildren: 0.4
        }
    }
};
const textVariants = {
    initial: (param)=>{
        let { x, y } = param;
        return {
            ...x !== undefined ? {
                x,
                opacity: 0
            } : {
                y: y || 0
            },
            filter: 'blur(5px)'
        };
    },
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            type: 'spring',
            duration: 0.8,
            stiffness: 300
        }
    }
};
const cloudVariants = {
    initial: {
        x: '-100%'
    },
    animate: {
        x: '100%'
    }
};
const Hero = (param)=>{
    let { companyName = 'everest', tagline = 'We are', copyright = 'Build with 💖 by core team.', buttonText = 'DOCS', onButtonClick, showClouds = true } = param;
    _s();
    const buildAmazingThingsAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const notFromZeroAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const [shouldAnimateClouds, setShouldAnimateClouds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const runAnimations = {
                "Hero.useEffect.runAnimations": async ()=>{
                    await buildAmazingThingsAnimation.start('animate');
                    await notFromZeroAnimation.start('animate');
                    setShouldAnimateClouds(true);
                }
            }["Hero.useEffect.runAnimations"];
            void runAnimations();
        }
    }["Hero.useEffect"], [
        buildAmazingThingsAnimation,
        notFromZeroAnimation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-tweak hero-bg h-screen items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "absolute left-32 top-5 tracking-wider text-white",
                        children: "".concat(tagline, " ").concat(companyName, ".")
                    }, void 0, false, {
                        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "absolute right-32 top-5 tracking-wider text-white",
                        children: [
                            "© ",
                            copyright
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 pt-12 text-center uppercase leading-[1.2] text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "initial",
                        animate: notFromZeroAnimation,
                        variants: parentVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "overflow-hidden text-[5rem] font-extralight capitalize",
                            children: notFromZeroText.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: textVariants,
                                            custom: {
                                                x: item.x,
                                                y: item.y
                                            },
                                            className: "inline-block",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                                            lineNumber: 169,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' '
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                                    lineNumber: 168,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                            lineNumber: 166,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "initial",
                        animate: buildAmazingThingsAnimation,
                        variants: parentVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "overflow-hidden text-[9rem] font-normal capitalize",
                            children: buildAmazingThingsText.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: textVariants,
                                            custom: {
                                                y: item.y
                                            },
                                            className: "inline-block",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                                            lineNumber: 190,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' '
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                                    lineNumber: 189,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-12 h-48 w-0.5 bg-[#FCFDEC]"
                    }, void 0, false, {
                        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$magnetic$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagneticButton"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex aspect-square items-center justify-center rounded-full border border-[#FCFDEC] p-14 hover:bg-[#FCFDEC]/10 transition-colors",
                                onClick: onButtonClick,
                                type: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[1.6rem] tracking-wider text-[#FCFDEC]",
                                    children: buttonText
                                }, void 0, false, {
                                    fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                                    lineNumber: 213,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                                lineNumber: 208,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute -bottom-20 w-full",
                src: "/assets/montain.png",
                alt: "Mountain landscape",
                width: 1920,
                height: 1080,
                priority: true
            }, void 0, false, {
                fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                lineNumber: 222,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showClouds && clouds.map((cloud, index)=>{
                var _cloud_size, _cloud_size1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    initial: "initial",
                    animate: shouldAnimateClouds ? 'animate' : 'initial',
                    variants: cloudVariants,
                    transition: {
                        duration: 10 + cloud.duration,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$utils$2f$generics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute w-full', cloud.positions),
                    width: (_cloud_size = cloud.size) === null || _cloud_size === void 0 ? void 0 : _cloud_size.width,
                    height: (_cloud_size1 = cloud.size) === null || _cloud_size1 === void 0 ? void 0 : _cloud_size1.height,
                    src: cloud.src,
                    alt: "Cloud ".concat(index + 1)
                }, index, false, {
                    fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
                    lineNumber: 234,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "Ec9iVp6azPIEWqcc6Pv2WmBJ8nA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = Hero;
;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Section components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/app/(landing)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/next@15.5.5_@babel+core@7.28.4_@playwright+test@1.48.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$components$2f$sections$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/components/sections/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$tprc$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/lib/tprc/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Home() {
    _s();
    const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$lib$2f$tprc$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trpc"].helloApp.getHelloApp.useQuery({
        name: 'Everest'
    });
    console.log({
        data
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$48$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$apps$2f$web$2f$src$2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
            companyName: data
        }, void 0, false, {
            fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/app/(landing)/page.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Dev/SideQuest/nextjs-architecture-blank/apps/web/src/app/(landing)/page.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(Home, "JtionF1PqWN50DPWu724eJIU2SM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Dev_SideQuest_nextjs-architecture-blank_apps_web_src_c52ee583._.js.map