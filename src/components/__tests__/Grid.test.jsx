import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Grid from '../Grid';

describe('Grid', () => {
    it('renders the children inside a grid container', () => {
        render(
            <Grid>
                <div>Card 1</div>
                <div>Card 2</div>
                <div>Card 3</div>
            </Grid>,
        );

        expect(screen.getByText('Card 1')).toBeInTheDocument();
        expect(screen.getByText('Card 2')).toBeInTheDocument();
        expect(screen.getByText('Card 3')).toBeInTheDocument();
    });

    it('applies correct grid classes to the container', () => {
        render(
            <Grid>
                <div>content</div>
            </Grid>,
        );

        const gridContainer = screen.getByText('content').parentElement;
        expect(gridContainer).toHaveClass(
            'mx-auto',
            'grid',
            'gap-3',
            'sm:grid-cols-2',
            'md:grid-cols-3',
        );
    });
});
