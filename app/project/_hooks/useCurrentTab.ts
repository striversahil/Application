import { useEffect, useState } from "react";

export const useCurrentTab = () => {
  const [currentTab, setCurrentTabState] = useState<string>("slug");

  useEffect(() => {
    const currentTablocal = localStorage.getItem("currentTab");

    if (!currentTablocal) {
      localStorage.setItem("currentTab", "slug");
    }

    setCurrentTabState(currentTablocal as string);
  }, [currentTab]);

  const setCurrentTab = (tab: string) => {
    setCurrentTabState(tab);
    localStorage.setItem("currentTab", tab);
  };

  return { currentTab, setCurrentTab };
};

// setCurrentTab should set localstorage as well
