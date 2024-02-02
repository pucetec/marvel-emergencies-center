import { Modal as MaterialModal } from "@mui/material";
import { Box as MaterialBox } from "@mui/material";
import Typography from "../../common/Typography/Typography";
import { useMarvelAPI } from "../../contexts/HeroContext";
import { HeoresGrid } from "../Grid/HeoresGrid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const headerStyle = {
  paddingLeft: "55px",
  paddingRight: "55px",
  paddingTop: "1%",
  paddingBottom: "5%",
};

export const Modal = () => {
  const { isModalOpen, closeModal } = useMarvelAPI();

  return (
    <div style={{ margin: "25%" }}>
      <MaterialModal open={isModalOpen} onClose={closeModal}>
        <MaterialBox sx={style}>
          <Typography
            variant={"h5"}
            value={"Asingar un super héore"}
            align={"center"}
            style={{ paddingTop: "1%", paddingBottom: "5%" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant={"h6"}
              align={"center"}
              value={"#"}
              style={headerStyle}
            />
            <Typography
              variant={"h6"}
              align={"center"}
              value={"Nombre"}
              style={headerStyle}
            />
            <Typography
              variant={"h6"}
              align={"center"}
              value={"Asignar"}
              style={headerStyle}
            />
          </div>
          <HeoresGrid />
        </MaterialBox>
      </MaterialModal>
    </div>
  );
};
