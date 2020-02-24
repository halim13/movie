import axios from 'axios';
// import config from '../../../public/config/config';
const API_URL = 'https://api.jikan.moe/v3';

export const fetchDataAnimes = (year, season) => ({
  type: 'FETCH_DATA_ANIMES',
  payload: axios.get(`${API_URL}/season/${year}/${season}`),
});
export const searchDataAnimes = (search, genre, season, year, status) => ({
  type: 'SEARCH_DATA_ANIMES',
  payload: axios.get(
    `${API_URL}/search/q=${search}&genre=${genre}&season=${season}&year=${year}&status=${status}`,
  ),
});

export const loadMore = (search, genre, season, year, status, page) => ({
  type: 'FETCH_LOAD_MORE_DATA_ANIMES',
  payload: axios.get(
    `${API_URL}/search/q=${search}&genre=${genre}&season=${season}&year=${year}&status=${status}$page=${page}`,
  ),
});

export const fetchSingleData = id => ({
  type: 'FETCH_SINGLE_DATA_ANIME',
  payload: axios.get(`${API_URL}/anime/${id}`),
});
export const clearSingleData = () => ({
  type: 'CLEAR_SINGLE_ANIME',
  payload: '',
});
