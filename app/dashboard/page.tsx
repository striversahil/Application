import React from "react";
import useBackend from "../../hooks/useBackend";

type Props = {};

const page = (props: Props) => {
  const { rawdata, isLoading, error } = useBackend({
    endpoint: "user",
    trigger: true,
  });

  console.log(rawdata);

  return (
    <div className="bg-slate-800">
      page
      <div>Hello</div>
    </div>
  );
};

export default page;
