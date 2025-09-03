import { useParams } from '@tanstack/react-router';
import { useBreedById } from './dogAPI';
import BreedDetailRow from './BreedDetailRow';
import type { Breed } from './breedTypes';
import CardSkeleton from '@/components/CardSkeleton';

const breedDetailFields = (breed: Breed) => [
    { label: 'Country of origin', value: breed.country_code },
    { label: 'Bred for', value: breed.bred_for },
    {
        label: 'Weight Range',
        value: breed.weight?.metric && `${breed.weight.metric} kgs`,
    },
    {
        label: 'Height Range',
        value: breed.height?.metric && `${breed.height.metric} cm`,
    },
    { label: 'Average lifespan', value: breed.life_span },
];

export default function BreedDetail() {
    const { breedId } = useParams({ from: '/detail/$breedId' });
    const { data: breed, isLoading } = useBreedById(breedId);

    if (isLoading) {
        return (
            <div className="mx-auto h-96 w-1/2 animate-pulse rounded-lg bg-gray-300 pt-50">
                <CardSkeleton />
            </div>
        );
    }

    if (!breed) {
        return (
            <div className="text-center font-bold text-red-600">
                No breed data for breed ID: {breedId}.
            </div>
        );
    }
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${breed.image?.url})`,
                }}
                className="mx-auto h-96 w-1/2 rounded-lg bg-cover bg-top shadow-md"
            ></div>
            <div className="mx-auto -mt-6 w-1/2 rounded-lg bg-white p-7 shadow-md">
                <h2 className="mb-4 text-2xl font-semibold">{breed.name}</h2>
                {breedDetailFields(breed).map(({ label, value }) => (
                    <BreedDetailRow label={label} value={value} />
                ))}
            </div>
        </>
    );
}
