import { useEffect, useState } from 'react';

/**
 * Hook to detect client-side hydration
 */
export function useIsClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

/**
 * Hook for localStorage with SSR support
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}

/**
 * Hook for managing boolean state with toggle functionality
 */
export function useToggle(
    initialValue = false
): [boolean, () => void, (value: boolean) => void] {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue((prev) => !prev);
    const setToggle = (newValue: boolean) => setValue(newValue);

    return [value, toggle, setToggle];
}

/**
 * Hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Hook for copying text to clipboard
 */
export function useCopyToClipboard(): [
    boolean,
    (text: string) => Promise<void>
] {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy text:', error);
            setIsCopied(false);
        }
    };

    return [isCopied, copyToClipboard];
}

/**
 * Hook for detecting media query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}

/**
 * Hook for handling async operations with loading and error states
 */
export function useAsync<T, E = Error>() {
    const [state, setState] = useState<{
        data: T | null;
        loading: boolean;
        error: E | null;
    }>({
        data: null,
        loading: false,
        error: null
    });

    const execute = async (asyncFunction: () => Promise<T>) => {
        setState({ data: null, loading: true, error: null });
        try {
            const data = await asyncFunction();
            setState({ data, loading: false, error: null });
            return data;
        } catch (error) {
            setState({ data: null, loading: false, error: error as E });
            throw error;
        }
    };

    return { ...state, execute };
}
