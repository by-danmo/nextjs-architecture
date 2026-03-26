/**
 * AuthSplitLayout — Reusable two-panel authentication layout
 * ==========================================================
 *
 * PATTERN: Compound Layout Component
 * -----------------------------------
 * This component follows the "Composition over Configuration" principle.
 * Instead of passing JSX as props (which gets messy), we use React's
 * `children` for the form side and a dedicated `brand` prop for the
 * decorative side.
 *
 * PATTERN: Polymorphic Width Props
 * --------------------------------
 * `leftWidth` and `rightWidth` accept Tailwind arbitrary values or classes.
 * This lets the consumer control proportions without modifying this component.
 *
 * LEARNING: Why not use CSS Grid here?
 * We use Flexbox because the split layout is 1-dimensional (horizontal).
 * Grid shines for 2D layouts (rows + columns). Use the right tool for the job.
 *
 * @example
 * ```tsx
 * <AuthSplitLayout
 *   brand={<BrandPanel />}           // Decorative left side
 *   inverted                          // Swap sides
 *   leftWidth="w-2/5"                // Custom proportions
 *   rightWidth="w-3/5"
 * >
 *   <LoginForm />                    // Form goes in children
 * </AuthSplitLayout>
 * ```
 */

'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/* --------------------------------------------------------------------------
 * PATTERN: Explicit Props Interface
 * ----------------------------------
 * Always define an interface for your component props.
 * This serves as living documentation AND enables IDE autocomplete.
 * Optional props have `?` — required props don't.
 * JSDoc comments on individual props appear in IDE tooltips.
 * -------------------------------------------------------------------------- */
export interface AuthSplitLayoutProps {
    /** Content for the main panel (typically a form) */
    children: ReactNode;
    /** Content for the branding/decorative panel */
    brand?: ReactNode;
    /** Swap the position of brand and form panels */
    inverted?: boolean;
    /** Tailwind width class for the left panel (default: "w-1/2") */
    leftWidth?: string;
    /** Tailwind width class for the right panel (default: "w-1/2") */
    rightWidth?: string;
    /** Additional padding class for the form container */
    padding?: string;
}

/**
 * PATTERN: Animation Variants Object
 * -----------------------------------
 * Defining animation states as a plain object OUTSIDE the component
 * prevents re-creation on every render (referential stability).
 * Framer Motion reads `initial`, `animate`, and `exit` from this object.
 *
 * WHY STAGGER?
 * `staggerChildren` animates child elements one after another,
 * creating a cascading "reveal" effect without manually delaying each one.
 */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const panelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
} as const;

export function AuthSplitLayout({
    children,
    brand,
    inverted = false,
    leftWidth = 'w-1/2',
    rightWidth = 'w-1/2',
    padding = 'p-8 md:p-12 lg:p-16',
}: AuthSplitLayoutProps) {
    /**
     * PATTERN: Conditional Class Composition
     * We use template literals to compose classes dynamically.
     * The `inverted` prop reverses the flex direction, which
     * swaps the visual position of brand and form panels.
     */
    const formPanel = (
        <motion.div
            variants={panelVariants}
            className={`${inverted ? leftWidth : rightWidth} flex flex-col items-center justify-center ${padding} relative`}
        >
            <div className="w-full max-w-[48rem]">{children}</div>
        </motion.div>
    );

    const brandPanel = (
        <motion.div
            variants={panelVariants}
            className={`${inverted ? rightWidth : leftWidth} relative hidden md:flex items-center justify-center overflow-hidden bg-neutral-100`}
        >
            {brand ?? <DefaultBrandContent />}
        </motion.div>
    );

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex min-h-screen ${inverted ? 'flex-row-reverse' : 'flex-row'}`}
        >
            {brandPanel}
            {formPanel}
        </motion.div>
    );
}

/**
 * PATTERN: Default Fallback Component
 * ------------------------------------
 * Instead of rendering nothing when `brand` is not provided,
 * we show a sensible default. This makes the component usable
 * out-of-the-box with zero configuration.
 */
function DefaultBrandContent() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-12 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const }}
                className="flex size-24 items-center justify-center rounded-2xl bg-accent text-secondary text-[3.2rem] font-bold shadow-lg"
            >
                ✦
            </motion.div>
            <div>
                <h2 className="text-h3 font-semibold text-neutral-800">
                    Welcome Back
                </h2>
                <p className="mt-2 text-body-sm text-neutral-500">
                    Sign in to continue to your dashboard
                </p>
            </div>
        </div>
    );
}
