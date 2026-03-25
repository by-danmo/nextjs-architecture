/**
 * Example context for demonstration purposes
 * This shows how to create and use React Context in the new architecture
 */

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ExampleContextValue {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const ExampleContext = createContext<ExampleContextValue | undefined>(
    undefined
);

export interface ExampleProviderProps {
    children: ReactNode;
    initialCount?: number;
}

export function ExampleProvider({
    children,
    initialCount = 0
}: ExampleProviderProps) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(initialCount);

    const value: ExampleContextValue = {
        count,
        increment,
        decrement,
        reset
    };

    return (
        <ExampleContext.Provider value={value}>
            {children}
        </ExampleContext.Provider>
    );
}

export function useExample() {
    const context = useContext(ExampleContext);

    if (context === undefined) {
        throw new Error('useExample must be used within an ExampleProvider');
    }

    return context;
}

// Export context for testing purposes
export { ExampleContext };
