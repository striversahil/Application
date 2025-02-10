import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default RootLayout;
