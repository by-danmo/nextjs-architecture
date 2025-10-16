/**
 * Example page component
 * This demonstrates how to create page-level components
 */

import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { useExample } from '@/context';

export interface ExamplePageProps {
    title?: string;
}

const ExamplePage = ({ title = 'Example Page' }: ExamplePageProps) => {
    const { count, increment, decrement, reset } = useExample();

    return (
        <Container>
            <div className="py-8 space-y-6">
                <h1 className="text-3xl font-bold text-center">{title}</h1>

                <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Counter Example
                    </h2>

                    <div className="text-center mb-4">
                        <span className="text-2xl font-bold">{count}</span>
                    </div>

                    <div className="flex gap-2 justify-center">
                        <Button variant="outline" onClick={decrement}>
                            -
                        </Button>
                        <Button variant="outline" onClick={reset}>
                            Reset
                        </Button>
                        <Button variant="outline" onClick={increment}>
                            +
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ExamplePage;
