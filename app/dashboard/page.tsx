"use client";
import React from "react";
import useBackend from "../../hooks/useBackend";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const page = (props: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return useBackend({
        endpoint: "user/auth",
        method: "get",
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-800">
      page
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default page;
