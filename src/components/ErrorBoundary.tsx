import type { ReactNode } from 'react';
import { Component } from 'react';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? (
            <div>Something went wrong.</div>
        ) : (
            this.props.children
        );
    }
}

export default ErrorBoundary;
