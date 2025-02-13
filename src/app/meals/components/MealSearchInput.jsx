"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const MealSearchInput = () => {
//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const searchQuery = {search}
    const urlQueryParam = new URLSearchParams(searchQuery) 
    const url = `${pathname}?${urlQueryParam}`
    router.push(url)
  }, [search]);

  return (
    <div>
      <div>
        <input
          className="text-black border p-2"
          value={search}
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MealSearchInput;
