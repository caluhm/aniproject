import { HiOutlineHeart } from "react-icons/hi";

type CardDetailsProps = {
    episodes: number | null;
    nextEpisode: number | null;
    timeUntilNextEpisode: string | null;
    format: string;
    type: string;
    popularity: number;
    description: string;
}

export default function CardDetails({ 
    episodes, 
    nextEpisode, 
    timeUntilNextEpisode, 
    format, 
    type, 
    popularity,
    description 
}: CardDetailsProps) {
    return (
        <div className="w-full text-white text-left p-4 overflow-hidden">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="text-[0.7rem] font-semibold text-gray-500">
                        {episodes && nextEpisode 
                            ? "Ep " + nextEpisode + " of " + episodes + " airing in" 
                            : "Ep 1 airing in"
                        }
                    </div>
                    <div className="text-base font-semibold text-gray-400">{timeUntilNextEpisode}</div>
                </div>
                <div className="flex flex-row items-start justify-center text-xs font-medium text-gray-400 gap-1.5">
                    <span>
                        <HiOutlineHeart className="h-5 w-5 text-pink-500" />
                    </span>
                    <span className="mt-0.5">
                        #{popularity}
                    </span>
                </div>
            </div>
            <div className="text-[0.66rem] font-medium text-gray-500 pt-2.5">
                <div className="text-[0.7rem] font-semibold text-gray-400">{format} - {type}</div>
                <div className="truncate-2-lines">{description}</div>
            </div>
        </div>
    )
}