import { configureStore } from "@reduxjs/toolkit";
import content from "./content";
import datepicker from "./datepicker";
import modal from "./modal";
import timepicker from "./timepicker";

const store = configureStore({
  reducer: {
    modal,
    content,
    timepicker,
    datepicker,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
