/**
 * Format money utility - migrated from shared/utils/format-money.ts
 * Enhanced with more options and better TypeScript support
 */

export interface FormatMoneyOptions {
    currency?: string;
    locale?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

export const formatMoney = (
    amount: number,
    options: FormatMoneyOptions = {}
): string => {
    const {
        currency = 'XOF',
        locale = 'fr-FR',
        minimumFractionDigits = 0,
        maximumFractionDigits = 2
    } = options;

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits,
        maximumFractionDigits
    }).format(amount);
};

// Backward compatibility
export const formatCurrency = formatMoney;

/**
 * Format number with separators
 */
export const formatNumber = (value: number, locale = 'fr-FR'): string => {
    return new Intl.NumberFormat(locale).format(value);
};

/**
 * Format percentage
 */
export const formatPercentage = (
    value: number,
    locale = 'fr-FR',
    minimumFractionDigits = 0
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits
    }).format(value / 100);
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
};
