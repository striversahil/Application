"use client";
import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Header from "./header";

type Props = {};

const CodeBlock: React.FC<Props> = () => {
  const [value, setvalue] = React.useState("");
  const [trigger, setTrigger] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);
  const { data, isLoading } = useFetch({
    href: `https://jsonplaceholder.org/posts/${value}`,
    trigger,
  });

  // Reset the trigger
  useEffect(() => {
    if (trigger) {
      setTrigger(false);
    }
  }, [trigger]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hidden]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "`") {
      setHidden(!hidden);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTrigger(true);
  };

  return (
    // Here Setting minimum height to be view port height because were not able to get the height of the header

    <div className="absolute bottom-0 min-h-[5vh] max-h-1/3 w-full">
      <Header hidden={() => setHidden(!hidden)} ishidden={hidden} />
      {hidden && (
        <div className="flex h-[35vh] mt-[5vh] w-full bg-slate-400 rounded-xl">
          <Codeblock.Steps
            value={value}
            onInputChange={handleInputChange}
            onFormSubmit={handleSubmit}
            isLoading={isLoading}
          />
          <Codeblock.Output data={data} />
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
