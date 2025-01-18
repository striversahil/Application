"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

type Props = {
  endpoint: string;
  trigger?: boolean;
  method?: "get" | "post" | "put" | "delete";
  payload?: any;
  external?: boolean;
};

type Data = {
  statusCode: number;
  data: object | null;
  message: string;
  success: boolean;
};

const useBackend = ({
  endpoint,
  trigger = false,
  method = "get",
  payload = {},
  external = false,
}: Props) => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // If not endpoint given return null data
  if (!endpoint) return { data, isLoading, error };

  const href = `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`;

  useEffect(() => {
    if (!trigger) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios[method](href, payload, {
          withCredentials: true,
        });
        if (!external && response.data.statusCode === 401) {
          redirect("/login");
        }
        setData(response.data);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [trigger]);

  return { data, isLoading, error };
};

export default useBackend;
