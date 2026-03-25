import type { NextRequest } from 'next/server';
import { APP_ROUTES } from './lib/constants/routes.constants';

const protectedRoutes = [APP_ROUTES.dashboard.root];

const protectedPathname = '';

export async function proxy(request: NextRequest) {}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static
         * - _next/image
         * - favicon.ico
         * - api
         * - public
         * - sitemap.xml
         * - robots.txt
         */
        '/((?!_next/static|_next/image|favicon.ico|api|public|sitemap.xml|robots.txt).*)'
    ]
};
