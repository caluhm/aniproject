import getServerSideData  from "./api/getServerSideData";

import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

import calcSeason from "./lib/calcSeason";

type DataProps = {
  data: {
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
};

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0

export default async function Home({searchParams: { page, search, sort }}: {searchParams: { page: number, search: string, sort: string }}) {
  const season = calcSeason(new Date().getMonth());
  const seasonYear = new Date().getFullYear();
  const data = await getServerSideData(season!, seasonYear, page, search, sort) as DataProps;

  return (
    <main className="min-h-screen bg-[#13171D] pb-14 rg:pb-8">
      <span className="fixed blur-[200px] w-[600px] h-[600px] rg:h-[400px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl to-blue-400/20 from-indigo-600/20"></span>
      <Header 
        page={data.data.Page.pageInfo.currentPage} 
        hasNextPage={data.data.Page.pageInfo.hasNextPage}
        season={season!}
        seasonYear={seasonYear}
      />
      <CardGrid 
        Page={data.data.Page} 
      />
    </main>
  )
}
