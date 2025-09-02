import type { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
    return <main className="container mx-auto my-8">{children}</main>;
}
