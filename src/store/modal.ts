import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  timepicker: boolean;
}

const initialState: ModalState = {
  timepicker: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    timepickerModal: (state, action: PayloadAction<boolean>) => {
      state.timepicker = action.payload;
    },
  },
});

export const { timepickerModal } = modalSlice.actions;

export default modalSlice.reducer;
