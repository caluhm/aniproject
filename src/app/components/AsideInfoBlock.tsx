export default function AsideInfoBlock({ title, data }: { title: string, data: string | number}) {
    return (
        <div>
            <h3 className="text-xs font-semibold pb-1 text-neutral-300">{title}</h3>
            <p className="text-xs font-medium text-neutral-400">{data}</p>
        </div>
    )
}