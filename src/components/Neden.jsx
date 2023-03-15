import React from "react";
import TypewriterComponent from "typewriter-effect";

const Neden = ({ info, paragraph, conclusion }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xs font-semibold">{info}</div>
      <div className="text-4xl font-bold">
        <TypewriterComponent
          options={{
            strings: [paragraph],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 99999999,
          }}
        />
      </div>
      <div className="text-sm font-light">{conclusion}</div>
    </div>
  );
};

export default Neden;
