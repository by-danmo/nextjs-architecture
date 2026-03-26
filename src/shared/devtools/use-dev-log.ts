/**
 * useDevLog — Custom hook for in-app logging
 * ============================================
 *
 * PATTERN: Custom Hooks as API Facades
 * --------------------------------------
 * This hook wraps the devtools store's `addLog` method behind
 * a clean, familiar API that mirrors `console.*` methods.
 *
 * WHY NOT just use the store directly?
 * 1. Simpler API: `devLog.info("msg")` vs `store.addLog('info', 'msg')`
 * 2. Encapsulation: if we change the store shape, consumers don't break
 * 3. Composability: we can add side-effects (e.g., also log to external service)
 *
 * PATTERN: useCallback for Stable References
 * --------------------------------------------
 * We wrap each method in `useCallback` so the returned functions
 * have stable references across re-renders. This is critical when
 * passing these functions as props or using them in useEffect deps.
 *
 * LEARNING: When to use useCallback
 * - YES: when the function is passed as prop to a child component
 * - YES: when the function is in a useEffect/useMemo dependency array
 * - NO: when the function is only called in event handlers
 * - NO: when the component re-renders infrequently anyway
 *
 * Here we use it because devLog methods are likely passed around.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const devLog = useDevLog();
 *
 *   useEffect(() => {
 *     devLog.info('Component mounted');
 *     return () => devLog.info('Component unmounted');
 *   }, [devLog]);
 *
 *   const handleClick = () => {
 *     devLog.log('Button clicked', { timestamp: Date.now() });
 *   };
 * }
 * ```
 */

import { useCallback, useMemo } from 'react';
import { useDevToolsStore } from './devtools-store';

export interface DevLogger {
    log: (message: string, data?: unknown) => void;
    info: (message: string, data?: unknown) => void;
    warn: (message: string, data?: unknown) => void;
    error: (message: string, data?: unknown) => void;
}

export function useDevLog(): DevLogger {
    /**
     * PATTERN: Selector for Single Primitive
     * We only select `addLog` — not the whole store.
     * This means the component WON'T re-render when logs change,
     * only when addLog itself changes (which is never, since
     * Zustand actions are stable by default).
     */
    const addLog = useDevToolsStore((s) => s.addLog);

    const log = useCallback(
        (message: string, data?: unknown) => addLog('log', message, data),
        [addLog]
    );

    const info = useCallback(
        (message: string, data?: unknown) => addLog('info', message, data),
        [addLog]
    );

    const warn = useCallback(
        (message: string, data?: unknown) => addLog('warn', message, data),
        [addLog]
    );

    const error = useCallback(
        (message: string, data?: unknown) => addLog('error', message, data),
        [addLog]
    );

    /**
     * PATTERN: useMemo for Object Return
     * Without useMemo, we'd create a new object on every render.
     * Components using `const devLog = useDevLog()` would see a
     * "new" object each time → unnecessary child re-renders.
     *
     * useMemo ensures the returned object is referentially stable
     * as long as its dependencies (the callbacks) don't change.
     */
    return useMemo(() => ({ log, info, warn, error }), [log, info, warn, error]);
}
