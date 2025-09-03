import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlockQuote from '../BlockQuote';

describe('BlockQuote', () => {
    it('renders prop text', () => {
        render(<BlockQuote text="Hello world!" />);
        expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });

    it('renders default text when missing text prop', () => {
        render(<BlockQuote />);
        expect(
            screen.getByText('No description available.'),
        ).toBeInTheDocument();
    });
});
