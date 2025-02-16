"use client";
import ProjectAction from "@actions/project/project";
import { Input } from "@components/ui/input";
import { Skeleton } from "@components/ui/skeleton";
import { useQueryData } from "@hooks/useQueryData";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const { isLoading, data } = useQueryData("project", ProjectAction.getOne);
  return (
    <div className="relative top-0 w-full h-[5vh] bg-slate-900 text-center flex justify-center">
      <h1 className="flex items-center text-3xl text-white font-bold text-center">
        {isLoading ? (
          <Skeleton className="w-[500px] h-[40px] rounded-md" />
        ) : (
          <Input
            className="w-[500px] h-[40px] bg-inherit rounded-md"
            placeholder={data?.payload.name || "Project Name"}
            onFocus={(e) => {
              e.target.select();
            }}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        )}
      </h1>
    </div>
  );
};

export default Header;
