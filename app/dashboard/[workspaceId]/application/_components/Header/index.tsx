import { Input } from "@components/ui/input";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="absolute top-0 w-full h-[5vh] bg-slate-900 text-center flex justify-center">
      <Input value={"Header"} className="w-[20%]" />
    </div>
  );
};

export default Header;
