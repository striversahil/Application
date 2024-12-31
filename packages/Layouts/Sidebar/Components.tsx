import React from "react";

import { Reference } from "@repo/common/Json/Reference";

type Props = {};

const Components = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      {Reference.map((item, index) => (
        <div key={index} className="m-5 bg-slate-400 rounded-md gap-10">
          <h1 className="text-2xl text-white font-bold p-5 text-center">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Components;
