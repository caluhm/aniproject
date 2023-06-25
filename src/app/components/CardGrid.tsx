import Card from "./Card";
import GridWrapper from "./GridWrapper";
import InnerGridWrapper from "./InnerGridWrapper";

type DataProps = {
    Page: {
        pageInfo: {
            total: number;
            currentPage: number;
            lastPage: number;
            hasNextPage: boolean;
            perPage: number;
        };
        media: {
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
        }[]; 
    };
};

export default function CardGrid({Page}: DataProps) {

    return (
        <GridWrapper>
          <div className="w-full flex justify-center">
            <InnerGridWrapper>
              {Page.media.map((anime: any, index: number) => (
                <Card anime={anime} id={index} key={anime.id} page={Page.pageInfo.currentPage}/>
              ))}
            </InnerGridWrapper>
          </div>
        </GridWrapper>
    )
}