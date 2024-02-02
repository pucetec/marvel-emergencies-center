import React from "react";
import { Button as MaterialButton } from "@mui/material";

const Button = ({ variant, onClick, value, href, className,disabled }) => {
  return (
    <>
      <MaterialButton
        variant={variant}
        onClick={onClick}
        href={href}
        className={className}
        disabled={disabled}
      >
        {value}
      </MaterialButton>
    </>
  );
};

export default Button;
