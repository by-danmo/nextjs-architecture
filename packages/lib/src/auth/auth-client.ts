import { emailOTPClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000',
    plugins: [emailOTPClient()]
});

export const {
    signIn,
    signOut,
    signUp,
    useSession,
    getSession,
    forgetPassword,
    resetPassword
} = authClient;
