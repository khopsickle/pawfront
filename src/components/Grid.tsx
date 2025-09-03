import type { ReactNode } from 'react';

type GridProps = {
    children: ReactNode;
};

export default function Grid({ children }: GridProps) {
    return (
        <>
            <div className="mx-auto grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {children}
            </div>
        </>
    );
}
