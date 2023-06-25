import { useRef, useEffect, useState } from 'react';

import { BiFirstPage, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Pagination({
    currentPage, 
    hasNextPage, 
    handlePrevPage, 
    handleNextPage,
}: {currentPage: number, hasNextPage: boolean, handlePrevPage: () => void, handleNextPage: () => void}
) {
    const [prevPageColour, setPrevPageColour] = useState<string>("text-neutral-100 hover:bg-blue-500");
    const [nextPageColour, setNextPageColour] = useState<string>("text-neutral-100 hover:bg-blue-500");

    const prevPageRef = useRef<HTMLButtonElement>(null);
    const nextPageRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (currentPage === 1) {
          if (prevPageRef.current) {
            prevPageRef.current.disabled = true;
          }
          setPrevPageColour("text-neutral-500 cursor-not-allowed");
        } else if (currentPage > 1) {
            if (prevPageRef.current) {
                prevPageRef.current.disabled = false;
            }
            setPrevPageColour("text-neutral-100 hover:bg-blue-500");
        }
        if (!hasNextPage) {
          if (nextPageRef.current) {
            nextPageRef.current.disabled = true;
          }
          setNextPageColour("text-neutral-500 cursor-not-allowed");
        } else if (hasNextPage) {
            if (nextPageRef.current) {
                nextPageRef.current.disabled = false;
            }
            setNextPageColour("text-neutral-100 hover:bg-blue-500");
        }
    }, [currentPage, hasNextPage]);

    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-5">
                <button 
                    className={`rounded-full w-10 h-10 flex justify-center items-center ${prevPageColour} transition-colors ease-in-out duration-200`}
                    onClick={() => (prevPageRef.current && prevPageRef.current.disabled) ? null : handlePrevPage()}
                    ref={prevPageRef}
                >
                    <BiChevronLeft className='w-7 h-7'/>
                </button>
                <div className="rounded-full w-10 h-10 flex text-lg justify-center items-center text-neutral-100 bg-blue-500 transition-colors ease-in-out duration-200 cursor-pointer select-none">
                    {currentPage}
                </div>
                <button 
                    className={`rounded-full w-10 h-10 flex justify-center items-center ${nextPageColour} transition-colors ease-in-out duration-200`}
                    onClick={() => (nextPageRef.current && nextPageRef.current.disabled) ? null : handleNextPage()}
                    ref={nextPageRef}
                >
                    <BiChevronRight className='w-7 h-7'/>
                </button>
            </div>
        </div>
    )
}