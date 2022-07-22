import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { timepickerModal } from "../../store/modal";
import { changeMode, changeTime } from "../../store/timepicker";
import ModeButton from "./ModeButton";
import TimePicker from "./TimePicker";

function TimePickerModal() {
  const modal = useAppSelector((state) => state.modal.timepicker);
  const { mode, start, end } = useAppSelector((state) => state.timepicker);

  const [startTimes, setStartTimes] = useState(start);
  const [endTimes, setEndTimes] = useState(end);

  const dispatch = useAppDispatch();

  const onClickStartButton = () => {
    dispatch(changeMode("start"));
  };
  const onClickEndButton = () => {
    dispatch(changeMode("end"));
  };

  const onChangeTimes =
    (property: "minute" | "hour" | "m") => (currentSlide: number) => {
      let value: number | string;

      if (property === "minute") {
        value = (currentSlide + 1) * 5;
        if (value === 60) value = 0;
      } else if (property === "hour") {
        value = currentSlide + 2;
        if (value > 12) value = value % 12;
      } else {
        value = currentSlide % 2 === 0 ? "AM" : "PM";
      }

      if (mode === "start") {
        setStartTimes({
          ...startTimes,
          [property]: value,
        });
      } else {
        setEndTimes({
          ...endTimes,
          [property]: value,
        });
      }
    };

  const onComplete = () => {
    // dispatch change time
    dispatch(changeTime({ start: startTimes, end: endTimes }));
    dispatch(timepickerModal(false));
  };
  const onCancel = () => {
    // reset inital state
    setStartTimes({ ...start });
    setEndTimes({ ...end });
    dispatch(timepickerModal(false));
  };

  if (!modal) return null;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-overlay">
      <div className="flex flex-col w-full h-full">
        <div className="time-picker-wrapper">
          <h4 className="pt-[35px] pb-[26px] text-center font-bold text-base tracking-[-.2px]">
            운영 시간 설정
          </h4>

          <div className="px-5 flex">
            <ModeButton
              focus={mode === "start"}
              onClick={onClickStartButton}
              text="운영시작"
            />
            <ModeButton
              focus={mode === "end"}
              onClick={onClickEndButton}
              text="운영종료"
            />
          </div>

          {mode === "start" && (
            <TimePicker onChange={onChangeTimes} times={startTimes} />
          )}
          {mode === "end" && (
            <TimePicker onChange={onChangeTimes} times={endTimes} />
          )}

          <div className="flex flex-col px-5">
            <button
              onClick={onComplete}
              className="text-center h-12 bg-sky text-white rounded active:bg-opacity-80"
            >
              확인
            </button>
            <button
              onClick={onCancel}
              className="mt-[10px] text-center h-12 border border-[#8b8b91] rounded active:bg-gray-50"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimePickerModal;
