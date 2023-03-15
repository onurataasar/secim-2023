import React from "react";

const Button = ({ yeter, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-36 py-2 hover:scale-110 bg-gradient-to-br rounded-md shadow-slate-200 shadow-inner text-base font-semibold ${
        yeter ? "from-red-400 to-red-600" : " from-amber-400 to-amber-600"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
