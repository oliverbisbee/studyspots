import React from 'react';
import './App.css';
import Map from './map';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h1>StudySpots TO</h1>
        <p>Find the perfect study spot around UofT</p>
      </header>
      <main style={{ padding: '20px' }}>
        <Map />
      </main>
    </div>
  );
}

export default App;