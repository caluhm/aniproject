'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Search() {
    const router = useRouter();

    useEffect(() => {
        const currentParams = new URLSearchParams(window.location.search);
        const currentSearch = currentParams.get('search');

        if (currentSearch) {
            const input = document.querySelector('input') as HTMLInputElement;
            input.value = currentSearch;
        }
    }, []);

    const handleSearch = () => {
        const input = document.querySelector('input') as HTMLInputElement;
        const search = input.value.trim();
      
        if (search === '') {
          const newPathname = `${window.location.pathname}`;
          history.replaceState(null, '', newPathname); // Update the URL
      
          // Trigger page reload to reflect the changes
          window.location.reload();
        } else {
          const newSearchParams = new URLSearchParams();
          newSearchParams.set('search', search);
      
          const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
          router.push(newPathname);
        }
    };
     
    return (
        <input 
            placeholder="Search..." 
            className="rounded-md border-2 bg-[#1F232D] border-neutral-700 text-neutral-100 m-grid-sm:h-8 h-10 px-2.5 m-grid-sm:w-48 w-60 m-grid-sm:text-sm focus:outline-none" 
            type="text" 
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  // Perform the action you want when Enter is pressed
                  // For example, you can call a search function or submit a form
                  handleSearch();
                }
            }}
        />
    )
}