import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material/";
import { Stack } from "@mui/material/";

const IconButtons = ({ direction }) => {
  return (
    <Stack direction={direction} spacing={1}>
      <IconButton aria-label="favorite" color="secondary">
        <FavoriteIcon />
      </IconButton>
    </Stack>
  );
};
export default IconButtons;
