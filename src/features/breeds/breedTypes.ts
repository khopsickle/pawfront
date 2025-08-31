export interface LifeSpan {
    min: number;
    max: number;
}

export interface BreedAttributes {
    name: string;
    description: string;
    hypoallergenic: boolean;
    life: LifeSpan;
    male_weight: LifeSpan;
    female_weight: LifeSpan;
}

export interface Breed {
    id: string;
    type: 'breed';
    attributes: BreedAttributes;
}
