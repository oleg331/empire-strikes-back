import {API_URL} from './config';
import {fetchFromAPI} from './utils';

export const fetchSpeciesData = async () => {
  const filmData = await fetchFromAPI(API_URL);
  const speciesPromises = filmData.species.map(fetchFromAPI);

  return Promise.all(speciesPromises);
};