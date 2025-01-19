import React from "react";
import Nav from "./Nav";

type Props = {};

const Text = (props: Props) => {
  return (
    <div className="flex flex-col h-3/5 space-y-5 py-[20px]  z-10">
      <div className="flex items-center font-bold  bg-green-700 px-4 py-1 rounded-full w-fit shadow-inner shadow-white/50 cursor-progress">
        Currently in Alpha{" "}
        <div className="animate-pulse text-lg">
          <div>⭐</div>
        </div>
      </div>
      <h1 className="text-7xl font-bold  text-center from-white to-slate-400 1">
        Internal
        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 to-green-500">
          {" "}
          Automation
        </span>{" "}
        <span className="text-6xl">Tool</span> <br />
        <span className="text-5xl"> for Your </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-blue-500">
          Workflow ...
        </span>
      </h1>
      <h1 className="text-3xl font-bold text-gray-400">
        {" "}
        Manage Your Workflow with Ease
      </h1>
      <Nav />
    </div>
  );
};

export default Text;
