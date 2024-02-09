import React from "react";
import { Button as MaterialButton } from "@mui/material";

const Button = ({ variant, onClick, value, href, className }) => {
  return (
    <>
      <MaterialButton
        variant={variant}
        onClick={onClick}
        href={href}
        className={className}
      >
        {value}
      </MaterialButton>
    </>
  );
};

export default Button;
