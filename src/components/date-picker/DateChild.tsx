import React, { useEffect, useRef } from "react";
import Rectangle from "../../assets/rectangle.png";
import { setInitialX } from "../../store/datepicker";
import { useAppDispatch } from "../../store/hooks";

interface DateChildProps {
  date: number;
  day: string;
  selected: boolean;
  onSelect: (id: string) => void;
  id: string;
  today: boolean;
}

function DateChild({
  id,
  date,
  day,
  selected,
  onSelect,
  today,
}: DateChildProps) {
  const onClick = () => onSelect(id);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!ref.current) return;
    const x = ref.current.getClientRects()[0].x;
    dispatch(setInitialX(x));
  }, [dispatch]);

  return (
    <div
      {...(today ? { ref } : {})}
      className={`flex-1 flex flex-col px-5 h-[70px] items-center justify-center active:opacity-50 ${
        selected ? "text-sky" : "text-custom-gray-2"
      }`}
      onClick={onClick}
      style={
        selected
          ? {
              backgroundImage: `url(${Rectangle})`,
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundPositionX: "center",
            }
          : {}
      }
    >
      <div className="text-xs mb-1">{day}</div>
      <div className="text-lg font-bold">{date}</div>
    </div>
  );
}

export default DateChild;
