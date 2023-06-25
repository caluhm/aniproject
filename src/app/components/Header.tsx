import Pagination from "./Pagination";

export default function Header({
    page, 
    hasNextPage,
    handleNextPage, 
    handlePrevPage, 
    season,
    seasonYear
}: {page: number, hasNextPage: boolean, handleNextPage: () => void, handlePrevPage: () => void, season: string, seasonYear: number}) {
    return (
        <div className="w-full bg-[#2B2D42] h-[25vh] pb-12 -mb-14 text-neutral-100 flex flex-col items-center justify-between">
            <h1 className="text-xl font-bold uppercase text-center pt-10"><span className="text-yellow-200">{season}</span> <span className="text-blue-400">{seasonYear}</span> Anime Season</h1>
            <div className="flex flex-row justify-center items-center gap-5 mr-10 pb-12">
                <Pagination currentPage={page} hasNextPage={hasNextPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
            </div>
        </div>
    )
}