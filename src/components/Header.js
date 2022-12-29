import * as React from "react";

export default function Header() {
  return (
    <div className="header h-44  fixed shadow-xl z-50  bg-slate-50 w-screen px-5 ">
      <div className="relative container">
        <div className="flex header-left sm:ml-10 z-10 h-full justify-center flex-col w-2/5">
          <h1 className="text-4xl sm:text-5xl tracking-widest md:text-7xl text-center  pt-5 italic font-normal min-w-72 pb-2">
            ЛОГОПЕД
          </h1>
          <div className="flex mt-5 justify-center">
            <h3 className="text-sm md:text-lg border-t-2 tracking-widest border-black p-2 text-xl">
              СОБОЛЕВА ОЛЕСЯ
            </h3>
          </div>
        </div>
        <div className="absolute rotate-45 top-0 right-0 -z-10">
          <img className="  w-96 rotate-90 " src="/picture/tree.png" alt="" />
        </div>
      </div>
      <div className="absolute right-0 top-0 ">
        <img
          className="h-44"
          src="/picture/Picsart_22-12-25_12-45-56-417.png"
          alt=" "
        ></img>
      </div>
    </div>
  );
}
