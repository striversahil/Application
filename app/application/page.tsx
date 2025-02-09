"use client";
import { getApplicationInfo } from "@actions/user";
import { useQueryData } from "@hooks/useQueryData";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { isLoading, data } = useQueryData("workspace", getApplicationInfo());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  if (data && data.statusCode === 401) {
    redirect("/login");
  }

  if (data && data.statusCode === 200) {
    redirect(`/application/${data.payload._id}`);
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
