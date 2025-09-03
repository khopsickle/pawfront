import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardSkeleton from '../CardSkeleton';

describe('CardSkeleton', () => {
    it('renders the skeleton container with correct aria attributes and expected styles', () => {
        render(<CardSkeleton />);

        const container = screen.getByRole('status');
        expect(container).toBeInTheDocument();
        expect(container).toHaveAttribute(
            'aria-label',
            'Loading breed information',
        );
        expect(container).toHaveClass(
            'animate-pulse',
            'rounded-lg',
            'border',
            'border-gray-200',
            'bg-white',
        );
    });

    it('renders skeleton divs with expected styles', () => {
        render(<CardSkeleton />);

        const skeletonDivs = screen.getByRole('status').querySelectorAll('div');

        expect(skeletonDivs.length).toBe(3);

        expect(skeletonDivs[0]).toHaveClass('rounded', 'bg-gray-300');
        expect(skeletonDivs[1]).toHaveClass('rounded', 'bg-gray-300');
        expect(skeletonDivs[2]).toHaveClass('rounded', 'bg-gray-300');
    });
});
