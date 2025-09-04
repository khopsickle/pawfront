import BreedCard from './BreedCard';
import Grid from '../../components/Grid';
import { useBreeds } from './dogAPI';
import { Link } from '@tanstack/react-router';
import CardSkeleton from '@/components/CardSkeleton';

/**
 * BreedList Component
 *
 * Fetches and displays a list of clickable cards of dog breeds
 * - loading skeleton grid while isLoading
 * - displays an error message on isError
 * - displays message when no data is found
 *
 * @returns {JSX.Element}
 */
export default function BreedList() {
    const { data, isLoading, isError, error } = useBreeds();

    if (isLoading) {
        return (
            <Grid>
                {[...Array(6)].map((_, i) => (
                    <CardSkeleton key={i} />
                ))}
            </Grid>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-600">
                <span className="font-bold">Failed to load:</span>{' '}
                {error?.message}
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="text-center font-bold text-red-600">
                No breeds found.
            </div>
        );
    }

    return (
        <>
            <h1 className="mb-6 text-2xl font-bold">Dog Breeds</h1>
            <Grid>
                {data.map(breed => (
                    <Link
                        key={breed.id}
                        to="/detail/$breedId"
                        params={{ breedId: String(breed.id) }}
                    >
                        <BreedCard breed={breed} />
                    </Link>
                ))}
            </Grid>
        </>
    );
}
