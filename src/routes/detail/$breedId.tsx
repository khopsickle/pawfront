import { createFileRoute } from '@tanstack/react-router';
import React, { Suspense } from 'react';

const BreedDetail = React.lazy(
    () => import('@/features/breeds/BreedDetail'),
) as React.ComponentType<{ breedId: string }>;

export function BreedDetailWrapper({ breedId }: { breedId: string }) {
    return (
        <Suspense fallback={<div>Loading breed details...</div>}>
            <BreedDetail breedId={breedId} />
        </Suspense>
    );
}
export const Route = createFileRoute('/detail/$breedId')({
    component: () => {
        const { breedId } = Route.useParams();
        return <BreedDetailWrapper breedId={breedId} />;
    },
});
