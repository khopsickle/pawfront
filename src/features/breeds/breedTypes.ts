export const BREED_GROUPS = [
    'terrier',
    'hound',
    'working',
    'herding',
    'toy',
    'sporting',
    'non-sporting',
    'mixed',
    'unknown',
] as const;

export type BreedGroup = (typeof BREED_GROUPS)[number];

export type Breed = {
    id: number;
    name: string;
    country_code?: string;
    bred_for?: string;
    breed_group?: BreedGroup;
    life_span?: string;
    temperament?: string;
    reference_image_id?: string;
    weight: {
        imperial: string;
        metric: string;
    };
    height: {
        imperial: string;
        metric: string;
    };
    image?: {
        id: string;
        width: number;
        height: number;
        url: string;
    };
};

export const BREED_GROUP_COLORS: Record<BreedGroup, string> = {
    terrier: 'bg-red-300 text-red-800',
    hound: 'bg-yellow-300 text-yellow-800',
    working: 'bg-blue-300 text-blue-800',
    herding: 'bg-green-300 text-green-800',
    toy: 'bg-pink-300 text-pink-800',
    sporting: 'bg-indigo-300 text-indigo-800',
    'non-sporting': 'bg-purple-300 text-purple-800',
    mixed: 'bg-slate-300 text-slate-800',
    unknown: 'bg-stone-300 text-stone-800',
} as const;
