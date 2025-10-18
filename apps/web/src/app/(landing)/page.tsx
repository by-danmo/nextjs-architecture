'use client';
import { Hero } from '@/components/sections';
import { useTRPC } from '@/hooks/use-trpc';

export default function Home() {
    const { data } = useTRPC('helloMyApp', 'getHelloApp').useQuery({
        name: 'Coder'
    });

    console.log({ data });
    return (
        <section className="text-center">
            <Hero companyName={data} />
        </section>
    );
}
