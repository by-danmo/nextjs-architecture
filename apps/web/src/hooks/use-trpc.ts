import { trpc } from '@/lib/tprc/client';

type TRPCProps = keyof typeof trpc;

export const useTRPC = <T extends TRPCProps>(
    ressource: T,
    service: keyof (typeof trpc)[T]
) => {
    return trpc[ressource][service];
};
