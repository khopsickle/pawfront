import BreedDetail from '@/features/breeds/BreedDetail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail')({
    component: BreedDetail,
});
