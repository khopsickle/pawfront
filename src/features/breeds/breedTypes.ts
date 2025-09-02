export type Breed = {
    id: number;
    name: string;
    country_code?: string;
    bred_for?: string;
    breed_group?: string;
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