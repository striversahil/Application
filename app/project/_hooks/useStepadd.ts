import StepsBlockAction from "@/actions/project/stepsBlock";
import TabBlockAction from "@/actions/project/tabBlock";
import React from "react";

const RootStepStruct = (language: any, step?: number, id?: string) => {
  return {
    metadata: {
      _id: id,
      step: step,
      name: language.label,
    },
    payload: {
      name: language.label,
      code: language.code,
      language: language.value,
      output: language.output,
    },
  };
};

export const useStepAdd = () => {
  const { mutate: mutateTabAdd } = TabBlockAction.useAdd();
  const { mutate: mutateStepAdd } = StepsBlockAction.useadd();

  const mutateStep = async (payload: any) => {
    mutateStepAdd(RootStepStruct(payload.language, payload.step, payload._id));
  };

  const mutateTab = async (payload: any) => {
    mutateTabAdd(RootStepStruct(payload.language));
  };
  return { mutateStep, mutateTab };
};
