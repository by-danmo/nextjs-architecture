export type ApiResponse<T = any> = {
    data?: T;
    error?: string;
    success: boolean;
    message?: string;
};

export type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: unknown;
    params?: Record<string, string | number | boolean | undefined | null>;
    cache?: RequestCache;
    timeout?: number;
};

class ApiClient {
    private baseURL: string;
    private defaultHeaders: Record<string, string>;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }

    private buildUrl(
        endpoint: string,
        params?: RequestOptions['params']
    ): string {
        const url = new URL(endpoint, this.baseURL);

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value));
                }
            });
        }

        return url.toString();
    }

    private async getHeaders(
        customHeaders?: Record<string, string>
    ): Promise<Record<string, string>> {
        const headers = { ...this.defaultHeaders, ...customHeaders };

        // Get cookies for server-side requests (Next.js only)
        if (typeof window === 'undefined') {
            try {
                // @ts-ignore — next/headers is resolved by the consuming Next.js app
                const { cookies } = await import('next/headers');
                const cookieStore = await cookies();
                const cookieString = (cookieStore.getAll() as Array<{ name: string; value: string }>)
                    .map((c) => `${c.name}=${c.value}`)
                    .join('; ');

                if (cookieString) {
                    headers.Cookie = cookieString;
                }
            } catch {
                // Not in a Next.js server context or cookies unavailable — continue without
            }
        }

        return headers;
    }

    private async handleResponse<T>(
        response: Response
    ): Promise<ApiResponse<T>> {
        try {
            const data = await response.json();

            if (!response.ok) {
                let errorMessage =
                    data.message ||
                    'Une erreur est survenue lors de la requête.';

                if (!data.message) {
                    switch (response.status) {
                        case 400:
                            errorMessage = 'Requête invalide.';
                            break;
                        case 401:
                            errorMessage =
                                'Session expirée ou non autorisée. Veuillez vous reconnecter.';
                            break;
                        case 403:
                            errorMessage =
                                "Vous n'avez pas les droits nécessaires pour effectuer cette action.";
                            break;
                        case 404:
                            errorMessage = 'Ressource introuvable.';
                            break;
                        case 500:
                            errorMessage =
                                'Erreur interne du serveur. Veuillez réessayer plus tard.';
                            break;
                        default:
                            errorMessage = `Erreur HTTP ${response.status}`;
                    }
                }

                return {
                    success: false,
                    error: errorMessage,
                    data: undefined
                };
            }

            return {
                success: true,
                data,
                message: data.message
            };
        } catch (error) {
            return {
                success: false,
                error:
                    error instanceof Error
                        ? 'Erreur de traitement de la réponse serveur.'
                        : 'Une erreur inattendue est survenue.',
                data: undefined
            };
        }
    }

    async request<T = any>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<ApiResponse<T>> {
        const {
            method = 'GET',
            headers: customHeaders,
            body,
            params,
            cache,
            timeout = 10000
        } = options;

        try {
            const url = this.buildUrl(endpoint, params);
            const headers = await this.getHeaders(customHeaders);

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);

            const response = await fetch(url, {
                method,
                headers,
                body: body ? JSON.stringify(body) : undefined,
                cache,
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            return this.handleResponse<T>(response);
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                return {
                    success: false,
                    error: 'Request timeout',
                    data: undefined
                };
            }

            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error',
                data: undefined
            };
        }
    }

    async get<T = any>(
        endpoint: string,
        options: Omit<RequestOptions, 'method' | 'body'> = {}
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    async post<T = any>(
        endpoint: string,
        body?: unknown,
        options: Omit<RequestOptions, 'method' | 'body'> = {}
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'POST', body });
    }

    async put<T = any>(
        endpoint: string,
        body?: unknown,
        options: Omit<RequestOptions, 'method' | 'body'> = {}
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'PUT', body });
    }

    async patch<T = any>(
        endpoint: string,
        body?: unknown,
        options: Omit<RequestOptions, 'method' | 'body'> = {}
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'PATCH', body });
    }

    async delete<T = any>(
        endpoint: string,
        options: Omit<RequestOptions, 'method' | 'body'> = {}
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }
}

export const apiClient = new ApiClient(
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
);

export { ApiClient };
