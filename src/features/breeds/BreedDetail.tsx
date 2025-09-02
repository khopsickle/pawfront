import { useParams } from '@tanstack/react-router';
import { useBreedById } from './dogAPI';

export default function BreedDetail() {
    const { breedId } = useParams({ from: '/detail/$breedId' });
    const { data: breed, isLoading } = useBreedById(breedId);

    if (isLoading) {
        return <p>Loading breeds...</p>;
    }

    if (!breed) {
        return <p>No breed data for {breedId}.</p>;
    }
    return (
        <p>
            detail <span className="text-sky-400">{breed.name}</span>
        </p>
    );
}
