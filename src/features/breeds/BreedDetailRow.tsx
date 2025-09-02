type BreedDetailRowProps = {
    label: string;
    value?: string;
};
export default function BreedDetailRow({ label, value }: BreedDetailRowProps) {
    if (!value) return null;
    return (
        <p>
            <span className="font-semibold">{label}:</span> {value}
        </p>
    );
}
