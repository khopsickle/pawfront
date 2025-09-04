import type { ReactNode } from 'react';
type ContainerProps = { children: ReactNode };

/**
 * Container Component
 *
 * Layout wrapper with consistent horizontal and vertical margins
 * - `<main role="main">` for semantic HTML/a11y
 *
 * @param {children} children
 * @returns {JSX.Element}
 */
export default function Container({ children }: ContainerProps) {
    return (
        <main className="container mx-auto my-8" role="main">
            {children}
        </main>
    );
}
