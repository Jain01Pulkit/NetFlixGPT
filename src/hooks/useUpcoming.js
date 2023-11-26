import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcoming);

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
  const getUpcomingMovies = async () => {
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await movieResult.json();
    dispatch(addUpcomingMovies(json?.results));
  };
};

export default useUpcomingMovies;
