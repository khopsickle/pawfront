import { useBreeds } from './dogAPI';

export default function BreedList() {
    const { data: breeds, isLoading, isError, error } = useBreeds();

    if (isLoading) {
        return <p>Loading breeds...</p>;
    }

    if (isError) {
        return <p>Failed to load dog breeds: {(error as Error).message}</p>;
    }

    if (!breeds || breeds.length === 0) {
        return <p>No breeds found.</p>;
    }
    const item = breeds[0];
    return <span className="text-sky-400">{item.id}</span>;
}
