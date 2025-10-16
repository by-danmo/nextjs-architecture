import { $env } from '@/config';

export const API_URL = $env.client.NEXT_PUBLIC_API_URL;
export const IS_CLIENT = typeof window !== 'undefined';
