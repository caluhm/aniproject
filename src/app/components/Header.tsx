import Pagination from "./Pagination";

export default function Header({
    page, 
    hasNextPage,
    season,
    seasonYear
}: {page: number, hasNextPage: boolean, season: string, seasonYear: number}) {
    return (
        <div className="w-full bg-[#2B2D42] h-[25vh] pb-12 -mb-14 rg:-mb-8 text-neutral-100 flex flex-col items-center sm:justify-between justify-center gap-5">
            <h1 className="sm:text-xl text-lg font-bold uppercase text-center sm:pt-10 pt-8"><span className="text-yellow-200">{season}</span> <span className="text-blue-400">{seasonYear}</span> Anime Season</h1>
            <div className="flex flex-row justify-center items-center gap-5 sm:pb-12 pb-10">
                <Pagination currentPage={page} hasNextPage={hasNextPage}/>
            </div>
        </div>
    )
}