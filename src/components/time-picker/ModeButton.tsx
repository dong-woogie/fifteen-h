import React from "react";

interface ModeButtonProps {
  focus: boolean;
  onClick: () => void;
  text: string;
}

function ModeButton({ focus, onClick, text }: ModeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 time-picker-modal-button ${
        focus
          ? "border-default font-bold"
          : "border-custom-gray-3 text-custom-gray-2"
      }`}
    >
      {text}
    </button>
  );
}

export default ModeButton;
