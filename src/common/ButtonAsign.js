import React from "react";
import { Button } from "@mui/material";

function ButtonAsign({ onClick, id }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      fullWidth
      aria-describedby={id}
      type="button"
    >
      Asignar
    </Button>
  );
}

export default ButtonAsign;
