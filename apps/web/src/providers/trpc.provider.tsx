import { trpc } from '@/lib/tprc/client';
import { type PropsWithChildren } from 'react';
interface TprcProviderProps {
    client: any;
    queryClient: any;
}

const TprcProvider = ({
    children,
    ...props
}: PropsWithChildren<TprcProviderProps>) => {
    return <trpc.Provider {...props}>{children}</trpc.Provider>;
};

export default TprcProvider;
