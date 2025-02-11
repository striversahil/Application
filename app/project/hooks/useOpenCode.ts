import React from "react";

export const useOpen = () => {
  const [openCode, setOpenCode] = React.useState(true);
  const [openConfig, setOpenConfig] = React.useState(true);

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
