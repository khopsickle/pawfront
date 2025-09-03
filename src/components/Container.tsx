import type { ReactNode } from 'react';

type ContainerProps = { children: ReactNode };

export default function Container({ children }: ContainerProps) {
    return (
        <main className="container mx-auto my-8" role="main">
            {children}
        </main>
    );
}
