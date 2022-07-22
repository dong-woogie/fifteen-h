import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface DatePickerState {
  initialX: number;
}

const initialState: DatePickerState = {
  initialX: 0,
};

const datepickerSlide = createSlice({
  name: "datepicker",
  initialState,
  reducers: {
    setInitialX: (state, action: PayloadAction<number>) => {
      state.initialX = action.payload;
    },
  },
});

export const { setInitialX } = datepickerSlide.actions;

export default datepickerSlide.reducer;
