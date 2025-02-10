"use client";
import { getApplicationInfo } from "@actions/user";
import { Skeleton } from "@components/ui/skeleton";
import { useQueryData } from "@hooks/useQueryData";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { isLoading, data } = useQueryData("application", getApplicationInfo);

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-screen h-screen rounded-md " />
      </div>
    );
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
