"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { getUserInfo } from "@actions/user";
import { useQueryData } from "@hooks/useQueryData";

type Props = {};

const page = (props: Props) => {
  const { data, isLoading, error } = useQueryData("user", getUserInfo());

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data && data.statusCode === 401) {
    redirect("/login");
  }
  if (data && data.statusCode === 200) {
    redirect(`/dashboard/${data.payload.workspaces[0]}`);
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
