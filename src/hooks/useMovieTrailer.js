import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieTrailer();
  }, []);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results?.find((video) => video.type == "Trailer");
    const result = trailer?.length > 0 ? trailer : json?.results[0];
    dispatch(addTrailerVideo(result));
  };
};

export default useMovieTrailer;
