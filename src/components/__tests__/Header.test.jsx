import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

vi.mock('@tanstack/react-router', () => ({
    Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('Header', () => {
    it('renders the header and nav link', () => {
        render(<Header />);

        const link = screen.getByRole('link', { name: 'Pawfront' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
    });
});
