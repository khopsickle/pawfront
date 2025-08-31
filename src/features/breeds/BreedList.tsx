import BreedCard from './BreedCard';
import { useBreeds } from './dogAPI';

export default function BreedList() {
    const { data, isLoading, isError, error } = useBreeds();

    if (isLoading) {
        return <p>Loading breeds...</p>;
    }

    if (isError) {
        return <p>Failed to load dog breeds: {(error as Error).message}</p>;
    }

    if (!data || data.length === 0) {
        return <p>No breeds found.</p>;
    }
    return (
        <div className="mx-auto grid gap-1 sm:grid-cols-2 md:grid-cols-3">
            {data.map(item => (
                <BreedCard breed={item} />
            ))}
        </div>
    );
}
