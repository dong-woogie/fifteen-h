import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/fill-1-copy-1.svg";
import { ReactComponent as ArrowTop } from "../../assets/fill-1-copy-2.svg";
interface FaqProps {
  title: string;
  contents: string;
}

function Faq({ title, contents }: FaqProps) {
  const [isDetail, setIsDetail] = useState(false);
  const onClick = () => {
    setIsDetail(!isDetail);
  };
  return (
    <>
      <div
        className="relative px-[20px] py-[22px] cursor-pointer"
        onClick={onClick}
      >
        <div
          className={`${
            isDetail ? "text-[#4a74e8] font-bold" : "text-[#343437]"
          } text-sm tracking-[-.2px] leading-none`}
        >
          {title}
        </div>
        <div className="absolute right-0 top-0 h-full flex items-center pr-[18px]">
          {isDetail ? <ArrowTop /> : <ArrowDown />}
        </div>
      </div>
      {isDetail && (
        <div
          className="faq-detail px-5 pb-[22px]"
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      )}
      <div className={`${isDetail ? "h-2" : "h-[1px]"} bg-custom-gray-3`} />
    </>
  );
}

export default Faq;
