import React from "react";
import Slider, { Settings } from "react-slick";

interface TimePickerSliderProps {
  settings?: Settings;
  children: React.ReactNode;
}

function TimePickerSlider({ settings, children }: TimePickerSliderProps) {
  const slideSettings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 10,
    ...settings,
  };

  return <Slider {...slideSettings}>{children}</Slider>;
}

export default TimePickerSlider;
