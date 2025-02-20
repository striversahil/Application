import StepsBlockAction from "@/actions/project/stepsBlock";
import TabBlockAction from "@/actions/project/tabBlock";
import React from "react";

const RootStepStruct = (label: string, step?: number, id?: string) => {
  return {
    metadata: {
      _id: id,
      step: step,
      name: label,
    },
    payload: {
      name: label,
      code: 'console.log("Hello World")',
      language: "javascript",
      output: "Hello World",
    },
  };
};

export const useStepAdd = () => {
  const { mutate: mutateTabAdd } = TabBlockAction.useAdd();
  const { mutate: mutateStepAdd } = StepsBlockAction.useadd();

  const mutateStep = async (payload: any) => {
    mutateStepAdd(RootStepStruct(payload.label, payload.step, payload._id));
  };

  const mutateTab = async (payload: any) => {
    mutateTabAdd(RootStepStruct(payload.label));
  };
  return { mutateStep, mutateTab };
};
