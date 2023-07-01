import Image from "next/image";
import Link from "next/link";

type CoverImageCardProps = {
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
    }
};

export default function CoverImageCard({ anime }: CoverImageCardProps) {
    return (
        <div className="relative h-full min-w-[185px] max-w-[185px] card-md:max-w-[175px] card-md:min-w-[175px] card-sm:max-w-[150px card-sm:min-w-[150px] overflow-y-hidden rounded-tl rounded-bl">
            <Image src={anime.coverImage.extraLarge} width={300} height={600} alt={anime.title.romaji} loading='lazy' className="h-full w-full object-cover object-center"/>
                <div 
                    className='flex flex-col justify-center absolute bottom-0 left-0 w-full min-h-[30%] p-2.5 rounded-bl text-white'
                    style={{ backgroundColor: 'rgba(19, 23, 29, 0.70)' }}
                >
                    <Link href={`/anime/${anime.id}`}>
                        <p className="text-[0.83rem] font-semibold">{anime.title.english ? anime.title.english : anime.title.romaji}</p>
                    </Link>
                    <Link href={`/studio/${anime.studios.nodes[0]?.id}`}>
                        <p className="text-[0.7rem] font-medium pt-[5px] text-yellow-200 tracking-wide">{anime.studios.nodes[0]?.name}</p>
                    </Link>
                </div>
        </div>
    )
}