import OrderBy from "./OrderBy";
import Pagination from "./Pagination";
import Search from "./Search";

export default function Header({
    page, 
    hasNextPage,
    season,
    seasonYear
}: {page: number, hasNextPage: boolean, season: string, seasonYear: number}) {
    return (
        <div className="w-full bg-[#2B2D42] h-[25vh] pb-12 -mb-14 rg:-mb-8 text-neutral-100 flex flex-col items-center justify-center gap-6 rg:justify-start rg:pt-4">
            <h1 className="sm:text-xl text-lg font-bold uppercase text-center">
                <span className="text-yellow-200">{season}</span> <span className="text-blue-400">{seasonYear} </span>Anime Season
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2.5 px-[10px]">
                <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2.5">
                    <Search />
                    <OrderBy />
                </div>
                <Pagination currentPage={page} hasNextPage={hasNextPage} />
            </div>
        </div>
    )
}