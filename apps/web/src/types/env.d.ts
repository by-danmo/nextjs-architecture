declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        TRPC_URL: string;
        NEXT_PUBLIC_TRPC_URL: string; // for variables used in the browser
    }
}
