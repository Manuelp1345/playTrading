import "./App.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import ResponsiveAppBar from "./modules/header/nav";
import { DataContext } from "./modules/context/DataContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./modules/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
      setLoading(!loading);
    });
  });

  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <Box sx={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: "url('img/1 Home Page.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></Box>
      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 10,
        }}
      >
        <Typography variant="h4" sx={{ mt: 1, mb: 5 }}>
          Nuestra pasión por el futbol, ahora con play trading, es más rentable!
        </Typography>
        <Box
          sx={{ width: "100%", height: "0.2rem", backgroundColor: "#05f2c7" }}
        ></Box>
        <Typography variant="h3" sx={{ mt: 5, mb: 5, color: "#012340" }}>
          LAS REGLAS DEL JUEGO ESTÁN CAMBIANDO
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box
            sx={{ width: "33.3%" }}
            component="img"
            src="img/FONDOS FUTBOL2.jpg"
          ></Box>
          <Box
            sx={{ width: "33.3%" }}
            component="img"
            src="img/FONDOS FUTBOL3.jpg"
          ></Box>
          <Box
            sx={{ width: "33.3%" }}
            component="img"
            src="img/FONDOS FUTBOL4.jpg"
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "row",
            gap: 3,
            mt: 10,
          }}
        >
          <Box
            sx={{ width: "70%" }}
            component="img"
            src="img/FONDOS FUTBOL1.jpg"
          ></Box>
          <Typography sx={{ width: "30%", fontSize: "1.3rem" }}>
            Bienvenido a la plataforma pionera en Latino America especializada
            en trading deportivo. Disfruta al máximo nuestra tecnología de
            inteligencia artificial y obtén los mejores resultados del mercado.
            <br /> <br />
            Nuestro equipo de profesionales en tecnología, finanzas y deporte,
            están aquí para brindarte el más alto porcentaje de rentabilidad en
            toda la región.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('img/Seccion intermedia.jpg')",
          backgroundPosition: "center",
          backgroundSize: "100% 90vh",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 1,
          p: 5,
        }}
      >
        <Box
          sx={{
            width: "33.3%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            color: "#05f2c7",
          }}
        >
          <Box
            sx={{ width: "50%" }}
            component="img"
            src="img/Icono canal premium.png"
          ></Box>
          <Typography
            sx={{ textAlign: "center", width: "100%", fontSize: "1.3rem" }}
          >
            CANAL PREMIUM
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33.3%",
            color: "#05f2c7",
          }}
        >
          <Typography
            sx={{ textAlign: "center", width: "100%", fontSize: "1.3rem" }}
          >
            REGISTRATE GRATIS
          </Typography>
          <Box
            sx={{ width: "50%" }}
            component="img"
            src="img/Boton Registrarse.png"
          ></Box>
        </Box>
        <Box
          sx={{
            width: "33.3%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            color: "#05f2c7",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
            component="img"
            src="img/Icono Bot Play Trading.png"
          ></Box>
          <Typography
            sx={{ textAlign: "center", width: "100%", fontSize: "1.3rem" }}
          >
            TRADING BOT
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          px: 5,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" width="80%" src="img/g4.png" />
        <Typography
          sx={{
            flexGrow: 1,
            width: "90%",
            fontSize: "1.3rem",
            textAlign: "center",
            mt: 4,
            mb: 15,
          }}
        >
          Bienvenido a la plataforma pionera en Latino America especializada en
          trading deportivo. Disfruta al máximo nuestra tecnología de
          inteligencia artificial y obtén los mejores resultados del mercado.
          Nuestro equipo de profesionales en tecnología, finanzas y deporte,
          están aquí para brindarte el más alto porcentaje de rentabilidad en
          toda la región.
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      ></Box>
      <Footer />
    </Box>
  );
}

export default App;

export const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        background:
          " radial-gradient(circle, rgba(186,186,186,0.5) 25%, rgba(3,115,140,1) 50%, rgba(1,35,64,1) 100%)",
        pt: -10,
      }}
    >
      <Box
        sx={{ width: "30%", mt: -10, pb: 0 }}
        component="img"
        src="img/IMAGOTIPO PLAY TRADING PRINCIPAL.png"
      />
      <CircularProgress sx={{ mt: -10 }} />
    </Box>
  );
};
