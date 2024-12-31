import Link from "next/link";
import React from "react";

type Props = {};

const Logins = (props: Props) => {
  return (
    <div className="flex items-center space-x-3 mx-5">
      <Link href={"/login"}>Login</Link>
      <Link href={"/signup"} className="bg-blue-500 rounded-md px-4 py-1">
        Try for Free
      </Link>
    </div>
  );
};

export default Logins;
