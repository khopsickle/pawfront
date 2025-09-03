import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('@tanstack/react-router', () => ({
    useParams: () => ({ breedId: '123' }),
}));

vi.mock('../dogAPI', () => ({
    useBreedById: vi.fn(),
}));

vi.mock('../../../components/CardSkeleton', () => ({
    __esModule: true,
    default: () => <div data-testid="skeleton" />,
}));

vi.mock('../BreedDetailRow', () => ({
    __esModule: true,
    default: ({ label, value }) => (
        <div data-testid="detail-row">
            {label}: {value}
        </div>
    ),
}));

import BreedDetail from '../BreedDetail';

const renderWithClient = ui => {
    const queryClient = new QueryClient();
    return render(
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    );
};

const mockBreed = {
    id: 123,
    name: 'Golden Retriever',
    country_code: 'US',
    bred_for: 'Retrieving',
    life_span: '10 - 12 years',
    weight: { metric: '25 - 34' },
    height: { metric: '55 - 61' },
    image: { url: 'https://example.com/image.jpg' },
};

import { useBreedById } from '../dogAPI';

describe('BreedDetail', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders loading state', () => {
        useBreedById.mockReturnValue({ isLoading: true, data: undefined });

        renderWithClient(<BreedDetail />);
        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('renders error message when no breed data is returned', () => {
        useBreedById.mockReturnValue({ isLoading: false, data: undefined });

        renderWithClient(<BreedDetail />);
        expect(
            screen.getByText(/No breed data for breed ID: 123/i),
        ).toBeInTheDocument();
    });

    it('renders correct breed detail data', () => {
        useBreedById.mockReturnValue({ isLoading: false, data: mockBreed });

        renderWithClient(<BreedDetail />);

        expect(screen.getByText('Golden Retriever')).toBeInTheDocument();
        expect(screen.getAllByTestId('detail-row')).toHaveLength(5);

        expect(screen.getByText(/Country of origin/i)).toBeInTheDocument();
        expect(screen.getByText(/Retrieving/)).toBeInTheDocument();
        expect(screen.getByText(/25 - 34 kgs/)).toBeInTheDocument();
        expect(screen.getByText(/55 - 61 cm/)).toBeInTheDocument();
        expect(screen.getByText(/10 - 12 years/)).toBeInTheDocument();
    });
});
