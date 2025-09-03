import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
    it('renders children inside <main> with the correct role', () => {
        render(
            <Container>
                <p>Test content</p>
            </Container>,
        );

        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
        expect(mainElement).toHaveTextContent('Test content');
    });
});
