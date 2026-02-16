"use client";

import { useState } from 'react';
import FilterButtons from "../components/FilterButtons";
import Map from "../components/map";

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="App">
      <header className="p-5 bg-gray-100">
        <h1 className="text-3xl font-bold">StudySpots TO</h1>
        <p className="text-gray-600">Find the perfect study spot around UofT</p>
      </header>
      <main className="p-5">
        <FilterButtons 
          onFilterChange={handleFilterChange} 
          activeFilter={activeFilter} 
        />
        <Map activeFilter={activeFilter} />
      </main>
    </div>
  );
}