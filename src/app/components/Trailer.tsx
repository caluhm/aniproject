export default function Trailer({ id }: { id: number }) {
    return (
        <div className="max-w-[500px] aspect-video rounded-md overflow-hidden">
            {id ? (
                <iframe src={`https://www.youtube.com/embed/${id}`} allowFullScreen className="w-full h-full"></iframe>
            ) : (
                <div className="w-full h-full bg-[#13171D] flex flex-col justify-center items-center">
                    <h4 className="text-3xl font-medium text-neutral-300">No trailer available...</h4>
                </div>
            )}
        </div>
    )
}