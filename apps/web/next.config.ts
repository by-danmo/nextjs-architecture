import { $env, createEnv } from './src/config/env.config';
createEnv();
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',

    rewrites: () => {
        return [
            {
                source: '/trpc/:path*',
                destination: `${$env.server.TRPC_URL}/:path*`
            }
        ];
    }
};

export default nextConfig;
