import React, { createContext, useState, useContext, ReactNode } from "react";

interface UtilContext {
  currentTab: number;
  toggleTab: (tabno: number) => void;
  currentStep: number;
  toggleStep: (stepno: number) => void;
}

// Create the context
const UtilsContext = createContext<UtilContext | null>(null);

// Create a provider component
export const UtilityProvider = ({ children }: { children: ReactNode }) => {
  const [currentTab, setcurrentTab] = useState(0);
  const [currentStep, setcurrentStep] = useState(0);

  const toggleTab = (tabno: number) => {
    setcurrentTab(tabno);
  };

  const toggleStep = (stepno: number) => {
    setcurrentStep(stepno);
  };

  return (
    <UtilsContext.Provider
      value={{ currentTab, toggleTab, currentStep, toggleStep }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUtility = () => useContext(UtilsContext);
