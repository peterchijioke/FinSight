import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slice/AppSlice";

export const store = configureStore({
  reducer: {
    appReducer: AppSlice,
  },
});
