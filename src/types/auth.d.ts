/**
 * Authentication-related types
 */

/**
 * Available authentication routes
 */
export type AuthRoutes =
    | 'sign-in'
    | 'sign-out'
    | 'sign-up'
    | 'verify-email'
    | 'reset-password'
    | 'forgot-password'
    | 'refresh-token';

/**
 * User object from JWT token
 */
export type User = {
    sub: string;
    email: string;
    role: string;
    name?: string;
    avatar?: string;
    iat: number;
    exp: number;
    accessToken?: string;
    refreshToken?: string;
};

/**
 * Login API response
 */
export type LoginResponse = {
    data: {
        accessToken: string;
        refreshToken: string;
        user: User;
    };
    message?: string;
    success: boolean;
};

/**
 * Refresh token API response
 */
export type RefreshTokenResponse = {
    data: {
        accessToken: string;
        refreshToken: string;
    };
    message?: string;
    success: boolean;
};

/**
 * Token payload for authentication
 */
export type TokenPayload = {
    accessToken: string;
    refreshToken: string;
};

/**
 * Authentication state
 */
export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
};

/**
 * Session data
 */
export type SessionData = {
    user: User;
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
};

/**
 * Sign up request
 */
export type SignUpRequest = {
    email: string;
    password: string;
    name?: string;
};

/**
 * Sign in request
 */
export type SignInRequest = {
    email: string;
    password: string;
};

/**
 * Reset password request
 */
export type ResetPasswordRequest = {
    token: string;
    password: string;
};

/**
 * Forgot password request
 */
export type ForgotPasswordRequest = {
    email: string;
};
