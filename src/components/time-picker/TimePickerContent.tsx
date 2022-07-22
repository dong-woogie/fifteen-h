import React from "react";
import SettingButtons from "./SettingButtons";

function TimePickerContent() {
  return (
    <div>
      <h3 className="content-title">Timepicker</h3>
      <h4 className="px-5 text-sm font-medium text-custom-gray-1">
        운영 시간 설정
      </h4>
      <SettingButtons />
    </div>
  );
}

export default TimePickerContent;
