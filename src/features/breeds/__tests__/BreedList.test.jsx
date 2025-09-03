import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';

vi.mock('../dogAPI', () => ({
    useBreeds: vi.fn(),
}));

vi.mock('../../../components/Grid', () => ({
    __esModule: true,
    default: ({ children }) => <div data-testid="grid">{children}</div>,
}));

vi.mock('../../../components/CardSkeleton', () => ({
    __esModule: true,
    default: () => <div data-testid="skeleton" />,
}));

vi.mock('../BreedCard', () => ({
    __esModule: true,
    default: ({ breed }) => <div data-testid="breed-card">{breed.name}</div>,
}));

vi.mock('@tanstack/react-router', () => ({
    Link: ({ children }) => (
        <div data-testid="link" tabIndex={0}>
            {children}
        </div>
    ),
}));

import BreedList from '../BreedList';
import { useBreeds } from '../dogAPI';

const mockBreeds = [
    { id: 1, name: 'dog 1' },
    { id: 2, name: 'dog 2' },
];

const renderWithClient = ui => {
    const queryClient = new QueryClient();
    return render(
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    );
};

describe('BreedList', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders loading skeletons when loading', () => {
        useBreeds.mockReturnValue({
            data: undefined,
            isLoading: true,
            isError: false,
            error: null,
        });

        renderWithClient(<BreedList />);
        expect(screen.getAllByTestId('skeleton')).toHaveLength(6);
        expect(screen.getByTestId('grid')).toBeInTheDocument();
    });

    it('renders error message when on failed fetch', () => {
        useBreeds.mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: true,
            error: { message: 'Failed to fetch' },
        });

        renderWithClient(<BreedList />);
        expect(screen.getByText(/Failed to load/i)).toBeInTheDocument();
        expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
    });

    it('renders message when no breeds are found', () => {
        useBreeds.mockReturnValue({
            data: [],
            isLoading: false,
            isError: false,
            error: null,
        });

        renderWithClient(<BreedList />);
        expect(screen.getByText(/No breeds found/i)).toBeInTheDocument();
    });

    it('renders breed list when data is available', () => {
        useBreeds.mockReturnValue({
            data: mockBreeds,
            isLoading: false,
            isError: false,
            error: null,
        });

        renderWithClient(<BreedList />);

        expect(screen.getByText(/Dog Breeds/i)).toBeInTheDocument();
        expect(screen.getAllByTestId('breed-card')).toHaveLength(2);
        expect(screen.getByText('dog 1')).toBeInTheDocument();
        expect(screen.getByText('dog 2')).toBeInTheDocument();
        expect(screen.getAllByTestId('link')).toHaveLength(2);
    });

    it('renders accessible links that can be keyboard focused', async () => {
        useBreeds.mockReturnValue({
            data: mockBreeds,
            isLoading: false,
            isError: false,
            error: null,
        });

        renderWithClient(<BreedList />);

        const links = screen.getAllByTestId('link');
        expect(links).toHaveLength(2);
        expect(links[0]).toHaveTextContent('dog 1');
        expect(links[1]).toHaveTextContent('dog 2');

        await userEvent.tab();
        expect(links[0]).toHaveFocus();

        await userEvent.tab();
        expect(links[1]).toHaveFocus();
    });
});
