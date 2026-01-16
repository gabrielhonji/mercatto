export default function SalesTableSkeleton() {
    return (
        <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-10 bg-neutral-200 rounded-md animation-pulse"  />
            ))}
        </div>
    );
}
