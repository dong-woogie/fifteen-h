import React from "react";
import { ReactComponent as ArrowLeft } from "../../assets/group-24.svg";
import { ReactComponent as ArrowRight } from "../../assets/group-25.svg";

interface DatePickerMonthProps {
  onClickNext: () => void;
  onClickPrev: () => void;
  month: number;
}

function DatePickerMonth({
  onClickNext,
  onClickPrev,
  month,
}: DatePickerMonthProps) {
  return (
    <div className="flex space-x-2">
      <ArrowLeft
        className="cursor-pointer active:opacity-50"
        onClick={onClickPrev}
      />
      <span className="font-bold">{month + 1}월</span>
      <ArrowRight
        className="cursor-pointer active:opacity-50"
        onClick={onClickNext}
      />
    </div>
  );
}

export default DatePickerMonth;
