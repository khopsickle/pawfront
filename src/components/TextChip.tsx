import { BREED_GROUP_COLORS } from '@/features/breeds/breedTypes';

export default function TextChip({ text }: { text?: string }) {
    const displayText = text || 'Unknown';
    const key = displayText?.toLowerCase();
    const colorClass = BREED_GROUP_COLORS[key] || BREED_GROUP_COLORS['unknown'];

    return (
        <span
            className={`rounded-full px-2 py-1 text-xs font-bold ${colorClass}`}
        >
            {displayText}
        </span>
    );
}
