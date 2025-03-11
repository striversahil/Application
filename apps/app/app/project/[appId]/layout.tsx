"use client";
import React from "react";
import { Provider } from "react-redux";
import { useContext } from "react";
import { UtilityProvider } from "../../../contexts/utils";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <div>
      <UtilityProvider>{props.children}</UtilityProvider>
    </div>
  );
};

export default RootLayout;
