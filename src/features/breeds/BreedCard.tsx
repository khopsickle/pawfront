import BlockQuote from '@/components/BlockQuote';
import type { Breed } from './breedTypes';
import TextChip from '@/components/TextChip';

type BreedCardProps = { breed: Breed };

export default function BreedCard({ breed }: BreedCardProps) {
    return (
        <article
            className={`flex min-h-48 flex-col rounded-lg bg-white p-7 shadow-md outline outline-black/5 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600`}
            role="button"
            tabIndex={0}
            aria-label={`View ${breed.name} breed details`}
        >
            <h2 className="mb-2 text-lg font-bold">{breed.name}</h2>
            <BlockQuote text={breed.temperament} />
            <div className="mt-auto">
                <TextChip text={breed.breed_group} />
            </div>
        </article>
    );
}
