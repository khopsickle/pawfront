import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/BlockQuote', () => ({
    __esModule: true,
    default: ({ text }) => (
        <blockquote data-testid="blockquote">{text}</blockquote>
    ),
}));

vi.mock('../../../components/TextChip', () => ({
    __esModule: true,
    default: ({ text }) => <span data-testid="text-chip">{text}</span>,
}));

import BreedCard from '../BreedCard';

const mockBreed = {
    id: 1,
    name: 'Golden Retriever',
    country_code: 'US',
    temperament: 'Friendly, Curious, Merry',
    breed_group: 'hound',
};

describe('BreedCard', () => {
    it('renders breed name, temperament, and breed group', () => {
        render(<BreedCard breed={mockBreed} />);

        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            'Golden Retriever',
        );

        expect(screen.getByTestId('blockquote')).toHaveTextContent(
            'Friendly, Curious, Merry',
        );

        expect(screen.getByTestId('text-chip')).toHaveTextContent('hound');
    });

    it('renders components even when temperament or breed_group is missing', () => {
        const minimalBreed = {
            id: 2,
            name: 'Undefined Dog',
            temperament: undefined,
            breed_group: undefined,
        };

        render(<BreedCard breed={minimalBreed} />);

        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            'Undefined Dog',
        );
        expect(screen.getByTestId('blockquote')).toBeInTheDocument();
        expect(screen.getByTestId('text-chip')).toBeInTheDocument();
    });

    it('is accessible with no violations', async () => {
        const { container } = render(<BreedCard breed={mockBreed} />);
        const { axe, toHaveNoViolations } = await import('jest-axe');
        expect.extend(toHaveNoViolations);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
