import Link from "next/link";
import React from "react";

type Props = {};

const Logins = (props: Props) => {
  return (
    <div className="flex items-center space-x-3 mx-5">
      <Link
        href={"/login"}
        className="text-lg bg-slate-500 hover:bg-slate-500/30 px-4 py-1 rounded-md"
      >
        Login
      </Link>
      <Link
        // Todo : Link to SignUp
        href={"/application"}
        className="bg-blue-500 hover:bg-blue-500/50 rounded-md font-semibold text-lg px-4 py-1"
      >
        Try for Free
      </Link>
    </div>
  );
};

export default Logins;
