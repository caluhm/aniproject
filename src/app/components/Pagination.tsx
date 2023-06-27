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
                    className={`rounded-full sm:w-10 sm:h-10 w-8 h-8 flex justify-center items-center ${prevPageColour} transition-colors ease-in-out duration-200`}
                    onClick={() => (prevPageRef.current && prevPageRef.current.disabled) ? null : handlePrevPage()}
                    ref={prevPageRef}
                >
                    <BiChevronLeft className='sm:w-7 sm:h-7 w-6 h-6'/>
                </button>
                <div className="rounded-full sm:w-10 sm:h-10 w-8 h-8 flex sm:text-lg text-base justify-center items-center text-neutral-100 bg-blue-500 transition-colors ease-in-out duration-200 cursor-pointer select-none">
                    {currentPage}
                </div>
                <button 
                    className={`rounded-full sm:w-10 sm:h-10 w-8 h-8 flex justify-center items-center ${nextPageColour} transition-colors ease-in-out duration-200`}
                    onClick={() => (nextPageRef.current && nextPageRef.current.disabled) ? null : handleNextPage()}
                    ref={nextPageRef}
                >
                    <BiChevronRight className='sm:w-7 sm:h-7 w-6 h-6'/>
                </button>
            </div>
        </div>
    )
}