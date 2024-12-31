import React from "react";

type Props = {};

const Name = [
  {
    name: "Table",
    //     component: <Button />,
  },
  {
    name: "Gallery",
    //     component: <Button />,
  },
  {
    name: "Table",
    //     component: <Button />,
  },
  {
    name: "Gallery",
    //     component: <Button />,
  },
];

const Components = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      {Name.map((item, index) => (
        <div key={index} className="m-5 bg-slate-400 rounded-md gap-10">
          <h1 className="text-2xl text-white font-bold p-5 text-center">
            {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Components;
