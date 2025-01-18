import Link from "next/link";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <Link
        href="/login"
        className="m-5 bg-slate-800 hover:bg-inherit/30 px-4 py-1 rounded-md shadow-inner shadow-white/50"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="bg-blue-500 rounded-md px-4 py-1 hover:bg-blue-500/50 shadow-inner shadow-white/50"
      >
        Start for Free
      </Link>
    </div>
  );
};

export default Nav;
