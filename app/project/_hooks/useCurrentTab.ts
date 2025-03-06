import { useEffect, useState } from "react";

export const useCurrentTab = () => {
  const [currentStep, setCurrentStepState] = useState<string>(
    localStorage.getItem("currentStep") || "slug"
  );
  const [currentTab, setCurrentTabState] = useState<string>(
    localStorage.getItem("currentTab") || "slug"
  );

  const setCurrentTab = (tab: string) => {
    setCurrentTabState(tab);
    localStorage.setItem("currentTab", tab);
  };

  const setCurrentStep = (step: string) => {
    setCurrentStepState(step);

    localStorage.setItem("currentStep", step);
  };

  return { currentStep, setCurrentStep, currentTab, setCurrentTab };
};

// setCurrentTab should set localstorage as well
