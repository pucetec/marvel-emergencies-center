import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CustomButton from "./Button"; 
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const List = ({ items, withButtons }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index}>
          <FiberManualRecordIcon />
          <ListItemText primary={item.text} />
          {withButtons ? (
            <CustomButton onClick={() => handleButtonClick(item.id)}>
              Botón
            </CustomButton>
          ) : (
            <CustomButton onClick={() => handleButtonClick(item.id)}>
              Borrar
            </CustomButton>
          )}
        </ListItem>
      ))}
    </div>
  );
};

export default List;


