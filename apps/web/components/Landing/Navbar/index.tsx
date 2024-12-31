import React from "react";
import Logo from "./Logo";
import Navigations from "./Navigations";
import Logins from "./Logins";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky top-0  z-50 flex justify-center  ">
      <div className="flex space-x-5 border  w-2/3  border-yellow-300 text-center">
        <Logo />
        <Navigations />
        <Logins />
      </div>
    </div>
  );
};

export default Navbar;
