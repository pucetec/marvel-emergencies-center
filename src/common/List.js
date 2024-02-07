import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const List = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item.text} />
          {item.action}
        </ListItem>
      ))}
    </div>
  );
};

export default List;
