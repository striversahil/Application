import React from "react";
import { Index } from "./src";

type Props = {};

export const Usage = (props: Props) => {
  return (
    <div className="">
      <Index
        totalPages={20}
        onPageChange={(page) => console.log(`Page changed to ${page}`)}
      />
    </div>
  );
};
