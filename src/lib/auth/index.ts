'use client';

import { useState } from 'react';

interface SignOutResult {
    success: boolean;
    error?: string;
}

interface UseSignOutReturn {
    submit: () => Promise<SignOutResult>;
    loading: boolean;
}

export function useSignOut(): UseSignOutReturn {
    const [loading, setLoading] = useState(false);

    const submit = async (): Promise<SignOutResult> => {
        setLoading(true);
        try {
            // TODO: implement sign-out API call
            return { success: true };
        } catch (error) {
            return { success: false, error: String(error) };
        } finally {
            setLoading(false);
        }
    };

    return { submit, loading };
}
