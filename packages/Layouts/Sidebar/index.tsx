import React from "react";
import Components from "./Components";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-1/5 bg-slate-800 h-full">
      <h1 className="text-3xl text-white font-bold p-5 text-center">
        Components 🔥
      </h1>
      <Components />
    </div>
  );
};

export default Sidebar;
