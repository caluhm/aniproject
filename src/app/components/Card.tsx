import Image from "next/image";
import Link from "next/link";

import { HiOutlineHeart } from "react-icons/hi";

type CardProps = {
    anime: {
        id: number;
        title: {
            romaji: string;
            english: string;
            native: string;
        };
        type: string;
        format: string;
        status: string;
        description: string;
        episodes: number | null;
        coverImage: {
            extraLarge: string;
        };
        genres: string[];
        averageScore: number | null;
        studios: {
            nodes: {
                id: number;
                name: string;
            }[];
        };
        nextAiringEpisode: {
            airingAt: number;
            timeUntilAiring: number;
            episode: number;
        };
    },
    id: number;
    page: number;
};

export default function Card({ anime, id, page }: CardProps) {

    const backgroundColor = "rgba(19, 23, 29, 0.70)";
    const description = anime.description ? anime.description.replace(/<\/?i>/g, '').replace(/<br\s?\/?>/g, '') : "No description available."
    let truncatedDescription = description;

    const popularityNum = page === 1 ? id + 1 : id + 1 + (page - 1) * 50;

    let timeString = null;

    if (anime.nextAiringEpisode === null) {
        timeString = 'TBA';
    } else {

    const nextAiringEpisodeTime = anime.nextAiringEpisode.airingAt;

    const currentTime = Date.now() / 1000;
    const timeDifference = nextAiringEpisodeTime - currentTime;

    const days = Math.floor(timeDifference / (24 * 60 * 60));
    const hours = Math.floor((timeDifference % (24 * 60 * 60)) / (60 * 60));

    timeString = `${days} days, ${hours} hours`;
    }

    return (
        <div 
            className="flex bg-[#1F232D] rounded flex-row h-[265px] min-w-[370px] card-md:min-w-[330px] card-md:w-full card-sm:h-[230px] card-sm:min-w-[320px] shadow-custom"
        >
            <Link href={`/anime/${anime.id}`}>
                <div className="relative h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-y-hidden rounded-tl rounded-bl">
                    <Image src={anime.coverImage.extraLarge} width={300} height={600} alt={anime.title.romaji} loading='lazy' className="h-full w-full object-cover object-center"/>
                    <div 
                        className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                        style={{ backgroundColor }}
                    >
                        <Link href={`/anime/${anime.id}`}>
                            <p className="text-[0.83rem] font-semibold">{anime.title.english ? anime.title.english : anime.title.romaji}</p>
                        </Link>
                        <Link href={`/studio/${anime.studios.nodes[0]?.id}`}>
                            <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">{anime.studios.nodes[0]?.name}</p>
                        </Link>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col justify-between w-full h-full">
                <div className="w-full text-white text-left p-4 overflow-hidden">
                    <div className="w-full flex flex-row justify-between">
                        <div className="flex flex-col">
                            <div className="text-[0.7rem] font-semibold text-gray-500">{anime.episodes ? "Ep 1 of " + anime.episodes + " airing in" : "Ep 1 airing in"}</div>
                            <div className="text-base font-semibold text-gray-400">{timeString}</div>
                        </div>
                        <div className="flex flex-row items-start justify-center text-xs font-medium text-gray-400 gap-1.5">
                            <span>
                                <HiOutlineHeart className="h-5 w-5 text-pink-500" />
                            </span>
                            <span className="mt-0.5">
                                #{popularityNum}
                            </span>
                        </div>
                    </div>
                    <div className="text-[0.66rem] font-medium text-gray-500 pt-2.5">
                        <div className="text-[0.7rem] font-semibold text-gray-400">{anime.format} - {anime.type}</div>
                        <div className="truncate-2-lines">{truncatedDescription}</div>
                    </div>
                </div>
                <div 
                    className="flex flex-wrap justify-start gap-3 items-center text-center p-4 rounded-br"
                    style={{ backgroundColor }}
                >
                    {anime.genres.slice(0, 2).map((genre, index) => {
                        return (
                            <span className="text-[0.7rem] font-bold tracking-wide break-all whitespace-normal bg-blue-500 text-white rounded-xl px-[10px] py-[2px]" key={index}>
                            {genre.toLowerCase()}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}