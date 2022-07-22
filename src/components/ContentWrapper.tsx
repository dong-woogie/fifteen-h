import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}

function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="relative max-w-screen-xxs mx-auto border h-[640px] overflow-scroll none-scrollbar">
      {children}
    </div>
  );
}

export default ContentWrapper;
