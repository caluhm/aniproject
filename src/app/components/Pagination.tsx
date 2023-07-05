'use client'

import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from 'react';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Pagination({
    currentPage, 
    hasNextPage, 
}: {currentPage: number, hasNextPage: boolean}
) {
    const router = useRouter();

    const [prevPageColour, setPrevPageColour] = useState<string>("text-neutral-100 hover:bg-blue-500");
    const [nextPageColour, setNextPageColour] = useState<string>("text-neutral-100 hover:bg-blue-500");

    const prevPageRef = useRef<HTMLButtonElement>(null);
    const nextPageRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setPrevPageColour(currentPage === 1 ? "text-neutral-500 cursor-not-allowed" : "text-neutral-100 hover:bg-blue-500");
        setNextPageColour(!hasNextPage ? "text-neutral-500 cursor-not-allowed" : "text-neutral-100 hover:bg-blue-500");
    
        if (prevPageRef.current) {
          prevPageRef.current.disabled = currentPage === 1;
        }
    
        if (nextPageRef.current) {
          nextPageRef.current.disabled = !hasNextPage;
        }
    }, [currentPage, hasNextPage]);

    const handlePage = (page: number) => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set('page', page.toString());

        const newSearchParams = currentParams.toString();
        const newPathname = `${window.location.pathname}?${newSearchParams}`;

        router.push(newPathname);
    }

    return (
        <div className="m-grid-sm:h-8 h-10 flex flex-row rounded-md border-2 border-neutral-700 overflow-hidden">
           
                <button 
                    className={`flex justify-center items-center bg-[#1F232D] border-neutral-700 px-1 m-grid-sm:px-0.5 ${prevPageColour} transition-colors ease-in-out duration-200`}
                    onClick={() => (prevPageRef.current && prevPageRef.current.disabled) ? null : handlePage(currentPage - 1)}
                    ref={prevPageRef}    
                >
                    <BiChevronLeft className='m-grid-sm:w-6 m-grid-sm:h-6 w-7 h-7'/>
                </button>
                <div className="flex justify-center items-center border-x-2 text-neutral-100 bg-[#1F232D] border-neutral-700 w-10 m-grid-sm:w-9">
                    {currentPage}
                </div>
                <button 
                    className={`flex justify-center items-center bg-[#1F232D] px-1 m-grid-sm:px-0.5 ${nextPageColour} transition-colors ease-in-out duration-200`}
                    onClick={() => (nextPageRef.current && nextPageRef.current.disabled) ? null : handlePage(currentPage + 1)}
                    ref={nextPageRef}    
                >
                    <BiChevronRight className='m-grid-sm:w-6 m-grid-sm:h-6 w-7 h-7'/>
                </button>
        </div>
    )
}