import React from "react";

const useTabFallback = () => {
  //   const { isLoading, data } = useQueryData(
  //     "CodeBlockAction.getCodeBlock",
  //     CodeBlockAction.getCodeBlock
  //   );

  const [fallback, setFallback] = React.useState<string>("");

  return { fallback, setFallback };
};

export default useTabFallback;
