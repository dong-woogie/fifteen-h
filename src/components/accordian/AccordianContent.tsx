import React from "react";
import Faq from "./Faq";

interface AccordianContentProps {}

function AccordianContent(props: AccordianContentProps) {
  const faqList = [
    {
      id: 1,
      title: "질문입니다.",
      contents:
        "<p>회원 차단이 되지 않도록 유의사항을 꼭 지켜주시기 바랍니다.</p>",
    },
    {
      id: 2,
      title: "질문입니다.",
      contents: "<p><b>질문2번에</b> 대한 답변입니다.</p>",
    },
    {
      id: 3,
      title: "질문2입니다.",
      contents:
        "<p>회원 차단이 되지 않도록 유의사항을<br/> 꼭 지켜주시기 바랍니다.</p>",
    },
    {
      id: 4,
      title: "질문입니다.",
      contents:
        "<p>회원 차단이<br/> 되지 않도록 유의사항을 꼭 지켜주시기 바랍니다.</p>",
    },
  ];

  return (
    <div>
      <h4 className="content-title">아코디언</h4>
      <div className="h-2 bg-custom-gray-3" />

      <div className="accordian-title">자주 묻는 질문</div>

      <div className="border-b border-b-custom-gray-3" />

      {faqList.map((faq) => (
        <Faq key={faq.id} title={faq.title} contents={faq.contents} />
      ))}
    </div>
  );
}

export default AccordianContent;
