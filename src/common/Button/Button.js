import React from "react";
import { Button } from "@mui/material";
import { Stack } from "@mui/material/";

const Button = ({ variant, spacing, direction, value }) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Button variant={variant}>{value}</Button>
    </Stack>
  );
};
export default Button;
