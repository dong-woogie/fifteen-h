import React from "react";
import { useAppSelector } from "../store/hooks";
import AccordianContent from "./accordian/AccordianContent";
import ContentWrapper from "./ContentWrapper";
import DatePickerContent from "./date-picker/DatePickerContent";
import InputFileContent from "./intput-file/InputFileContent";
import TimePickerContent from "./time-picker/TimePickerContent";
import TimePickerModal from "./time-picker/TimePickerModal";

function Content() {
  const content = useAppSelector((state) => state.content.content);
  return (
    <ContentWrapper>
      {content === "inputFile" && <InputFileContent />}
      {content === "accordian" && <AccordianContent />}
      {content === "timePicker" && <TimePickerContent />}
      {content === "datepicker" && <DatePickerContent />}
      <TimePickerModal />
    </ContentWrapper>
  );
}

export default Content;
