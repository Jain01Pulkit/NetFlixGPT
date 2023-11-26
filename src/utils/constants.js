export const MOVIE_API_KEY =process.env.REACT_APP_MOVIE_API_KEY;
export const MOVIE_ACCESS_TOKEN =
  process.env.REACT_APP_MOVIE_ACCESS_TOKEN;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
  },
};
  export const REACT_APP_FIREBASE_apiKey= process.env.REACT_APP_FIREBASE_apiKey;
  export const REACT_APP_FIREBASE_authDomain= process.env.REACT_APP_FIREBASE_authDomain;
  export const REACT_APP_FIREBASE_projectId= process.env.REACT_APP_FIREBASE_projectId;
  export const REACT_APP_FIREBASE_storageBucket= process.env.REACT_APP_FIREBASE_storageBucket;
  export const REACT_APP_FIREBASE_messagingSenderId= process.env.REACT_APP_FIREBASE_messagingSenderId;
  export const REACT_APP_FIREBASE_appId= process.env.REACT_APP_FIREBASE_appId;
  export const REACT_APP_FIREBASE_measurementId= process.env.REACT_APP_FIREBASE_measurementId;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
