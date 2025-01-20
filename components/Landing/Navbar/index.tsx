import React from "react";
import Logo from "./Logo";
import Navigations from "./Navigations";
import Logins from "./Logins";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full top-2  z-50 flex justify-center">
      <div className="flex space-x-5 border-[2px]  w-2/3 bg-white/10  border-green-700 rounded-full px-10 py-5 text-center hover:translate-y-2 duration-500 backdrop-blur-lg">
        <Logo />
        <Navigations />
        <Logins />
      </div>
    </div>
  );
};

export default Navbar;
