import Link from "next/link"
import AsideInfoBlock from "./AsideInfoBlock"
import AsideInfoBlockMap from "./AsideInfoBlockMap"

type AnimeAsideInfoProps = {
    anime: {
        id: number
        title: {
            romaji: string
            english: string
            native: string
        }
        type: string
        format: string
        status: string
        description: string
        startDate: {
            year: number
            month: number
            day: number
        }
        endDate: {
            year: number
            month: number
            day: number
        }
        season: string
        seasonYear: number
        seasonInt: number
        episodes: number
        duration: number
        chapters: number
        volumes: number
        countryOfOrigin: string
        isLicensed: boolean
        source: string
        hashtag: string
        trailer: {
            id: string
            site: string
            thumbnail: string
        }
        coverImage: {
            extraLarge: string
        }
        bannerImage: string
        genres: string[]
        averageScore: number
        popularity: number
        favourites: number
        tags: {
            name: string
        }[]
        relations: {
            edges: {
                relationType: string
                node: {
                    id: number
                    title: {
                        romaji: string
                        english: string
                        native: string
                    }
                    type: string
                    coverImage: {
                        extraLarge: string
                    }
                }
            }[]
        }
        characters: {
            nodes: {
                id: number
                name: {
                    full: string
                }
                image: {
                    large: string
                }
                gender: string
                age: number
            }[]
        }
        studios: {
            nodes: {
                id: number
                name: string
            }[]
        }
        nextAiringEpisode: {
            episode: number
            timeUntilAiring: number
            airingAt: number
        }
    }
    timeUntilNextEpisode: string
}

export default function AnimeAsideInfo({ anime, timeUntilNextEpisode }: AnimeAsideInfoProps) {
    return (
        <div className="md:w-[15rem] w-full md:h-fit h-[100px] bg-[#13171D] p-2.5 rounded-md md:overflow-hidden overflow-x-auto">
            <div className="w-full h-full flex md:flex-col flex-row gap-10 md:gap-5 p-1.5 md:whitespace-normal whitespace-nowrap items-center md:items-start">
                <AsideInfoBlock title="Airing" data={anime.nextAiringEpisode ? 'Ep ' + anime.nextAiringEpisode.episode + ': ' + timeUntilNextEpisode : 'TBA'} />
                <AsideInfoBlock title="Format" data={anime.format} />
                <AsideInfoBlock title="Status" data={anime.status.replace(/_/g, ' ')} />
                <AsideInfoBlock title="Start Date" data={anime.startDate.day ? anime.startDate.day + '/' + anime.startDate.month + '/' + anime.startDate.year : 'TBA'} />
                <AsideInfoBlock title="Season" data={anime.season + ' ' + anime.seasonYear} />
                <AsideInfoBlock title="Popularity" data={anime.popularity} />
                <AsideInfoBlock title="Favourites" data={anime.favourites} />
                <AsideInfoBlock title="Episodes" data={anime.episodes ? anime.episodes : 'TBA'} />

                <Link href={`/studio/${anime.studios.nodes[0]?.id}`}>
                    <AsideInfoBlock title="Studio" data={anime.studios.nodes[0]?.name} />
                </Link>

                <AsideInfoBlock title="Source" data={anime.source} />
                <AsideInfoBlock title="Hashtag" data={anime.hashtag ? anime.hashtag : 'TBA'} />
                <AsideInfoBlockMap title="Genres" data={anime.genres} />
                <AsideInfoBlock title="Average Score" data={anime.averageScore ? anime.averageScore : 'N/A'} />
                <AsideInfoBlock title="Romaji" data={anime.title.romaji} />
                <AsideInfoBlock title="Native" data={anime.title.native} />

                <div>
                    <h3 className="text-xs font-semibold text-neutral-300 pb-1">Tags</h3>
                    <div className="flex flex-row md:flex-col gap-1">
                        {anime.tags.map((tag: { name: string }, index: number) => (
                            <p className="text-xs font-medium text-neutral-400" key={index}>{tag.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}