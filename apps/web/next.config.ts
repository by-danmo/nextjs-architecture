import { createEnv } from './src/config/env.config';
createEnv();
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone'
};

export default nextConfig;
