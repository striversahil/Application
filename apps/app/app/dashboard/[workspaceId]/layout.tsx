// import { getWorkspaceInfo } from "@actions/user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  props: string;
  children: React.ReactNode;
};
const queryClient = new QueryClient();

export default async function Layout({ props, children }: Props) {
  // const { workspaceId } = props.workspaceId;
  // await queryClient.prefetchQuery({
  //   queryKey: ["workspace"],
  //   queryFn: () => getWorkspaceInfo("6791d2eccf19972f98849982"),
  //   staleTime: 1000 * 60 * 60,
  // });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
