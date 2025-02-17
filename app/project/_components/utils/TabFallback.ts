import React from "react";

const useTabFallback = () => {
  //   const { isLoading, data } = useQueryData(
  //     "CodeBlockAction.getall",
  //     CodeBlockAction.getall
  //   );

  const [fallback, setFallback] = React.useState<string>("");

  return { fallback, setFallback };
};

export default useTabFallback;
