import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

function ErroredComponent() {
    throw new Error('Test error');
}

describe('ErrorBoundary', () => {
    it('renders children when no error is thrown', () => {
        render(
            <ErrorBoundary>
                <div>child content</div>
            </ErrorBoundary>,
        );
        expect(screen.getByText('child content')).toBeInTheDocument();
    });

    it('renders error message when child throws error', () => {
        const consoleError = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        render(
            <ErrorBoundary>
                <ErroredComponent />
            </ErrorBoundary>,
        );

        expect(screen.getByText('Something went wrong.')).toBeInTheDocument();

        consoleError.mockRestore();
    });
});
