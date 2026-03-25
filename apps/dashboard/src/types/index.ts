// Common types
export type {
    ApiResponse,
    As,
    PaginatedResponse,
    PaginationMeta
} from './common';

// Authentication types
export type {
    AuthRoutes,
    AuthState,
    ForgotPasswordRequest,
    LoginResponse,
    RefreshTokenResponse,
    ResetPasswordRequest,
    SessionData,
    SignInRequest,
    SignUpRequest,
    TokenPayload,
    User
} from './auth';

// Legacy types for backwards compatibility
export interface Session {
    user: User;
    expires: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    name: string;
    confirmPassword: string;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

// API Response types (legacy)
export interface ApiError {
    message: string;
    code?: string;
    field?: string;
}

// Form types
export interface FormFieldError {
    message: string;
    type: string;
}

export interface FormErrors {
    [key: string]: FormFieldError | undefined;
}

// UI Component types
export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}

export interface ToastOptions {
    title?: string;
    description?: string;
    variant?: 'default' | 'destructive' | 'success';
    duration?: number;
}
