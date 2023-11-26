import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await movieResult.json();
    dispatch(addPopularMovies(json?.results));
  };
};

export default usePopularMovies;
