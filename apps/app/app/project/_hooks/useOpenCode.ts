import React, { useEffect } from "react";

export const useOpen = () => {
  const [openCode, setOpenCode] = React.useState(true);
  const [openConfig, setOpenConfig] = React.useState(true);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "`" && event.ctrlKey) {
      setOpenCode(!openCode);
    }

    if (["m", "M"].includes(event.key) && event.ctrlKey) {
      setOpenConfig(!openConfig);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openCode, openConfig]);

  const handleOpenCode = () => {
    setOpenCode(!openCode);
  };

  const handleOpenConfig = () => {
    setOpenConfig(!openConfig);
  };

  return {
    openCode,
    openConfig,
    handleOpenCode,
    handleOpenConfig,
  };
};
