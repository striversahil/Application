"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  href: string;
  trigger?: boolean;
  method?: "get" | "post" | "put" | "delete";
  payload?: any;
  custom?: any;
};

const useFetch = ({
  href,
  trigger = false,
  method = "get",
  payload = {},
  custom = {},
}: Props) => {
  const [data, setData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // If not href given return null data
  if (!href) return { data, isLoading, error };

  useEffect(() => {
    if (!trigger) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios[method](href, payload, {
          headers: {
            "Content-Type": "application/json",
          },
          ...custom,
        });
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

export default useFetch;
