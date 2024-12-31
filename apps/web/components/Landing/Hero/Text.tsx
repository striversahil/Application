import React from "react";
import Nav from "./Nav";

type Props = {};

const Text = (props: Props) => {
  return (
    <div className="flex flex-col space-y-5 py-[20px] backdrop-blur-lg z-10">
      <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr text-center from-white to-gray-500">
        Internal Tool Automation
        <br />
        for Your Needs.
      </h1>
      <h1 className="text-3xl font-bold text-gray-700">
        {" "}
        Manage Your Workflow with Ease
      </h1>
      <Nav />
    </div>
  );
};

export default Text;
