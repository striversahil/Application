// This makes the routes protected by default
// Runs on Every routes Change

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useFetch from "./hooks/useBackend";

type Props = {
  children: React.ReactNode;
};

const Protected_Route = ({ children }: Props) => {
  const route = useRouter();
  const [trigger, setTrigger] = React.useState<boolean>(false);

  useEffect(() => {
    const { data } = useFetch({ href: "/verify", trigger: trigger });
  }, [route]);

  return <div>{children}</div>;
};

export default Protected_Route;
