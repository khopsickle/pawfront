export default function BreedDetailRow({
    label,
    value,
}: {
    label: string;
    value?: string;
}) {
    if (!value) return null;
    return (
        <p>
            <span className="font-semibold">{label}:</span> {value}
        </p>
    );
}
