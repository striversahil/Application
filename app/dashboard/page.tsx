"use client";
import React from "react";
import useBackend from "../../hooks/useBackend";
import { useQuery } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { getUserInfo } from "@actions/user";

type Props = {};

const page = (props: Props) => {
  const { data, isLoading, error } = getUserInfo();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  console.log(error);
  return <div>{JSON.stringify(data)} Hello</div>;
  // if (!isLoading && data.statusCode === 401) {
  //   redirect("/login");
  // }
  // Todo : Redirected to first workspace find a workaround

  // if (!isLoading && data.data.workspaces.length != 0) {
  //   redirect(`/dashboard/${data.data.workspaces[0]}`);
  // }
  // redirect(`/dashboard/${data.data.workspaces[0]}`);

  return (
    <div className="bg-slate-800">
      page
      <div>{JSON.stringify(data.data.workspaces)}</div>
      <button
        onClick={() => {
          redirect("/dashboard/example");
        }}
      >
        navigation
      </button>
    </div>
  );
};

export default page;
