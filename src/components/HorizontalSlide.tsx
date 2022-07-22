import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../store/hooks";

interface HorizontalSlideProps {
  children: React.ReactNode;
  month: number;
}

function HorizontalSlide({ children, month }: HorizontalSlideProps) {
  const [horizontal, setHorizontal] = useState({
    isDragging: false,
    originalX: 0,
    scrollLeft: 0,
  });
  const initialX = useAppSelector((state) => state.datepicker.initialX);
  const containerRef = useRef<HTMLDivElement>(null);

  const stopDrag = () => {
    setHorizontal({
      ...horizontal,
      isDragging: false,
    });
  };
  const onMouseDown = (e: MouseEvent) => {
    if (!containerRef.current) return;
    setHorizontal({
      ...horizontal,
      originalX: e.clientX,
      scrollLeft: containerRef.current.scrollLeft,
      isDragging: true,
    });
  };
  const onMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    if (!horizontal.isDragging) return;

    const scrollLeft = horizontal.scrollLeft + horizontal.originalX - e.clientX;

    if (scrollLeft < 0) {
      containerRef.current.scrollLeft = 0;
    } else if (scrollLeft > containerRef.current.scrollWidth) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    } else {
      containerRef.current.scrollLeft = scrollLeft;
    }
  };
  const onMouseLeave = () => {
    stopDrag();
  };
  const onMouseUp = () => {
    stopDrag();
  };

  useEffect(() => {
    if (!containerRef.current) return;
    if (!initialX) return;
    const date = new Date();
    if (date.getMonth() !== month) {
      containerRef.current.scrollLeft = 0;
    } else {
      const rects = containerRef.current.getClientRects();
      const containerX = rects[0].x;
      containerRef.current.scrollLeft = initialX - containerX;
    }
  }, [initialX, month]);

  return (
    <div
      ref={containerRef}
      className={`flex overflow-x-scroll w-auto z-50 cursor-grab none-scrollbar none-dragging ${
        horizontal.isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}

export default HorizontalSlide;
