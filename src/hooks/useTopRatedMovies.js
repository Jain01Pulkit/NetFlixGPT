import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRated);
  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
  const getTopRatedMovies = async () => {
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await movieResult.json();
    dispatch(addTopRatedMovies(json?.results));
  };
};

export default useTopRatedMovies;
