"use client";
import React, { useState, useEffect } from "react";
import { exploreItems  } from "@/constant";
import ExploreItem from "@/components/explore/ExploreItem";
import MultiSelectDropdown from "@/components/explore/MultiSelectDropdown";

const ExplorePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (selectedOptions: string[]) => {
    setSelectedFilters(selectedOptions);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const filteredItems = exploreItems.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <section className="relative py-24 md:py-28 lg:py-30">
      <div className="container mx-auto px-4 mb-10">
        <img
          src="/images/Banner-Buzzify.png"
          alt="Explore Banner"
          className="w-full rounded-lg"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div className="relative w-1/2 max-w-md">
            <input
              type="text"
              placeholder="Search profiles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-3 px-4 rounded-lg bg-s5 text-white focus:outline-none focus:ring-2 focus:ring-s5 transition duration-300"
            />
          </div>

          <div className="relative flex flex-row gap-3">
            <MultiSelectDropdown
              options={["Followers > 1k", "Popular", "Recently Added"]}
              selected={selectedFilters}
              onChange={handleFilterChange}
              className="text-white bg-s1 border-s5"
            />
            <MultiSelectDropdown
              options={[
                "Instagram",
                "Twitter",
                "Youtube",
                "Twitch",
                "Facebook",
                "Farcaster",
              ]}
              selected={selectedFilters}
              onChange={handleFilterChange}
              className="text-white bg-s1 border-s5"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-5">Top Creators</h1>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <ExploreItem key={item.id} item={item} />
            ))}
          </div>
        </div>

      


      </div>
    </section>
  );
};

export default ExplorePage;
