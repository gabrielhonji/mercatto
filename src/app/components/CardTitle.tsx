export default function CardTitle({ title } : { title: string }) {
    return (
        <h3 className="text-sm font-medium text-neutral-700">
            {title}
        </h3>
    );
}
