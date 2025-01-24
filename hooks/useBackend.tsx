import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { redirect } from "next/navigation";

type Props = {
  endpoint: string;
  method?: "get" | "post" | "put" | "delete";
  payload?: any;
  external?: boolean;
};

interface Data {
  statusCode: number;
  data: object | null;
  message: string;
  success: boolean;
}

axios.defaults.withCredentials = true; // Global axios config to enable cookies

const useBackend = async ({
  endpoint,
  method = "get",
  payload = {},
}: Props): Promise<Data> => {
  const href = `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`;
  console.log(href);

  const response: AxiosResponse = await axios[method](href, payload, {
    withCredentials: true,
  });
  if (response.status === 401) {
    redirect("/login");
  }
  return response.data;
};

export default useBackend;
