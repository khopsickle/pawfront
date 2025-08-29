import BreedDetail from '@/features/breed/BreedDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/detail')({
  component: BreedDetail,
})
