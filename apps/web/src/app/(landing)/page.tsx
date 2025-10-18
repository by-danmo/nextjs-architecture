'use client';
import { Hero } from '@/components/sections';
import { trpc } from '@/lib/tprc/client';

export default function Home() {
    const { data } = trpc.helloApp.getHelloApp.useQuery({
        name: 'Everest'
    });
    console.log({ data });
    return (
        <section className="text-center">
            <Hero companyName={data} />
        </section>
    );
}
