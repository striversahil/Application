"use client";
import React, { useEffect } from "react";
import * as Codeblock from "@repo/layouts/CodeBlock";
import useFetch from "../../hooks/useFetch";

type Props = {};

const CodeBlock: React.FC<Props> = () => {
  const [pokemonName, setPokemonName] = React.useState("");
  const [hidden, setHidden] = React.useState(true);
  const { data, isLoading } = useFetch({
    href: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  });

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
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      {hidden && (
        <div className="absolute bottom-0 flex h-1/3 w-full bg-slate-400 rounded-xl">
          <Codeblock.Steps
            value={pokemonName}
            onInputChange={handleInputChange}
            onFormSubmit={handleSubmit}
            isLoading={isLoading}
          />
          <Codeblock.Output data={data} />
          <div
            className="absolute top-0 right-0 px-4 py-2 m-3 cursor-pointer bg-red-500 hover:bg-red-500/80 rounded-md"
            onClick={() => setHidden(!hidden)}
          >
            <span className="text-white text-2xl">X</span>
          </div>
        </div>
      )}
      {!hidden && (
        <div
          className="absolute bottom-0 w-full h-5 bg-white"
          onClick={() => setHidden(!hidden)}
        >
          Hello dear
        </div>
      )}
    </>
  );
};

export default CodeBlock;
