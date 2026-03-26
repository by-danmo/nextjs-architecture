/**
 * AuthCenteredLayout — Centered authentication layout with glassmorphism
 * ======================================================================
 *
 * PATTERN: Render Props via Children
 * -----------------------------------
 * The form content is passed as `children`, keeping this layout
 * focused on structure and visual effects only.
 *
 * PATTERN: Configurable Visual Effects
 * -------------------------------------
 * The `effects` prop lets consumers toggle glassmorphism, shadows,
 * and blur independently. This uses a TypeScript interface to
 * document each option — far better than a generic `className` string.
 *
 * LEARNING: Glassmorphism
 * Glassmorphism combines 3 CSS properties:
 * 1. `backdrop-filter: blur()` — blurs what's behind the element
 * 2. Semi-transparent background — lets the blur show through
 * 3. Subtle border — defines the glass edge
 *
 * @example
 * ```tsx
 * <AuthCenteredLayout
 *   background="bg-gradient-to-br from-indigo-500 to-purple-600"
 *   effects={{ glass: true, shadow: true }}
 * >
 *   <LoginForm />
 * </AuthCenteredLayout>
 * ```
 */

'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/* --------------------------------------------------------------------------
 * PATTERN: Nested Configuration Object
 * --------------------------------------
 * Instead of many boolean props (glass?, shadow?, blur?),
 * we group related options into a single `effects` object.
 * This keeps the component API clean while preserving granularity.
 *
 * Compare:
 *   BAD:  <Layout glass shadow blur />
 *   GOOD: <Layout effects={{ glass: true, shadow: true }} />
 *
 * The second approach scales better and is self-documenting.
 * -------------------------------------------------------------------------- */
export interface AuthCenteredEffects {
    /** Apply frosted-glass backdrop blur effect */
    glass?: boolean;
    /** Apply elevation shadow to the card */
    shadow?: boolean;
    /** Custom blur radius for the background (default: 12px) */
    blurRadius?: string;
}

export interface AuthCenteredLayoutProps {
    /** Form content */
    children: ReactNode;
    /** Background class applied to the full-page container */
    background?: string;
    /** Visual effects applied to the card container */
    effects?: AuthCenteredEffects;
    /** Maximum width of the card (default: "max-w-[50rem]") */
    maxWidth?: string;
    /** Additional class names for the card */
    cardClassName?: string;
}

/**
 * PATTERN: CSS Class Builder Function
 * ------------------------------------
 * Extracts complex class logic into a pure function.
 * This keeps the JSX clean and makes the logic testable.
 *
 * LEARNING: Array.filter(Boolean).join(' ')
 * This is a classic pattern to conditionally build class strings:
 * - Add strings or `false` to the array
 * - `filter(Boolean)` removes all falsy values
 * - `join(' ')` combines the remaining strings
 */
function buildCardClasses(effects: AuthCenteredEffects, cardClassName?: string): string {
    const classes = [
        'w-full rounded-2xl p-8 md:p-12',
        effects.glass && 'backdrop-blur-[12px] bg-white/80 border border-white/20',
        !effects.glass && 'bg-surface',
        effects.shadow && 'shadow-xl',
        cardClassName,
    ];

    return classes.filter(Boolean).join(' ');
}

/**
 * LEARNING: `as const` for Motion Variants
 * Framer Motion expects `ease` as a tuple [n, n, n, n], not number[].
 * Without `as const`, TypeScript infers `number[]` which is too wide.
 * `as const` makes TS infer the exact literal tuple type.
 */
const cardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 30,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1] as const,
        },
    },
} as const;

export function AuthCenteredLayout({
    children,
    background = 'bg-neutral-50',
    effects = { glass: false, shadow: true },
    maxWidth = 'max-w-[50rem]',
    cardClassName,
}: AuthCenteredLayoutProps) {
    return (
        <div
            className={`flex min-h-screen items-center justify-center p-4 md:p-8 ${background}`}
        >
            {/**
             * PATTERN: Background Decorative Elements
             * Using CSS pseudo-elements or absolute-positioned divs
             * for decorative blobs/gradients. `pointer-events-none`
             * ensures they don't interfere with user interactions.
             */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 -top-20 size-[40rem] rounded-full bg-accent/10 blur-[100px]" />
                <div className="absolute -bottom-20 -right-20 size-[40rem] rounded-full bg-info/10 blur-[100px]" />
            </div>

            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className={`${maxWidth} relative ${buildCardClasses(effects, cardClassName)}`}
            >
                {children}
            </motion.div>
        </div>
    );
}
