import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6134c0cbc147d9cd4205b14b99890083";

// https://api.themoviedb.org/3/search/movie?api_key=6134c0cbc147d9cd4205b14b99890083&page=1&include_adult=false&query=skull

const fetchPopularMovies = () => {
  return axios
    .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`)
    .then((resp) => resp.data.results);
};

const fetchMoviesByRequest = ({ page = 1, searchQuery = "" }) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&include_adult=false&query=${searchQuery}`
    )
    .then((resp) => resp.data.results);
};

const fetchMovieDetailedInfo = (id) => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,images,reviews`
    )
    .then((resp) => resp.data);
};

export { fetchPopularMovies, fetchMoviesByRequest, fetchMovieDetailedInfo };
