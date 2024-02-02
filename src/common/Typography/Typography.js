import React from "react";
import { Typography as MaterialTypography } from "@mui/material";

const Typography = ({ variant, align, value, paragraph, style }) => {
  return (
    <MaterialTypography
      className="typography"
      variant={variant}
      align={align}
      paragraph={paragraph}
      style={style}
    >
      {value}
    </MaterialTypography>
  );
};

export default Typography;
