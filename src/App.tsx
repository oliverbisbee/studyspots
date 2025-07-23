import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>StudySpots TO</h1>
        <p>Find the perfect study spot around UofT</p>
      </header>
      <main>
        <div id="map-container" style={{ height: '500px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Map will go here</p>
        </div>
      </main>
    </div>
  );
}

export default App;
