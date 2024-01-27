import { useState } from "react";
import Button from "../../common/Button/Button";
import { TextField } from "../../common/InputBox/InputBox";
import Typography from "../../common/Typography/Typography";

export const Header = () => {
  const [inputValue, setinputValue] = useState("");
  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setinputValue("");
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
        <Button content={"Ingresar"} color={"primary"} variant={"contained"} />
      </div>
    </>
  );
};
