import Link from "next/link";
import React from "react";

type Props = {};

const Logins = (props: Props) => {
  return (
    <div className="flex items-center space-x-3 mx-5">
      <Link
        href={"/login"}
        className="text-lg bg-slate-500 hover:bg-slate-500/30 px-4 py-1 rounded-md shadow-inner shadow-white/50"
      >
        Login
      </Link>
      <Link
        href={"/signup"}
        className="relative bg-blue-500/75 hover:bg-blue-500 rounded-md font-semibold text-lg px-4 py-1 shadow-inner shadow-white/50"
      >
        {/* <div className="absolute shadow-2xl animate-pulse inset-1 pointer-events-none rounded-md bg-green-500"></div> */}
        Try for Free
      </Link>
    </div>
  );
};

export default Logins;
