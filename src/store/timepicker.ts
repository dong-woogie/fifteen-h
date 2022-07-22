import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITime {
  minute: number;
  hour: number;
  m: "PM" | "AM";
}

interface TimePickerState {
  mode: "start" | "end";
  start: ITime;
  end: ITime;
}

const initialState: TimePickerState = {
  mode: "start",
  start: {
    hour: 8,
    minute: 0,
    m: "AM",
  },
  end: {
    hour: 11,
    minute: 0,
    m: "PM",
  },
};

const timepickerSlice = createSlice({
  name: "timepicker",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<"start" | "end">) => {
      state.mode = action.payload;
    },
    changeTime: (
      state,
      action: PayloadAction<{ start: ITime; end: ITime }>
    ) => {
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
  },
});

export const { changeMode, changeTime } = timepickerSlice.actions;

export default timepickerSlice.reducer;
