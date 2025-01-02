import React from "react";

type Props = {
  data: any;
};

const Output = (props: Props) => {
  return (
    <div className="w-2/3 bg-slate-700 space-y-5 overflow-y-scroll">
      <h1 className="text-3xl text-white font-bold p-5 text-center">
        Output Data
      </h1>
      <div>{JSON.stringify(props.data)}</div>
    </div>
  );
};

export default Output;
