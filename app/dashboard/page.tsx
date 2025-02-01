"use client";
import React from "react";
import useBackend from "../../hooks/useBackend";
import { useQuery } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { getUserInfo } from "@actions/user";

type Props = {};

const page = (props: Props) => {
  const { data, isLoading, error } = getUserInfo();

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data && data.statusCode === 401) {
    redirect("/login");
  }
  if (data && data.statusCode === 200) {
    redirect(`/dashboard/${data.data.workspaces[0]}`);
  }

  return (
    <div className="bg-slate-800">
      <h1>Dashboard</h1>

      <div>Authenticated</div>
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
