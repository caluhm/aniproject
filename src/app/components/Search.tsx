'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const currentSearch = currentParams.get("search");

    if (currentSearch) {
      setSearchValue(currentSearch);
    }
  }, []);

  let debounceTimeout: string | number | NodeJS.Timeout | undefined;

  const handleSearch = (value: string) => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      const search = value.trim();

      if (search === "") {
        const newPathname = `${window.location.pathname}`;
        history.replaceState(null, "", newPathname);
        window.location.reload();
      } else {
        const newSearchParams = new URLSearchParams();
        newSearchParams.set("search", search);
        const newPathname = `${
          window.location.pathname
        }?${newSearchParams.toString()}`;
        router.push(newPathname);
      }
    }, 500); // Adjust the debounce delay here
  };

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  return (
    <input
      placeholder="Search..."
      className="rounded-md border-2 bg-[#1F232D] border-neutral-700 text-neutral-100 m-grid-sm:h-8 h-10 px-2.5 m-grid-sm:w-48 w-60 m-grid-sm:text-sm focus:outline-none"
      type="text"
      value={searchValue}
      onChange={handleInputChange}
    />
  );
}
