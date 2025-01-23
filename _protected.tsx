"use client";
// This makes the routes protected by default
// Runs on Every routes Change

import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useBackend from "./hooks/useBackend";
import Loading from "./components/utils/loading";
import { useQuery } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const Protected_Route = ({ children }: Props) => {
  console.log("Protected Route");

  const route = usePathname();

  // Check if user is authenticated using api call to backend /auth route
  const {
    data: rawdata,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: () => {
      return useBackend({
        endpoint: "user/auth",
        method: "get",
      });
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  // Todo : Restrict User from accessing Children

  // Redirect to login if user is not authenticated
  useEffect(() => {
    console.log("Checking Auth...");
    if (!isLoading && (error || !rawdata)) {
      console.log("You are not Authenticated 😔");
      redirect("/login");
    } else if (!isLoading && !error && rawdata) {
      console.log("You are Authenticated 😃");
    }
  }, [rawdata, isLoading, error, route]);

  return (
    <div>
      {/* Routing to Loading Page while Checking Auth */}
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <Loading />
        </div>
      )}
      {!isLoading && <div>{children}</div>}
    </div>
  );
};

export default Protected_Route;
