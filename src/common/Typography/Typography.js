import React from "react";

const Typography = ({ level, children }) => {
  if (level === "h1") {
    return <h1>{children}</h1>;
  }

  if (level === "h2") {
    return <h2>{children}</h2>;
  }

  if (level === "h3") {
    return <h3>{children}</h3>;
  }

  if (level === "p") {
    return <p>{children}</p>;
  }

  return <>{children}</>;
};

export default Typography;
