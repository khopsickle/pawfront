export default function CardSkeleton() {
    return (
        <div
            className="animate-pulse rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            aria-label="Loading breed information"
            role="status"
        >
            <div className="mb-3 h-10 rounded bg-gray-300"></div>
            <div className="mb-3 h-16 rounded bg-gray-300"></div>
            <div className="h-6 w-1/4 rounded bg-gray-300"></div>
        </div>
    );
}
