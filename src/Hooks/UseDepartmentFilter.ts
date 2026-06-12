import { useState } from "react";
import { AllSingleCard } from "../Pages/Auth/AllSingleCard";

export function useDepartmentFilter() {
  const [search, setSearch] = useState("");

  const query = search.toLowerCase();

  const filteredCards = AllSingleCard.filter((item) => {
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.specialists.toLowerCase().includes(query)
    );
  });

  return {
    search,
    setSearch,
    filteredCards,
  };
}