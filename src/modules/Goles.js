import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";

const Goles = () => {
  const navigate = useNavigate();

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
            flexDirection: "row",
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
            Perfil Fundador y ceo de la marca póker geek que tiene presencia en
            8 países entre América y Europa dedicado a póker en línea y venta de
            productos de póker. Socio propietario y fundador de empresas como,
            Smartbpay dedicada a la capitalización de activos digitales,
            Soulteach dedicada al desarrollo tecnológico e innovación en
            proyectos digitales en Ecuador. Ex propietario de casas de juego
            online. Inversionista en varias empresas dedicadas a rubros varios
            como restaurantes, discotecas y spas. Imagen para Latinoamérica de
            la marca póker Bros como embajador.
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
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            mb: "3rem",
          }}
        >
          <Button
            sx={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "black",
            }}
            onClick={() => navigate("/favoritos")}
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
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "black",
            }}
            onClick={() => navigate("/goles")}
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
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              color: "black",
            }}
            onClick={() => navigate("/gana-sin-empate")}
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

export default Goles;
