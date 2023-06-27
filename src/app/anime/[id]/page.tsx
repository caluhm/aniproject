import Image from "next/image";
import getAnimeByID from "../../api/getAnimeByID"
import Link from "next/link";
import CharactersPageGridWrapper from "@/app/components/CharactersPageGridWrapper";

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getAnimeByID(params.id);

    const backgroundColor = "rgba(19, 23, 29, 0.70)";

    const description = data.data.Media.description ? data.data.Media.description.replace(/<\/?i>/g, '').replace(/<br\s?\/?>/g, '') : "No description available."

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div>
                <div className="relative w-full md:h-[342px] h-[275px] rg:h-[225px]">
                    {data.data.Media.bannerImage ? (
                    <Image src={data.data.Media.bannerImage} fill alt={data.data.Media.title.romaji} className="h-full w-full object-cover object-center" loading='lazy'/>
                    ) : (
                        <div className="h-full w-full bg-neutral-950">
                            <div className="flex flex-col justify-center items-center h-full">
                                <h1 className="text-3xl font-medium text-neutral-300">No banner available...</h1>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full bg-[#13171D]">
                    <div className="flex flex-row md:gap-5 gap-3 md:min-h-[250px] min-h-[200px] rg:min-h-[140px] md:px-12 px-6 rg:px-4">
                        <div className="relative md:-mt-20 -mt-20 rg:-mt-14">
                            <div className="relative md:w-[215px] md:h-[300px] w-[182.75px] h-[255px] rg:w-[131.15px] rg:h-[183px] shadow-custom-bright">
                                <Image src={data.data.Media.coverImage.extraLarge} width={300} height={600} alt={data.data.Media.title.romaji} className="h-full w-full object-cover object-center rounded" loading='lazy'/>
                            </div>
                        </div>
                        <div className="px-2.5 py-4">
                            <h1 className="md:text-lg text-sm font-medium text-neutral-300 md:pb-0.5 pb-1.5">{data.data.Media.title.romaji}</h1>
                            <h2 className="text-xs text-[0.68rem] font-normal text-neutral-500 pb-0 md:pb-5">{data.data.Media.title.native}</h2>
                            <p className="hidden md:block text-sm font-light text-neutral-400">{description}</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-8 w-full bg-neutral-950 md:px-12 px-6 rg:px-4 py-8 justify-center items-start">
                    <div className="md:hidden block w-fit">
                        <h3 className="text-base font-medium text-neutral-300 pb-1">Description</h3>
                        <div className="bg-[#13171D] p-3 rounded-md w-fit">
                            <p className="text-sm font-light text-neutral-400">{description}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-neutral-300 pb-1">Related</h3>
                        <CharactersPageGridWrapper>
                        {data.data.Media.relations.edges && data.data.Media.relations.edges.map((edge: any) => (
                                <div key={edge.node.id} className="relative h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-y-hidden rounded">
                                    {edge.node.type === "ANIME" ? (
                                        <Link href={`/anime/${edge.node.id}`}>
                                            <Image src={edge.node.coverImage.extraLarge} width={300} height={600} alt={edge.node.title.romaji} loading='lazy' className="h-full w-full object-cover object-center"/>
                                            <div 
                                                className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                                                style={{ backgroundColor }}
                                            >
                                                <Link href={`/anime/${edge.node.id}`}>
                                                    <p className="text-[0.83rem] font-semibold">{edge.node.title.english ? edge.node.title.english : edge.node.title.romaji}</p>
                                                </Link>
                                                <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">
                                                    <span>{edge.node.type} </span>
                                                    -
                                                    <span> {edge.relationType}</span>
                                                    
                                                </p>
                                            </div>
                                        </Link>
                                    ) : (
                                    <>
                                    <Image src={edge.node.coverImage.extraLarge} width={300} height={600} alt={edge.node.title.romaji} loading='lazy' className="h-full w-full object-cover object-center"/>
                                        <div 
                                            className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                                            style={{ backgroundColor }}
                                        >
                                            <Link href={`/anime/${edge.node.id}`}>
                                                <p className="text-[0.83rem] font-semibold">{edge.node.title.english ? edge.node.title.english : edge.node.title.romaji}</p>
                                            </Link>
                                            <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">
                                                <span>{edge.node.type} </span>
                                                -
                                                <span> {edge.relationType}</span>
                                            </p>
                                        </div>
                                    </>
                                    )}
                                </div>
                        ))}
                        </CharactersPageGridWrapper>
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-neutral-300 pb-1">Characters</h3>
                        <CharactersPageGridWrapper>
                        {data.data.Media.characters.nodes && data.data.Media.characters.nodes.map((character: any) => (
                            <div key={character.id} className="relative h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-y-hidden rounded">
                                    <Image src={character.image.large} width={300} height={600} alt={character.name.full} loading='lazy' className="h-full w-full object-cover object-center"/>
                                    <div 
                                        className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                                        style={{ backgroundColor }}
                                    >      
                                        <p className="text-[0.83rem] font-semibold">{character.name.full}</p>
                                        <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">
                                            <span>{character.gender} </span>
                                            -
                                            <span> {character.age}</span>
                                        </p>
                                    </div>
                            </div>
                        ))}
                        </CharactersPageGridWrapper>
                    </div>
                </div>
            </div>
        </main>
    )
}