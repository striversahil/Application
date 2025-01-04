import React from "react";

type Look = "sign-in" | "sign-up";

type Props = {
  look: Look;
};

const Login = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-tr from-transparent to-slate-800">
      <div className=" w-1/5 h-1/2 bg-slate-500 rounded-lg ">
        <form action="/api/auth/${props.look}" method="post">
          <div className="flex flex-col items-center mx-10">
            <div>
              <h1 className="text-3xl text-white font-bold p-5 text-center">
                {props.look === "sign-in" ? "Sign In" : "Sign Up"}
              </h1>
            </div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
