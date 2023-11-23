export const MOVIE_API_KEY = "2764a702fd437a81b7c6e10b5f219add";
export const MOVIE_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzY0YTcwMmZkNDM3YTgxYjdjNmUxMGI1ZjIxOWFkZCIsInN1YiI6IjY1NTVhNDBhNTM4NjZlMDBjNWIxYzJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxDcskAO7zf_YT6gkKlXTSNDazbxgWSDOnDB981QtMk";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
