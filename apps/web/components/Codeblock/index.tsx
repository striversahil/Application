"use client";
import React from "react";
import * as Codeblock from "@repo/layouts/CodeBlock";
import useFetch from "../../hooks/useFetch";

type Props = {};

const CodeBlock: React.FC<Props> = () => {
  const [pokemonName, setPokemonName] = React.useState("");
  const { data, isLoading } = useFetch({
    href: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="absolute bottom-0 flex h-1/3 w-full bg-slate-400 rounded-xl">
      <Codeblock.Steps
        value={pokemonName}
        onInputChange={handleInputChange}
        onFormSubmit={handleSubmit}
        data={data}
        isLoading={isLoading}
      />
      <Codeblock.Output />
    </div>
  );
};

export default CodeBlock;
