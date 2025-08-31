import { useRouterState, useParams } from '@tanstack/react-router';
import type { Breed } from './breedTypes';

export default function BreedDetail() {
    const { breedId } = useParams({ from: '/detail/$breedId' });
    const breed = useRouterState<{ breed?: Breed }>({
        select: state => state.location.state?.breed,
    });
    if (!breed) {
        return <p>No breed data for {breedId}.</p>;
    }
    return <span>detail {breed.name}</span>;
}
