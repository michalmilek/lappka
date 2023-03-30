import React from "react";

const Volunteering = () => {
  return (
    <div className="min-w-[272px] h-full bg-white flex flex-col">
      <h2 className="py-2 pb-3 border-b-2">Wolontariat</h2>
      <div className="flex flex-col px-6 items-start justify-center w-full">
        <h5>Wpłać darowizne</h5>
        <div className="flex justify-center items-center gap-3 px-4 border-b-2 w-full">
          <span className="h-2 w-2 bg-SUCCESS rounded-full" />
          Włączone
        </div>
      </div>
      <div className="flex flex-col px-6 items-start justify-center">
        <h5>Codzienna pomoc</h5>
        <div className="flex justify-center items-center gap-3 px-4 border-b-2">
          <span className="h-2 w-2 bg-lightGray1 rounded-full" />
          Wyłączone
        </div>
      </div>
      <div className="flex flex-col px-6 items-start justify-center">
        <h5>Wyprowadzamie psów</h5>
        <div className="flex justify-center items-center gap-3 px-4">
          <span className="h-2 w-2 bg-SUCCESS rounded-full" />
          Włączone
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
