import Typography from "./common/Typography/Typography";
import { TextField } from "./common/InputBox/InputBox";
import Button from "./common/Button/Button";

//const typographyStyle = { position: "absolute", top: "50%" };
function App() {
  return (
    <>
      <Typography
        variant={"h3"}
        align={"center"}
        value={"Central de Emergencias"}
      />
      <div style={{ display: "flex" }}>
        <Typography variant={"p"} value={"Emergencias"} />
        <TextField label={""} variant={"filled"} />
        <Button content={"test"} color={"primary"} variant={"contained"} />
      </div>
    </>
  );
}

export default App;
