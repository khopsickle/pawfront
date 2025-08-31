import BreedList from '@/features/breeds/BreedList';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: BreedList,
});
