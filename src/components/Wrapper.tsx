import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="h-screen w-screen">
      <div className="max-w-screen-xs mx-auto">{children}</div>
    </div>
  );
}

export default Wrapper;
