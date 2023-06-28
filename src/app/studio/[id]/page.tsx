import StudioPageGridWrapper from "@/app/components/StudioPageGridWrapper";
import getStudioByID from "../../api/getStudioByID"
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getStudioByID(params.id);

    const backgroundColor = "rgba(19, 23, 29, 0.70)";

    return (
        <main className="flex flex-col min-h-screen bg-[#13171D] text-white justify-center items-center py-14">
            <BackButton />
            <div className="flex flex-col justify-start px-12 rg:px-6 max-w-[1140px] w-full">
                <h1 className="text-2xl font-bold text-neutral-200 pb-2">{data.data.Studio.name}</h1>
                <h2 className="text-base font-semibold text-neutral-300">Popular Releases</h2>
                <div className="py-5">
                <StudioPageGridWrapper>
                    {data.data.Studio.media.nodes && data.data.Studio.media.nodes.map((anime: any) => (
                        <div key={anime.id} className="relative h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-y-hidden rounded">
                            <Link href={`/anime/${anime.id}`}>
                                <Image src={anime.coverImage.extraLarge} width={300} height={600} alt={anime.title.romaji} loading='lazy' className="h-full w-full object-cover object-center"/>
                                    <div 
                                        className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                                        style={{ backgroundColor }}
                                    >
                                        <Link href={`/anime/${anime.id}`}>
                                            <p className="text-[0.83rem] font-semibold">{anime.title.english ? anime.title.english : anime.title.romaji}</p>
                                        </Link>
                                            <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">
                                                {anime.type}         
                                            </p>
                                    </div>
                            </Link>
                        </div>
                    ))}
                </StudioPageGridWrapper>
                </div>
            </div>
        </main>
    )
}