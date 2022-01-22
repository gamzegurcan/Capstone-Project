import axios from "axios";
const API_KEY = "9ae3d76bbb563cc1912fdc33de7bafd3";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`)


