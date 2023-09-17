const convertToHttps = url => url.replace('http:', 'https:');

export const fetchFromAPI = url =>
  fetch(convertToHttps(url)).then(response => response.json());