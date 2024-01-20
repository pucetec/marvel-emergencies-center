import React from "react";
import { Typography as MaterialTypography } from "@mui/material";

const Typography = ({ variant, align, value, paragraph, fontSyles }) => {
  return (
    <MaterialTypography
      variant={variant}
      align={align}
      paragraph={paragraph}
      style={fontSyles}
    >
      {value}
    </MaterialTypography>
  );
};

export default Typography;
