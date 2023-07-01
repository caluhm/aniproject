export default function AsideInfoBlockMap({ title, data }: { title: string, data: string[] }) {
    return (
        <div>
            <h3 className="text-xs font-semibold text-neutral-300 pb-1">{title}</h3>
            <div className="flex flex-row md:flex-col gap-1">
                {data.map((item: string, index: number) => (
                    <p className="text-xs font-medium text-neutral-400" key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}