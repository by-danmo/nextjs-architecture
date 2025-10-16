/**
 * Common types used across the application
 */

/**
 * HTML elements that can be used as polymorphic components
 */
type As =
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
type ApiResponse<T = unknown> = {
    data: T;
    message?: string;
    success: boolean;
    error?: string;
};
