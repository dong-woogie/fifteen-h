import React, { useCallback, useMemo } from "react";
import { ContentType } from "../store/content";

interface NavChildProps {
  content: ContentType;
  currentContent: ContentType;
  text: string;
  onClick: (content: ContentType) => void;
}

function NavChild({ text, content, currentContent, onClick }: NavChildProps) {
  const navStyles = useMemo(
    () =>
      content === currentContent
        ? "text-sky-400 border-b-2 border-sky-400 font-bold px-4 py-2 cursor-pointer active:text-opacity-70"
        : "text-gray-400 px-4 py-2 font-bold cursor-pointer active:text-opacity-70",
    [currentContent]
  );

  const handleClick = useCallback(() => {
    onClick(content);
  }, []);

  return (
    <div className={navStyles} onClick={handleClick}>
      {text}
    </div>
  );
}

export default NavChild;
