import CoverImageCard from "./CoverImageCard";
import CardGenres from "./CardGenres";
import CardDetails from "./CardDetails";

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
    const description = anime.description ? anime.description.replace(/<\/?i>/g, '').replace(/<br\s?\/?>/g, '') : "No description available."
    let truncatedDescription = description;

    const popularityNum = page === 1 ? id + 1 : id + 1 + (page - 1) * 15;

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
            <CoverImageCard anime={anime} />
            <div className="flex flex-col justify-between w-full h-full">
                <CardDetails 
                    episodes={anime.episodes} 
                    nextEpisode={anime.nextAiringEpisode ? anime.nextAiringEpisode.episode : null} 
                    timeUntilNextEpisode={timeString} 
                    format={anime.format} 
                    type={anime.type} 
                    popularity={popularityNum} 
                    description={truncatedDescription} 
                />
                <CardGenres genres={anime.genres} />
            </div>
        </div>
    )
}