import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { DataContext } from "./context/DataContext";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";

const TradingBot = () => {
  const navigate = useNavigate();
  const { user, modalAuth } = React.useContext(DataContext);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: "url('img/Bot Play Trading.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></Box>
      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          my: "1rem",
        }}
      >
        <Box
          sx={{
            mt: "4rem",
            width: "85%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "8rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1rem",
              mt: "1rem",
              textAlign: "center",
            }}
          >
            En esta sección podrás tener acceso a los análisis por inteligencia
            artificial exclusivos de Play Trading. Disfruta los los distintos
            mercados y saca el mayor partido a tu inversión!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            height: "0.5rem",
            backgroundColor: "#05f2c7",
            mt: "4rem",
          }}
        />
        <Box
          sx={{
            mt: "4rem",
            width: "70%",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mb: "3rem",
          }}
        >
          <Button
            sx={{
              width: { xs: "50%", md: "20%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              color: "black",
            }}
            onClick={() => {
              if (user.auth === undefined || user.auth === false) {
                return Swal.fire({
                  title:
                    "para ingresar al servicio debes ingresar o registrarte",

                  didClose: () => {
                    modalAuth.setOpen(true);
                  },
                });
              }

              navigate("/favoritos");
            }}
          >
            <Box
              sx={{ width: "80%" }}
              component="img"
              src="img/Icono favoritos.jpg"
            ></Box>
            <Typography
              sx={{ width: "100%", fontSize: "1.5rem", textAlign: "center" }}
            >
              Favoritos a ganar
            </Typography>
          </Button>
          <Button
            sx={{
              width: { xs: "50%", md: "20%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "black",
            }}
            onClick={() => {
              if (user.auth === undefined || user.auth === false) {
                return Swal.fire({
                  title:
                    "para ingresar al servicio debes ingresar o registrarte",

                  didClose: () => {
                    modalAuth.setOpen(true);
                  },
                });
              }

              navigate("/goles");
            }}
          >
            <Box
              sx={{ width: "80%" }}
              component="img"
              src="img/Icono goles.jpg"
            ></Box>
            <Typography
              sx={{ width: "100%", fontSize: "1.5rem", textAlign: "center" }}
            >
              Goles
            </Typography>
          </Button>
          <Button
            sx={{
              width: { xs: "50%", md: "20%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "black",
            }}
            onClick={() => {
              if (user.auth === undefined || user.auth === false) {
                return Swal.fire({
                  title:
                    "para ingresar al servicio debes ingresar o registrarte",

                  didClose: () => {
                    modalAuth.setOpen(true);
                  },
                });
              }
              navigate("/gana-sin-empate");
            }}
          >
            <Box
              sx={{ width: "80%" }}
              component="img"
              src="img/Icono gana sin empate.jpg"
            ></Box>
            <Typography
              sx={{ width: "100%", fontSize: "1.5rem", textAlign: "center" }}
            >
              Gana sin empate
            </Typography>
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default TradingBot;
