"use client";
import { getApplicationInfo } from "@actions/user";
import { Input } from "@components/ui/input";
import { Skeleton } from "@components/ui/skeleton";
import { useQueryData } from "@hooks/useQueryData";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const { isLoading, data } = useQueryData("application", getApplicationInfo());
  return (
    <div className="absolute top-0 w-full h-[5vh] bg-slate-900 text-center flex justify-center">
      <h1 className="flex items-center text-3xl text-white font-bold text-center">
        {isLoading ? (
          <Skeleton className="w-[500px] h-[40px] rounded-md" />
        ) : (
          data.payload.name
        )}
      </h1>
    </div>
  );
};

export default Header;
