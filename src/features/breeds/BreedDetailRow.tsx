type BreedDetailRowProps = {
    label: string;
    value?: string;
};

/**
 * BreedDetailRow Component
 *
 * Renders a single labeled data point.
 * - returns null if there is no value
 *
 * @param {string} label
 * @param {string} value
 * @returns {JSX.Element | null}
 */
export default function BreedDetailRow({ label, value }: BreedDetailRowProps) {
    if (!value) return null;
    return (
        <p>
            <span className="font-semibold">{label}:</span> {value}
        </p>
    );
}
