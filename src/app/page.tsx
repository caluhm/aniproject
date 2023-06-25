'use client'

import { useState, useEffect } from "react";

import CardGrid from "./components/CardGrid";
import getServerSideData  from "./api/getServerSideData";
import CardGridLoading from "./components/CardGridLoading";

import calcSeason from "./lib/calcSeason";
import Header from "./components/Header";

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

export const revalidate = 30 // revalidate this page every 30 seconds

export default function Home() {
  const season = calcSeason(new Date().getMonth());
  const seasonYear = new Date().getFullYear();

  const [page, setPage] = useState(1); // State variable for current page
  const [lastPage, setLastPage] = useState(1); // State variable for last page
  const [hasNextPage, setHasNextPage] = useState(true); // State variable for whether there is a next page
  const [total, setTotal] = useState(1); // State variable for total number of anime

  const [data, setData] = useState<DataProps | null>(null); // State variable for API data
  
  const nextPage = async () => {
    setPage((prevPage) => prevPage + 1); // Increment the page state
    const newData = await getServerSideData(season!, seasonYear, page + 1); // Fetch data for the next page
    setData(newData); // Update the data state
    setHasNextPage(newData.data.Page.pageInfo.hasNextPage);
    console.log(newData.data.Page.pageInfo.hasNextPage)
  };

  const prevPage = async () => {
    setPage((prevPage) => prevPage -1); // Increment the page state
    const newData = await getServerSideData(season!, seasonYear, page - 1); // Fetch data for the next page
    setData(newData); // Update the data state
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await getServerSideData(season!, seasonYear, page);
      setData(initialData);

      setLastPage(initialData.data.Page.pageInfo.lastPage);
      setHasNextPage(initialData.data.Page.pageInfo.hasNextPage);
      setTotal(initialData.data.Page.pageInfo.total);
      setPage(initialData.data.Page.pageInfo.currentPage);
    };
  
    fetchData();
  }, [season, seasonYear, page]);

  return (
    <main className="min-h-screen bg-[#13171D]">
      <Header 
        page={page} 
        hasNextPage={hasNextPage}
        handleNextPage={nextPage} 
        handlePrevPage={prevPage} 
        season={season!}
        seasonYear={seasonYear}
      />
      {data !== null && (
        <CardGrid 
          Page={data.data.Page} 
        />
      )}
    </main>
  )
}
