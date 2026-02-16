import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import FilterButtons from './FilterButtons';

function App() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h1>StudySpots TO</h1>
        <p>Find the perfect study spot around UofT</p>
      </header>
      <main style={{ padding: '20px' }}>
        <FilterButtons 
          onFilterChange={handleFilterChange} 
          activeFilter={activeFilter} 
        />
        <Map activeFilter={activeFilter} />
      </main>
    </div>
  );
}

export default App;