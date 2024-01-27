import React from "react";
import { Grid as MaterialGrid } from "@mui/material";

const Grid = ({ items, xs, md, xl }) => {
  return (
    <div
      style={{
        width: "50%",
        padding: "50px",
        paddingLeft: "550px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialGrid container spacing={3}>
        {items.map((element, index) => (
          <>
            <MaterialGrid key={element.id} item xs={xs} md={md} xl={xl}>
              {element.id}
            </MaterialGrid>
            <MaterialGrid key={element.name} item xs={xs} md={4} xl={4}>
              {element.name}
            </MaterialGrid>
            <MaterialGrid key={element.etc} item xs={xs} md={2} xl={2}>
              {element.etc}
            </MaterialGrid>
            <MaterialGrid key={index} item xs={xs} md={2} xl={2}>
              {element.etc2}
            </MaterialGrid>
          </>
        ))}
      </MaterialGrid>
    </div>
  );
};

export default Grid;
