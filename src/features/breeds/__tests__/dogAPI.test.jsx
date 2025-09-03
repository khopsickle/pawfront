import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useBreeds, useBreedById } from '../../breeds/dogAPI';
import axiosClient from '../../../api/axiosClient';

vi.mock('../../../api/axiosClient', async () => ({
    default: {
        get: vi.fn(),
    },
}));

const mockBreeds = [
    { id: 1, name: 'dog 1' },
    { id: 2, name: 'dog 2' },
];

const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

describe('useBreeds', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetches and returns list of breeds', async () => {
        axiosClient.get.mockResolvedValue({ data: mockBreeds });

        const { result } = renderHook(() => useBreeds(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
        expect(result.current.data).toEqual(mockBreeds);
    });
});

describe('useBreedById', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('returns a single breed by id', async () => {
        axiosClient.get.mockResolvedValue({ data: mockBreeds });

        const { result } = renderHook(() => useBreedById('2'), {
            wrapper: createWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
        expect(result.current.data).toEqual(mockBreeds[1]);
    });

    it('returns undefined for missing id', async () => {
        axiosClient.get.mockResolvedValue({ data: mockBreeds });

        const { result } = renderHook(() => useBreedById('999'), {
            wrapper: createWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
        expect(result.current.data).toBeUndefined();
    });
});
