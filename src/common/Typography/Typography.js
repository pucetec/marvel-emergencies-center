import React from "react";
import { Typography as MaterialTypography } from "@mui/material";

const Typography = ({ variant, align, value, paragraph, bold }) => {
  if (bold) {
    return (
      <MaterialTypography variant={variant} align={align} paragraph={paragraph}>
        <strong>{value}</strong>
      </MaterialTypography>
    );
  }

  return (
    <MaterialTypography variant={variant} align={align} paragraph={paragraph}>
      {value}
    </MaterialTypography>
  );
};

export default Typography;
