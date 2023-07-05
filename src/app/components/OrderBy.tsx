'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OrderBy() {
  const router = useRouter();

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const currentSort = currentParams.get('sort');

    if (currentSort) {
        const select = document.querySelector('select') as HTMLSelectElement;
        select.value = currentSort;
    }
    }, []);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = event.target.value;
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('sort', selectedItem);

    const newSearchParams = currentParams.toString();
    const newPathname = `${window.location.pathname}?${newSearchParams}`;

    router.push(newPathname);
  };

  return (
    <select
      className="border-2 bg-[#1F232D] border-neutral-700 text-neutral-100 m-grid-sm:h-8 h-10 m-grid-sm:text-sm w-30 rounded-md focus:outline-none px-2"
      onChange={handleSelect} // Changed from onSelect to onChange
      defaultValue="POPULARITY_DESC"
    >
      <option value="TITLE_ROMAJI">Title</option>
      <option value="POPULARITY_DESC">Popularity</option>
      <option value="SCORE_DESC">Score</option>
      <option value="EPISODES_DESC">Episodes</option>
      <option value="START_DATE_DESC">Start Date</option>
      <option value="END_DATE_DESC">End Date</option>
      <option value="FAVOURITES_DESC">Favourites</option>
    </select>
  );
}


