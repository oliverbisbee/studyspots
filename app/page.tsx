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

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        Developed by{' '}
        <a 
          href="https://github.com/oliverbisbee" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 font-medium underline"
        >
          Oliver Bisbee
        </a>
      </footer>
      
    </div>
  );
}