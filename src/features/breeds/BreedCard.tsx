import BlockQuote from '@/components/BlockQuote';
import type { Breed } from './breedTypes';
import TextChip from '@/components/TextChip';

type BreedCardProps = { breed: Breed };

/**
 * BreedCard Component
 *
 * Card component that shows breed name, temperment, and group
 *
 * @param {object} breed - info about a specific breed
 * @returns {JSX.Element}
 */
export default function BreedCard({ breed }: BreedCardProps) {
    return (
        <div className="flex min-h-48 flex-col rounded-lg bg-white p-7 shadow-md">
            <h2 className="mb-2 text-lg font-bold">{breed.name}</h2>
            <BlockQuote text={breed.temperament} />
            <div className="mt-auto">
                <TextChip text={breed.breed_group} />
            </div>
        </div>
    );
}
