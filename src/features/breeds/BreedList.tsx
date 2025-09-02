import BreedCard from './BreedCard';
import { useBreeds } from './dogAPI';
import { Link } from '@tanstack/react-router';

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
        <>
            <h1 className="mb-6 text-2xl font-bold">Dog Breeds</h1>
            <div className="mx-auto grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {data.map(breed => (
                    <Link
                        key={breed.id}
                        to="/detail/$breedId"
                        params={{ breedId: String(breed.id) }}
                    >
                        <BreedCard breed={breed} />
                    </Link>
                ))}
            </div>
        </>
    );
}
