import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/languageConstants";
import { openAiConfig } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

//////////////////////////////ShutterStock
const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies,comma separated like the example result given ahead. Example Result: Don, Chennai Express, Forest Gump, Stranger Things";
    const gptResults = await openAiConfig.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      alert("No Results");
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const data = await Promise.all(
      gptMovies?.map((movie) => fetchMovies(movie))
    );
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: data }));
  };

  const fetchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult-false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={language[lang].gptSearch}
          className="p-4 m-4 col-span-9"
        />

        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
