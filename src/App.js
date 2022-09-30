import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import ResponsiveAppBar from "./modules/header/nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, Telegram, Twitter, YouTube } from "@mui/icons-material";
import { DataContext } from "./modules/context/DataContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomizedDialogs from "./modules/ModalAuth";

const pagesFooter = [
  "INFORMACIÓN",
  "POLÍTICAS DE PRIVACIDAD",
  "TÉRMINOS DE USO",
  "CONTÁCTENOS",
  "NOTICIAS",
];

function App() {
  return (
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
          <Box sx={{ width: "33.3%" }} component="img" src="img/1ga.png"></Box>
          <Box sx={{ width: "33.3%" }} component="img" src="img/2ga.png"></Box>
          <Box sx={{ width: "33.3%" }} component="img" src="img/3ga.png"></Box>
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
          <Box sx={{ width: "70%" }} component="img" src="img/video.png"></Box>
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

      <Box
        sx={{
          backgroundColor: "rgb(3,115,140)",
          background:
            "radial-gradient(circle, rgba(3,115,140,1) 0%, rgba(1,35,64,1) 50%)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
        }}
      >
        <Box
          component="img"
          width="20%"
          src="img/IMAGOTIPO PLAY TRADING PRINCIPAL.png"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "end",
              flexWrap: "wrap",
            }}
          >
            {pagesFooter.map((page) => (
              <Button
                key={page}
                sx={{ my: 0, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              width: "11rem",
              height: "0.5rem",
              backgroundColor: "#05f2c7",
              transform: "rotate(90deg)",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "#05f2c7" }}
          >
            {"> > > "}&nbsp; SIGUENOS &nbsp;{" < < < "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: 300,
            }}
          >
            <FacebookIcon />
            <Instagram />
            <Telegram />
            <YouTube />
            <Twitter />
          </Box>
        </Box>
      </Box>
      <CustomizedDialogs />
    </Box>
  );
}

export default App;

export const Loading = () => {
  const { setUser } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      user: "manuel",
      pass: "123",
    });
    navigate("/");
  }, [setUser, navigate]);

  return (
    <>
      <h1>Hola</h1>
    </>
  );
};
