"use client";
import { useEffect, useState } from "react";

export const useCurrentTab = () => {
  const [currentStep, setCurrentStepState] = useState<string>("slug");
  const [currentTab, setCurrentTabState] = useState<string>("slug");

  // Don't Try to remove this useEffect to put the Value as Next Js Hot reloading brokes while doing so

  useEffect(() => {
    setCurrentStepState(localStorage.getItem("currentStep") || "slug");
    setCurrentTabState(localStorage.getItem("currentTab") || "slug");
  }, [currentStep, currentTab]);

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
