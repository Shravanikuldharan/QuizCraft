import React from "react";

function Button({ text, onClick, bgColor, textColor, hoverColor, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer
        transform
        ${bgColor} ${textColor} 
        ${disabled ? "opacity-50 cursor-not-allowed" : `hover:${hoverColor} hover:scale-105 hover:shadow-lg`}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
