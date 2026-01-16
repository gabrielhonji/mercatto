export default function SectionTitle({ title } : { title: string }) {
    return (
        <h2 className="text-lg font-medium text-neutral-800">
            {title}
        </h2>
    );
}
