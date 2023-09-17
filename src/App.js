import React, {useState, useEffect} from 'react';

import {CM_TO_IN_CONVERSION_RATIO, SPECIES_CONFIG} from './config';
import {fetchSpeciesData} from './apiService';
import './App.scss';
import Species from './Species';

function App() {
  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    fetchSpeciesData().then(setSpeciesData);
  }, []);

  return (
    <div className="App">
      <h1>Empire Strikes Back - Species Listing</h1>
      <div className="App-species">
        {speciesData.map(
          ({
            name,
            classification,
            designation,
            average_height,
            films,
            language,
          }) => (
            <Species
              key={name}
              name={name}
              classification={classification}
              designation={designation}
              height={(average_height / CM_TO_IN_CONVERSION_RATIO).toFixed(2)}
              image={SPECIES_CONFIG[name]?.imageUrl || ''}
              numFilms={films.length}
              language={language}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
