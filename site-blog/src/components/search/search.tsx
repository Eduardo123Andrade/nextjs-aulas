import { cn } from "@/lib/utils";
import { isStringEmpty } from "@/utils";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export const Search = () => {
  const router = useRouter();
  const query = router.query.q as string;

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router]
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    const config = {
      shallow: true,
      scroll: false,
    };

    if (isStringEmpty(newQuery)) {
      return router.push("/blog", undefined, config);
    }
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, config);
  };

  const className = cn(
    "text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300",
    query ? "text-blue-300" : ""
  );

  return (
    <form className="relative group" onSubmit={handleSearch}>
      <SearchIcon className={className} />
      <input
        type="text"
        placeholder="Buscar"
        className="h-10 w-72 bg-transparent border border-gray-400 pl-9 text-gray-100
        rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300
        focus-within:right-1 focus-within:ring-blue-300 placeholder:text-gray-300
        placeholder:text-body-sm"
        onChange={handleQueryChange}
      />
    </form>
  );
};
