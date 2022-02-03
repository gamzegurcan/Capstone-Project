import axios from "axios";

const API_KEY = "9ae3d76bbb563cc1912fdc33de7bafd3";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`)
export const fetchTrendingMovies = () => BASE_AXIOS.get(`/trending/all/day?api_key=${API_KEY}`)
export const fetchTrendDayMovies = (trend) => BASE_AXIOS.get(`/trending/all/${trend}?api_key=${API_KEY}`);
export const fetchSearchMovies = (search) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${search}`)
export const fetchPopularMovies = () => BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}`);
export const fetchTopRatedMovies = () => BASE_AXIOS.get(`/movie/top_rated?api_key=${API_KEY}`);
export const fetchDetailMovies = (movieId) => BASE_AXIOS.get(`/movie/${movieId}?api_key=${API_KEY}`)
export const fetchCast = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
export const fetchReviews = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
export const fetchRecommendationMovies = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/recommendations?api_key=${API_KEY}`)
export const fetchGenres = () => BASE_AXIOS.get(`/genre/movie/list?api_key=${API_KEY}`)
