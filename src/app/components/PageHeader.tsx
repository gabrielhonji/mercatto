export default function PageHeader({ title } : { title: string }) {
    return (
        <h1 className="text-2xl font-semibold text-neutral-900">
            {title}
        </h1>
    );
}
