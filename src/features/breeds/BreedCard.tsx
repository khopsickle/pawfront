import type { Breed } from './breedTypes';

export default function BreedCard({ breed }: { breed: Breed }) {
    return (
        <div className="rounded-lg bg-white p-6 shadow-md outline outline-black/5">
            {breed.name}
        </div>
    );
}
