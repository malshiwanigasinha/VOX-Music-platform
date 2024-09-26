import React, { useState } from "react";
import { browse } from "../assets/data/data";
import { Card_lg } from "../common/Card_lg";

export const Browse = () => {
  // State to hold the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the songs based on the search input
  const filteredBrowse = browse.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="treading hero mt-8 sm:mt-20">
        <h1 className="text-5xl font-bold mb-5 text-primary">Browse</h1>
        
        {/* Search Bar (after the title) */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search for songs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded-lg w-full md:w-1/2"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1">
          {filteredBrowse.map((item, i) => (
            <div className="box card hero" key={i}>
              <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
