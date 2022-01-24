import axios from "axios";

const API_KEY = "9ae3d76bbb563cc1912fdc33de7bafd3";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`)
export const fetchTrendingMovies = () => BASE_AXIOS.get(`/trending/all/day?api_key=${API_KEY}`)
export const fetchSearchMovies = (search) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${search}`)
