import BlockQuote from '@/components/BlockQuote';
import type { Breed } from './breedTypes';
import TextChip from '@/components/TextChip';

type BreedCardProps = { breed: Breed };

export default function BreedCard({ breed }: BreedCardProps) {
    return (
        <div
            className={`flex min-h-48 flex-col rounded-lg bg-white p-7 shadow-md outline outline-black/5`}
        >
            <h2 className="mb-2 text-lg font-bold">{breed.name}</h2>
            <BlockQuote text={breed.temperament} />
            <div className="mt-auto">
                <TextChip text={breed.breed_group} />
            </div>
        </div>
    );
}
