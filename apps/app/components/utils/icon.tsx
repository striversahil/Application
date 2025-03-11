import React from "react";

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
};

const Icon = (props: Props) => {
  return (
    <div
      className="fixed top-2 right-0 p-2 bg-black/50 rounded-xl cursor-pointer hover:bg-white/10"
      onClick={props.handleClick}
    >
      {props.children}
    </div>
  );
};

export default Icon;
