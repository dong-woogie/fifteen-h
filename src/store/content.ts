import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ContentType =
  | "inputFile"
  | "accordian"
  | "timePicker"
  | "datepicker";

export interface ContentState {
  content: ContentType;
}

const initialState: ContentState = {
  content: "inputFile",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeContent: (state, action: PayloadAction<ContentType>) => {
      state.content = action.payload;
    },
  },
});

export const { changeContent } = contentSlice.actions;

export default contentSlice.reducer;
