import axios from 'axios';

const API_KEY = 'd7d9ab2863712e08ff43c2cdf6d8066a';
const URL = 'https://api.themoviedb.org/3';

const defaultParams = {
  api_key: API_KEY,
};

const moviesApiClient = axios.create({
  baseURL: URL,
  params: defaultParams,
});

export const getPopularMovies = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/day');
  return data;
};
export const getSerchMovies = async query => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params: { query },
  });
  return data;
};
export const getDetailsMovies = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};
export const getCastMovies = async id => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};
export const getRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data;
};

export const IMG_URL = 'https://image.tmdb.org/t/p/original';
