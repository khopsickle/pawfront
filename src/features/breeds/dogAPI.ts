import { useQuery } from '@tanstack/react-query';
import type { Breed } from './breedTypes';
import axiosClient from '@/api/axiosClient';

export const queryFn = async (): Promise<Breed[]> => {
    const response = await axiosClient.get<Breed[]>('/breeds');
    return response.data;
};

export function useBreeds() {
    return useQuery<Breed[], Error>({
        queryKey: ['breeds'],
        queryFn,
        staleTime: 1000 * 60 * 15, // 15 mins
    });
}

export function useBreedById(breedId: string) {
    return useQuery<Breed[], Error, Breed | undefined>({
        // allowing undefined for handling in component
        queryKey: ['breeds'],
        queryFn: queryFn,
        select: breeds => breeds.find(breed => String(breed.id) === breedId),
        staleTime: 1000 * 60 * 15, // 15 mins
    });
}
