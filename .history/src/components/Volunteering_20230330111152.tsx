import React from "react";

const Volunteering = () => {
  return (
    <div className="min-w-[272px] h-full bg-white flex flex-col">
      <h2 className="py-2 pb-3 border-b-2">Wolontariat</h2>
      <div className="flex-col items-center justify-center">
        <h5>Wpłać darowizne</h5>
        <div className="flex justify-center items-center gap-3">
          <span className="h-2 w-2 bg-SUCCESS rounded-full" />
          Włączone
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
