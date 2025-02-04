"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { redirect } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useMutationData } from "../../../../hooks/useMutation";
import { useLogin } from "../hooks/useLogin";

type Look = "signin" | "signup";

type Props = {
  look: Look;
};

const Login = (props: Props) => {
  const { register, watch, reset, onFormSubmit, errors } = useLogin();

  // const onSubmit = (e: any) => {
  //   console.log("submit");
  // };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-tr from-transparent to-slate-800">
      <div className=" w-1/5 h-1/2 bg-slate-500 rounded-lg ">
        <form onSubmit={onFormSubmit}>
          <div className="flex flex-col items-center mx-10 text-black">
            <div>
              <h1 className="text-3xl text-white font-bold p-5 text-center">
                {props.look === "signin" ? "Sign In" : "Sign Up"}
              </h1>
            </div>
            {props.look === "signup" && (
              <input
                {...register("name")}
                type="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full p-2 m-2 rounded-md"
              />
            )}
            {errors.name && (
              <p className="text-red-500">{errors.name.message as string}</p>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 m-2 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message as string}</p>
            )}
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-2 m-2 rounded-md"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message as string}
              </p>
            )}
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
