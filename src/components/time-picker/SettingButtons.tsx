import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { timepickerModal } from "../../store/modal";
import { changeMode } from "../../store/timepicker";
import { displayTimeNumber } from "../../util";

function SettingButtons() {
  const { start, end } = useAppSelector((state) => state.timepicker);
  const dispatch = useAppDispatch();
  const onClickStartButton = () => {
    dispatch(timepickerModal(true));
    dispatch(changeMode("start"));
  };
  const onClickEndButton = () => {
    dispatch(timepickerModal(true));
    dispatch(changeMode("end"));
  };
  return (
    <div className="px-5 py-2 flex items-center">
      <button
        onClick={onClickStartButton}
        className="time-picker-setting-button flex-1"
      >
        {start.m} {displayTimeNumber(start.hour)}:
        {displayTimeNumber(start.minute)}
      </button>
      <span className="px-2">-</span>
      <button
        onClick={onClickEndButton}
        className="time-picker-setting-button flex-1"
      >
        {end.m} {displayTimeNumber(end.hour)}:{displayTimeNumber(end.minute)}
      </button>
    </div>
  );
}

export default SettingButtons;
