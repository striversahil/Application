// Contains user actions related to authentication

import { useMutation, useQuery } from "@tanstack/react-query";
import useBackend from "../../hooks/useBackend";
import { useMutationData } from "../../hooks/useMutation";
import { redirect } from "next/navigation";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = process.env.NEXT_PUBLIC_BASE_URL;

export const getUserInfo = async () => {
  const response = await axios.get(`${source}/user`);
  return response.data;
};

export const getWorkspaceInfo = async (workspaceId: string) => {
  const response = await axios.get(`${source}/user/workspace/${workspaceId}`);
  return response.data;
};
