"use client";
import React from "react";

type Props = {};

const Steps = (props: Props) => {
  const Inputflow = (e: any) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${e.target.value}`,
        password: `${e.target.value}`,
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div className="flex flex-col space-y-5 items-center w-1/3 h-full bg-slate-500">
      <button className="p-2 mx-2 w-fit  bg-blue-500 rounded-full">
        Run API
      </button>
      <form action=""></form>
      <input
        type="text"
        className="w-1/2 p-2 text-gray-400"
        placeholder="Enter API Endpoint"
        onInput={(e) => Inputflow(e)}
      />
    </div>
  );
};

export default Steps;
