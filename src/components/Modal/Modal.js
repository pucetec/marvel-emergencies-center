import React, { useState } from "react";
import { Modal as CustomModal } from "@mui/material";
import Box from "@mui/material/Box";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <CustomModal open={open} onClose={handleClose}>
      <Box></Box>
    </CustomModal>
  );
};

export default Modal;
