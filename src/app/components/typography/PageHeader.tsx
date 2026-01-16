type PageHeaderProps = {
  title: string
  styles?: string
}

export default function PageHeader({ title, styles="" }: PageHeaderProps) {
  return <h1 className={`text-2xl font-semibold text-neutral-900 mb-4 ${styles}`}>{title}</h1>;
}
