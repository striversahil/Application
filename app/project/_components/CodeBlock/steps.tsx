import React from "react";

type Props = {
  value?: string;
};

const Steps = (props: Props) => {
  return <div className="bg-white/70 w-full h-full">{props.value}</div>;
};

export default Steps;
