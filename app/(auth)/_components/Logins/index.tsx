"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { redirect } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userLogin } from "@actions/user";
import { useMutationData } from "../../../../hooks/useMutation";

type Look = "signin" | "signup";

type Props = {
  look: Look;
};

const Login = (props: Props) => {
  const [FormData, setFormData] = React.useState<Object>({
    name: "",
    email: "",
    password: "",
  });

  const { mutate, isPending } = userLogin(FormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(FormData);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-tr from-transparent to-slate-800">
      <div className=" w-1/5 h-1/2 bg-slate-500 rounded-lg ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mx-10 text-black">
            <div>
              <h1 className="text-3xl text-white font-bold p-5 text-center">
                {props.look === "signin" ? "Sign In" : "Sign Up"}
              </h1>
            </div>
            {props.look === "signup" && (
              <input
                type="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full p-2 m-2 rounded-md"
                onChange={handleChange}
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-2 m-2 rounded-md"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full p-2 m-2 rounded-md"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full p-2 m-2 rounded-md bg-blue-500 hover:bg-blue-500/50"
              // onClick={() => handleSubmit}
            >
              {props.look === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
