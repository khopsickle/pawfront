import BreedList from '@/features/breed/BreedList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: BreedList,
})
