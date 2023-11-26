import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPLayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await movieResult.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPLayingMovies;
