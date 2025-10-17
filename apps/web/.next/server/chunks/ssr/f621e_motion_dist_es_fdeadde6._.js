module.exports = [
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueTransition",
    ()=>getValueTransition
]);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
;
;
const supportsScrollTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>window.ScrollTimeline !== undefined);
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseGroupPlaybackControls",
    ()=>BaseGroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-ssr] (ecmascript)");
;
class BaseGroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation)=>"finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            } else if (typeof fallback === "function") {
                return fallback(animation);
            }
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++){
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/Group.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupPlaybackControls",
    ()=>GroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-ssr] (ecmascript)");
;
/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */ class GroupPlaybackControls extends __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"] {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGenerator",
    ()=>isGenerator
]);
function isGenerator(type) {
    return typeof type === "function";
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachTimeline",
    ()=>attachTimeline
]);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ __turbopack_context__.s([
    "supportsFlags",
    ()=>supportsFlags
]);
const supportsFlags = {
    linearEasing: undefined
};
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoSupports",
    ()=>memoSupports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/flags.mjs [app-ssr] (ecmascript)");
;
;
;
function memoSupports(callback, supportsFlag) {
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(callback);
    return ()=>{
        var _a;
        return (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsFlags"][supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsLinearEasing",
    ()=>supportsLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs [app-ssr] (ecmascript)");
;
const supportsLinearEasing = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoSupports"])(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLinearEasing",
    ()=>generateLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)");
;
;
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++){
        points += easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progress"])(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezierAsString",
    ()=>cubicBezierAsString,
    "isWaapiSupportedEasing",
    ()=>isWaapiSupportedEasing,
    "mapEasingToNativeEasing",
    ()=>mapEasingToNativeEasing,
    "supportedWaapiEasing",
    ()=>supportedWaapiEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-ssr] (ecmascript)");
;
;
;
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    } else if (typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateLinearEasing"])(easing, duration);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing)) {
        return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
        return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
        return supportedWaapiEasing[easing];
    }
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ __turbopack_context__.s([
    "calcGeneratorDuration",
    ()=>calcGeneratorDuration,
    "maxGeneratorDuration",
    ()=>maxGeneratorDuration
]);
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDragActive",
    ()=>isDragActive,
    "isDragging",
    ()=>isDragging
]);
const isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDragLock",
    ()=>setDragLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
;
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis]) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis] = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"][axis] = false;
            };
        }
    } else {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x || __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragging"].y = false;
            };
        }
    }
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPrimaryPointer",
    ()=>isPrimaryPointer
]);
const isPrimaryPointer = (event)=>{
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    } else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
    }
};
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/capture-pointer.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capturePointer",
    ()=>capturePointer
]);
function capturePointer(event, action) {
    const actionName = `${action}PointerCapture`;
    if (event.target instanceof Element && actionName in event.target && event.pointerId !== undefined) {
        try {
            event.target[actionName](event.pointerId);
        } catch (e) {}
    }
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveElements",
    ()=>resolveElements
]);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof EventTarget) {
        return [
            elementOrSelector
        ];
    } else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            // TODO: Refactor to utils package
            // invariant(
            //     Boolean(scope.current),
            //     "Scope provided, but no element detected."
            // )
            root = scope.current;
        }
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGesture",
    ()=>setupGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
;
function setupGesture(elementOrSelector, options) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal
    };
    const cancel = ()=>gestureAbortController.abort();
    return [
        elements,
        eventOptions,
        cancel
    ];
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/hover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hover",
    ()=>hover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)");
;
;
function isValidHover(event) {
    return !(event.pointerType === "touch" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragActive"])());
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const onPointerEnter = (enterEvent)=>{
        if (!isValidHover(enterEvent)) return;
        const { target } = enterEvent;
        const onHoverEnd = onHoverStart(target, enterEvent);
        if (typeof onHoverEnd !== "function" || !target) return;
        const onPointerLeave = (leaveEvent)=>{
            if (!isValidHover(leaveEvent)) return;
            onHoverEnd(leaveEvent);
            target.removeEventListener("pointerleave", onPointerLeave);
        };
        target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    elements.forEach((element)=>{
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ __turbopack_context__.s([
    "isNodeOrChild",
    ()=>isNodeOrChild
]);
const isNodeOrChild = (parent, child)=>{
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementKeyboardAccessible",
    ()=>isElementKeyboardAccessible
]);
const focusableElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPressing",
    ()=>isPressing
]);
const isPressing = new WeakSet();
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enableKeyboardPress",
    ()=>enableKeyboardPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)");
;
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
const enableKeyboardPress = (focusEvent, eventOptions)=>{
    const element = focusEvent.currentTarget;
    if (!element) return;
    const handleKeydown = filterEvents(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(()=>{
            firePointerEvent(element, "up");
        });
        const handleBlur = ()=>firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", ()=>element.removeEventListener("keydown", handleKeydown), eventOptions);
};
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "press",
    ()=>press
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$capture$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/capture-pointer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/setup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/state.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrimaryPointer"])(event) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDragActive"])();
}
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(targetOrSelector, onPressStart, options = {}) {
    const [targets, eventOptions, cancelEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupGesture"])(targetOrSelector, options);
    const startPress = (startEvent)=>{
        const target = startEvent.currentTarget;
        if (!target || !isValidPressEvent(startEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(target)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].add(target);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$capture$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capturePointer"])(startEvent, "set");
        const onPressEnd = onPressStart(target, startEvent);
        const onPointerEnd = (endEvent, success)=>{
            target.removeEventListener("pointerup", onPointerUp);
            target.removeEventListener("pointercancel", onPointerCancel);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$capture$2d$pointer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capturePointer"])(endEvent, "release");
            if (!isValidPressEvent(endEvent) || !__TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].has(target)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPressing"].delete(target);
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, {
                    success
                });
            }
        };
        const onPointerUp = (upEvent)=>{
            const isOutside = !upEvent.isTrusted ? false : checkOutside(upEvent, target instanceof Element ? target.getBoundingClientRect() : {
                left: 0,
                top: 0,
                right: window.innerWidth,
                bottom: window.innerHeight
            });
            if (isOutside) {
                onPointerEnd(upEvent, false);
            } else {
                onPointerEnd(upEvent, !(target instanceof Element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNodeOrChild"])(target, upEvent.target));
            }
        };
        const onPointerCancel = (cancelEvent)=>{
            onPointerEnd(cancelEvent, false);
        };
        target.addEventListener("pointerup", onPointerUp, eventOptions);
        target.addEventListener("pointercancel", onPointerCancel, eventOptions);
        target.addEventListener("lostpointercapture", onPointerCancel, eventOptions);
    };
    targets.forEach((target)=>{
        target = options.useGlobalTarget ? window : target;
        let canAddKeyboardAccessibility = false;
        if (target instanceof HTMLElement) {
            canAddKeyboardAccessibility = true;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"])(target) && target.getAttribute("tabindex") === null) {
                target.tabIndex = 0;
            }
        }
        target.addEventListener("pointerdown", startPress, eventOptions);
        if (canAddKeyboardAccessibility) {
            target.addEventListener("focus", (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableKeyboardPress"])(event, eventOptions), eventOptions);
        }
    });
    return cancelEvents;
}
function checkOutside(event, rect) {
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dev/SideQuest/nextjs-architecture-blank/node_modules/.pnpm/motion@12.4.7_@emotion+is-prop-valid@1.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
let warning = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
let invariant = __TURBOPACK__imported__module__$5b$project$5d2f$Dev$2f$SideQuest$2f$nextjs$2d$architecture$2d$blank$2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$4$2e$7_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message)=>{
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message)=>{
        if (!check) {
            throw new Error(message);
        }
    };
}
;
}),
];

//# sourceMappingURL=f621e_motion_dist_es_fdeadde6._.js.map