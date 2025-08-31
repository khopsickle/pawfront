import { useQuery } from '@tanstack/react-query';
import type { Breed } from './breedTypes';
import axiosClient from '@/api/axiosClient';

export const queryFn = async (): Promise<Breed[]> => {
    const response = await axiosClient.get<{ data: Breed[] }>('/breeds');
    return response.data.data;
};

export function useBreeds() {
    return useQuery<Breed[], Error>({
        queryKey: ['breeds'],
        queryFn,
        staleTime: 1000 * 60 * 15, // 15 mins
    });
}
