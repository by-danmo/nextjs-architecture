/**
 * Common types used across the application
 */

/**
 * HTML elements that can be used as polymorphic components
 */
export type As =
    | 'div'
    | 'section'
    | 'main'
    | 'footer'
    | 'header'
    | 'menu'
    | 'nav'
    | 'span'
    | 'aside'
    | 'article'
    | 'ul'
    | 'ol'
    | 'li';

/**
 * Basic response wrapper for API calls
 */
export type ApiResponse<T = unknown> = {
    data: T;
    message?: string;
    success: boolean;
    error?: string;
};

export type PaginationMeta = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};

export type PaginatedResponse<T = unknown> = {
    data: T[];
    meta: PaginationMeta;
    message?: string;
    success: boolean;
};
