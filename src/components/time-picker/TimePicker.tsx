import React from "react";
import { ITime } from "../../store/timepicker";
import { displayTimeNumber } from "../../util";
import TimePickerSlider from "./TimePickerSlider";

interface TimePickerProps {
  onChange: (
    property: "minute" | "hour" | "m"
  ) => (currentSlide: number) => void;
  times: ITime;
}

function TimePicker({ onChange, times }: TimePickerProps) {
  const minutes = Array.from({ length: 12 }).map((_, index) => index * 5);
  const hours = Array.from({ length: 12 }).map((_, index) => index + 1);
  const ampm = ["AM", "PM", "AM", "PM"];

  return (
    <div className="px-5 py-6 flex justify-around items-end">
      <div className="h-24 overflow-hidden cursor-pointer">
        <TimePickerSlider
          settings={{ slidesToShow: 2, afterChange: onChange("m") }}
        >
          {ampm.map((v, i) => (
            <div className="py-3 px-5 border-t" key={i}>
              {v}
            </div>
          ))}
        </TimePickerSlider>
      </div>

      <div className="h-36 overflow-hidden cursor-pointer">
        <TimePickerSlider
          settings={{
            afterChange: onChange("hour"),
            initialSlide: times.hour - 2,
          }}
        >
          {hours.map((v) => (
            <div className="py-3 px-5 border-b" key={v}>
              {displayTimeNumber(v)}
            </div>
          ))}
        </TimePickerSlider>
      </div>

      <div className="h-36 overflow-hidden cursor-pointer">
        <TimePickerSlider
          settings={{
            afterChange: onChange("minute"),
            initialSlide: times.minute / 5 - 1,
          }}
        >
          {minutes.map((v) => (
            <div className="py-3 px-5 border-b " key={v}>
              {displayTimeNumber(v)}
            </div>
          ))}
        </TimePickerSlider>
      </div>
    </div>
  );
}

export default TimePicker;
