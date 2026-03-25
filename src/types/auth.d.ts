/**
 * Authentication-related types
 */

/**
 * Available authentication routes
 */
type AuthRoutes =
    | 'sign-in'
    | 'sign-out'
    | 'sign-up'
    | 'verify-email'
    | 'reset-password'
    | 'forgot-password'
    | 'refresh-token';

/**
 * Login API response
 */
type LoginResponse = {
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
type RefreshTokenResponse = {
    data: {
        accessToken: string;
        refreshToken: string;
    };
    message?: string;
    success: boolean;
};

/**
 * User object from JWT token
 */
type User = {
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
 * Token payload for authentication
 */
type TokenPayload = {
    accessToken: string;
    refreshToken: string;
};

/**
 * Authentication state
 */
type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
};

/**
 * Session data
 */
type SessionData = {
    user: User;
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
};

/**
 * Sign up request
 */
type SignUpRequest = {
    email: string;
    password: string;
    name?: string;
};

/**
 * Sign in request
 */
type SignInRequest = {
    email: string;
    password: string;
};

/**
 * Reset password request
 */
type ResetPasswordRequest = {
    token: string;
    password: string;
};

/**
 * Forgot password request
 */
export type ForgotPasswordRequest = {
    email: string;
};
