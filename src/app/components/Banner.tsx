import Image from "next/image";

export default function Banner({ 
    src, 
    alt 
}: { 
    src: string | null, 
    alt: string
}) {
    return (
        <div className="relative w-full md:h-[342px] h-[275px] rg:h-[225px]">
            {src ? (
                <Image 
                    src={src} 
                    alt={alt} 
                    className="h-full w-full object-cover object-center" 
                    loading='lazy'
                    fill
                />
            ) : (
                <div className="h-full w-full bg-neutral-950">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-3xl font-medium text-neutral-300">No banner available...</h1>
                    </div>
                </div>
            )}
        </div>
    )
}