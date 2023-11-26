import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSLice from "./configSLice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
    config: configSLice,
  },
});

export default appStore;
