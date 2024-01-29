import { useState } from "react";
import Button from "../../common/Button/Button";
import { TextField } from "../../common/InputBox/InputBox";
import Typography from "../../common/Typography/Typography";
import { useMarvelAPI } from "../../contexts/HeroContext";
import DeleteIcon from "@mui/icons-material/Delete";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { emergencyList, updateEmergencyList } = useMarvelAPI();

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: emergencyList.length, // Usa la longitud actual de la lista como ID, aunque no es lo ideal ya que se puede terminar repitiendo.
      name: inputValue,
      focusIcon: <CenterFocusStrongIcon fontSize="large" />,
      trashIcon: <DeleteIcon fontSize="large" />,
    };

    updateEmergencyList(newItem);
    setInputValue("");
  };

  return (
    <>
      <Typography
        variant={"h3"}
        align={"center"}
        value={"Central de Emergencias"}
      />
      <div
        style={{
          display: "flex",
          padding: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={"p"} value={"Emergencias"} />
        <form onSubmit={onSubmit}>
          <TextField
            id={"input"}
            placeholder={"Ingresa un emergencia..."}
            onChange={onInputChange}
          />
        </form>
        <Button
          content={"Ingresar"}
          color={"primary"}
          variant={"contained"}
          onClick={onSubmit}
        />
      </div>
    </>
  );
};
