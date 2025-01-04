import React from "react";

type Look = "sign-in" | "sign-up";

type Props = {
  look: Look;
};

const Login = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-1/5 h-1/2 bg-slate-500 rounded-lg">
        <form action="/api/auth/${props.look}" method="post">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 m-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 m-2 rounded-md"
          />
          <button
            type="submit"
            className="w-full p-2 m-2 rounded-md bg-blue-500 hover:bg-blue-500/50"
          >
            {props.look === "sign-in" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
