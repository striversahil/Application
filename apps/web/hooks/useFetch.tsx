"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  href: string;
  trigger?: boolean;
  method?: "get" | "post" | "put" | "delete";
  payload?: any;
  external?: boolean;
};

const useFetch = ({
  href,
  trigger = false,
  method = "get",
  payload = {},
  external = false,
}: Props) => {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  if (!href) return { data, isLoading, error };

  if (external) {
    href = href;
  } else {
    href = `http://localhost:8080/${href}`;
  }

  useEffect(() => {
    if (!trigger) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios[method](href, payload);
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
