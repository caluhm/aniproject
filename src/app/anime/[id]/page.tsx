import Image from "next/image";
import getAnimeByID from "../../api/getAnimeByID"
import Link from "next/link";
import CharactersPageGridWrapper from "@/app/components/CharactersPageGridWrapper";
import BackButton from "@/app/components/BackButton";

export const revalidate = 30 // revalidate this page every 30 seconds

export default async function Page({ params }: { params: { id: number } }) {
    const data = await getAnimeByID(params.id);

    const backgroundColor = "rgba(19, 23, 29, 0.70)";

    const description = data.data.Media.description ? data.data.Media.description.replace(/<\/?i>/g, '').replace(/<br\s?\/?>/g, '') : "No description available."

    let timeString = null;

    if (data.data.Media.nextAiringEpisode === null) {
        timeString = 'TBA';
    } else {

    const nextAiringEpisodeTime = data.data.Media.nextAiringEpisode.airingAt;

    const currentTime = Date.now() / 1000;
    const timeDifference = nextAiringEpisodeTime - currentTime;

    const days = Math.floor(timeDifference / (24 * 60 * 60));
    const hours = Math.floor((timeDifference % (24 * 60 * 60)) / (60 * 60));

    timeString = `${days} days, ${hours} hours`;
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <BackButton />
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
                <div className="flex md:flex-row flex-col gap-8 min-w-full bg-neutral-950 p-8 grid-md:gap-5 grid-md:p-5">
                    <div className="md:w-[15rem] w-full md:h-fit h-[100px] bg-[#13171D] p-2.5 rounded-md md:overflow-hidden overflow-x-auto">
                        <div className="w-full h-full flex md:flex-col flex-row gap-10 md:gap-5 p-1.5 md:whitespace-normal whitespace-nowrap items-center md:items-start">
                            <div className="text-blue-400">
                                <h3 className="text-xs font-semibold pb-1">Airing</h3>
                                <p className="text-xs font-medium">{data.data.Media.nextAiringEpisode ? 'Ep ' + data.data.Media.nextAiringEpisode.episode + ': ' + timeString : 'TBA'}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Format</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.format}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Status</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.status.replace(/_/g, ' ')}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Start Date</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.startDate.day ? data.data.Media.startDate.day + '/' + data.data.Media.startDate.month + '/' + data.data.Media.startDate.year : 'TBA'}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Season</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.season} {data.data.Media.seasonYear}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Popularity</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.popularity}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Favourites</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.favourites}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Episodes</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.episodes ? data.data.Media.episodes : 'TBA' }</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Studio</h3>
                                <Link href={`/studio/${data.data.Media.studios.nodes[0]?.id}`}>
                                    <p className="text-xs font-medium text-neutral-400">{data.data.Media.studios.nodes[0]?.name}</p>
                                </Link>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Source</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.source}</p>
                            </div>
                            <div> 
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Hashtag</h3>
                                <p className="text-xs font-medium text-neutral-400">
                                    {data.data.Media.hashtag ? data.data.Media.hashtag : 'TBA'}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Genres</h3>
                                <div className="flex flex-row md:flex-col gap-1">
                                    {data.data.Media.genres.map((genre: string, index: number) => (
                                        <p className="text-xs font-medium text-neutral-400" key={index}>{genre}</p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Average Score</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.averageScore ? data.data.Media.averageScore : 'N/A'}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Romaji</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.title.romaji}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Native</h3>
                                <p className="text-xs font-medium text-neutral-400">{data.data.Media.title.native}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold text-neutral-300 pb-1">Tags</h3>
                                <div className="flex flex-row md:flex-col gap-1 md:pr-0 pr-4">
                                    {data.data.Media.tags.map((tag: any, index: number) => (
                                        <p className="text-xs font-medium text-neutral-400" key={index}>{tag.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-screen flex flex-col gap-8 bg-[#13171D] p-5 rounded-md">
                        <div className="md:hidden block w-fit">
                            <h3 className="text-base font-medium text-neutral-300 pb-1">Description</h3>
                            <p className="text-sm font-light text-neutral-400">{description}</p>
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
                        <div>
                            <h3 className="text-base font-medium text-neutral-300 pb-1">Trailer</h3>
                            <div className="max-w-[500px] aspect-video rounded-md overflow-hidden">
                                {data.data.Media.trailer ? (
                                    <iframe src={`https://www.youtube.com/embed/${data.data.Media.trailer.id}`} allowFullScreen className="w-full h-full"></iframe>
                                ) : (
                                    <div className="w-full h-full bg-[#13171D] flex flex-col justify-center items-center">
                                        <h1 className="text-3xl font-medium text-neutral-300">No trailer available...</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}