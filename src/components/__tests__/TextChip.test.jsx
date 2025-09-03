import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../../features/breeds/breedTypes', () => ({
    BREED_GROUP_COLORS: {
        hound: 'hound-class',
        unknown: 'unknown-class',
    },
}));

import TextChip from '../TextChip';

describe('TextChip', () => {
    it('renders with provided text and correct color class', () => {
        render(<TextChip text="Hound" />);
        const chip = screen.getByRole('status');
        expect(chip).toHaveTextContent('Hound');
        expect(chip).toHaveClass('hound-class');
    });

    it('uses fallback color class no key match', () => {
        render(<TextChip text="DoesntExist" />);
        const chip = screen.getByRole('status');
        expect(chip).toHaveTextContent('DoesntExist');
        expect(chip).toHaveClass('unknown-class');
    });

    it('renders "Unknown" and fallback color if no text provided', () => {
        render(<TextChip test="" />);
        const chip = screen.getByRole('status');
        expect(chip).toHaveTextContent('Unknown');
        expect(chip).toHaveClass('unknown-class');
    });
});
