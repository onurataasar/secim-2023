import React from "react";

const Neden = ({ info, paragraph, conclusion }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xs font-semibold">{info}</div>
      <div className="text-4xl font-bold">
        <q>{paragraph}</q>
      </div>
      <div className="text-sm font-light">{conclusion}</div>
    </div>
  );
};

export default Neden;
