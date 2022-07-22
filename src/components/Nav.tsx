import React from "react";
import { changeContent, ContentType } from "../store/content";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import NavChild from "./NavChild";

function Nav() {
  const content = useAppSelector((state) => state.content.content);
  const dispatch = useAppDispatch();
  const onClickTab = (content: ContentType) => {
    dispatch(changeContent(content));
  };
  return (
    <div className="p-4 mt-4">
      <div className="w-full flex justify-evenly">
        <NavChild
          text="InputFile"
          content="inputFile"
          currentContent={content}
          onClick={onClickTab}
        />

        <NavChild
          text="Accordian"
          content="accordian"
          currentContent={content}
          onClick={onClickTab}
        />

        <NavChild
          text="TimePicker"
          content="timePicker"
          currentContent={content}
          onClick={onClickTab}
        />

        <NavChild
          text="DatePicker"
          content="datepicker"
          currentContent={content}
          onClick={onClickTab}
        />
      </div>
    </div>
  );
}

export default Nav;
