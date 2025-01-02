import React from "react";

type StepsProps = {
  value: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  data: any;
  isLoading: boolean;
};

const Steps: React.FC<StepsProps> = ({
  value,
  onInputChange,
  onFormSubmit,
  data,
  isLoading,
}) => {
  return (
    <div className="flex flex-col space-y-5 items-center w-1/3 h-full bg-slate-500">
      <form onSubmit={onFormSubmit}>
        <button
          className="p-2 mx-2 w-fit bg-blue-500 rounded-full"
          type="submit"
        >
          Run API
        </button>
        <input
          type="text"
          className="w-1/2 p-2 text-gray-400 rounded-md"
          placeholder="Enter API Endpoint"
          value={value}
          onChange={onInputChange}
        />
      </form>
      <h1 className="text-3xl overflow-auto">
        {isLoading ? "Loading......." : JSON.stringify(data)}
      </h1>
    </div>
  );
};

export default Steps;
