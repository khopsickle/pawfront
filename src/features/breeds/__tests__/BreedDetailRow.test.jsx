import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BreedDetailRow from '../BreedDetailRow';

describe('BreedDetailRow', () => {
    it('renders label and value when value is provided', () => {
        render(<BreedDetailRow label="label" value="value" />);
        expect(screen.getByText(/label:/)).toBeInTheDocument();
        expect(screen.getByText('value')).toBeInTheDocument();
    });

    it('returns null when value is missing', () => {
        const { container } = render(<BreedDetailRow label="Life Span" />);
        expect(container).toBeEmptyDOMElement();
    });
});
