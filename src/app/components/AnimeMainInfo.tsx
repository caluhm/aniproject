import Image from "next/image"

export default function AnimeMainInfo({ 
    coverImage, 
    titleRomaji, 
    titleNative, 
    description 
}: {
    coverImage: string, 
    titleRomaji: string, 
    titleNative: string, 
    description: string
}) {
    return (
        <div className="w-full bg-[#13171D]">
            <div className="flex flex-row md:gap-5 gap-3 md:min-h-[250px] min-h-[200px] rg:min-h-[140px] md:px-12 px-6 rg:px-4">
                <div className="relative md:-mt-20 -mt-20 rg:-mt-14">
                    <div className="relative md:w-[215px] md:h-[300px] w-[182.75px] h-[255px] rg:w-[131.15px] rg:h-[183px] shadow-custom-bright">
                        <Image 
                            src={coverImage} 
                            width={300} 
                            height={600} 
                            alt={titleRomaji} 
                            className="h-full w-full object-cover object-center rounded" 
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="px-2.5 py-4">
                    <h1 className="md:text-lg text-sm font-medium text-neutral-300 md:pb-0.5 pb-1.5">{titleRomaji}</h1>
                    <h2 className="text-xs text-[0.68rem] font-normal text-neutral-500 pb-0 md:pb-5">{titleNative}</h2>
                    <p className="hidden md:block text-sm font-light text-neutral-400">{description}</p>
                </div>
            </div>
        </div>
    )
}