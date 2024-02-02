import React from "react";
import { IconButton as CustomIconButton } from "@mui/material/";

const IconButton = ({
  children,
  disabled,
  size,
  Onclick,
  color,
  startIcon,
}) => {
  return (
    <CustomIconButton
      disabled={disabled}
      size={size}
      Onclick={Onclick}
      color={color}
      startIcon={startIcon}
    >
      {children}
    </CustomIconButton>
  );
};

export default IconButton;
