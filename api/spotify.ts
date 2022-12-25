import axios from 'axios';

let headers: any = {
  Accept: 'application/json',
};

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: headers
});

export const getSearchArtist = (artist: string) => {
  return api.get(`/search/artist?q=${artist}`);
};

// Get request for the suggestion overview.
export const getSuggestedArtists = () => {
  return api.get(`/search/artist?q=${''}`);
};