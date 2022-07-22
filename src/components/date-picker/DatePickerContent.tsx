import React, { useMemo, useState } from "react";
import { day_ko, getDateId } from "../../util";
import HorizontalSlide from "../HorizontalSlide";
import DateChild from "./DateChild";
import DatePickerMonth from "./DatePickerMonth";

interface DatePickerContentProps {}

function DatePickerContent(props: DatePickerContentProps) {
  const { date, year, month } = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    return { date: today, month, day, year };
  }, []);
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);
  const [selectedId, setSelectedId] = useState(getDateId(year, month, date));

  const dateList = useMemo(() => {
    const lastDate = new Date(currentYear, currentMonth, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const today = getDateId(year, month, date);
    return Array.from({ length: lastDate }).map((v, i) => ({
      day: day_ko[(firstDay + i) % 7],
      date: i + 1,
      id: getDateId(currentYear, currentMonth, i + 1),
      today: today === getDateId(currentYear, currentMonth, i + 1),
    }));
  }, [currentMonth, currentYear, date, month, year]);

  const onClickNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
      setSelectedId(getDateId(currentYear + 1, 1, 1));
    } else {
      setCurrentMonth(currentMonth + 1);
      setSelectedId(getDateId(currentYear, currentMonth + 1, 1));
    }
  };

  const onClickPrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
      setSelectedId(getDateId(currentYear - 1, 12, 1));
    } else {
      setCurrentMonth(currentMonth - 1);
      setSelectedId(getDateId(currentYear, currentMonth - 1, 1));
    }
  };

  const onSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="py-2">
      <h3 className="content-title">날짜 선택</h3>
      <div className="flex justify-between px-5 py-3">
        <h4 className="font-bold text-base">날짜선택</h4>
        <DatePickerMonth
          month={currentMonth}
          onClickNext={onClickNextMonth}
          onClickPrev={onClickPrevMonth}
        />
      </div>

      <div className="overflow-scroll">
        <HorizontalSlide month={currentMonth}>
          {dateList.map((date) => (
            <DateChild
              key={date.id}
              id={date.id}
              date={date.date}
              day={date.day}
              today={date.today}
              onSelect={onSelect}
              selected={selectedId === date.id}
            />
          ))}
        </HorizontalSlide>
      </div>

      <div className="bg-custom-gray-3 mt-5 py-1" />
    </div>
  );
}

export default DatePickerContent;
