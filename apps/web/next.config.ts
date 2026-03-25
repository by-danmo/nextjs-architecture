import path from 'node:path';
import { createEnv } from './src/config/env.config';
createEnv();
const nextConfig = {
    reactStrictMode: true,
    reactCompiler: true,
    output: 'standalone',
    transpilePackages: ['@multi-app/shared', '@multi-app/lib'],
    turbopack: {
        root: path.join(__dirname, '../')
    }
};

export default nextConfig;
