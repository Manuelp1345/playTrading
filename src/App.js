import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ResponsiveAppBar from "./modules/header/nav";
import Footer from "./modules/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./modules/context/DataContext";

function App() {
  const { modalAuth, tabIndex } = useContext(DataContext);
  const navigate = useNavigate();
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
          Noticias
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
          <Button
            sx={{ width: "33.3%" }}
            onClick={() => {
              window.open(
                "https://www.semana.com/deportes/articulo/universidad-de-oxford-predice-al-campeon-del-mundial-qatar-2022-argentina-vs-brasil-en-semifinales/202202/",
                "_blank"
              );
            }}
          >
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="img/FONDOS FUTBOL2.jpg"
            ></Box>
          </Button>
          <Button
            sx={{ width: "33.3%" }}
            onClick={() => {
              window.open(
                "https://www.semana.com/deportes/articulo/les-vale-cinco-la-multa-alemania-confirma-que-usara-simbolo-lgbti-en-el-mundial-qatar-2022/202211/ ",
                "_blank"
              );
            }}
          >
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="img/FONDOS FUTBOL3.jpg"
            ></Box>
          </Button>

          <Button
            sx={{ width: "33.3%" }}
            onClick={() => {
              window.open(
                "https://www.eltiempo.com/deportes/futbol-internacional/benzema-se-pierde-el-mundial-de-qatar-2022-por-lesion-segun-le-parisien-719000",
                "_blank"
              );
            }}
          >
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="img/FONDOS FUTBOL4.jpg"
            ></Box>
          </Button>
        </Box>
        <Typography variant="h3" sx={{ mt: 5, mb: 5, color: "#012340" }}>
          LAS REGLAS DEL JUEGO ESTÁN CAMBIANDO
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mt: 10,
          }}
        >
          <Box
            sx={{ width: { xs: "100%", md: "70%" } }}
            component="video"
            src="img/videoInicio.mp4"
            controls
            autoPlay={true}
          ></Box>
          <Typography
            sx={{
              width: { xs: "100%", md: "30%" },
              fontSize: "1.3rem",
              textAlign: { xs: "center", md: "start" },
            }}
          >
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
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              color: "#05f2c7",
            }}
            onClick={() =>
              window.open("https://telegram.me/Comunityplaytrading", "_blank")
            }
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
          </Button>
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
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              color: "#05f2c7",
            }}
            onClick={() => {
              tabIndex.setTabIndex(1);
              modalAuth.setOpen(true);
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
          </Button>
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
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              color: "#05f2c7",
            }}
            onClick={() => navigate("/trading-bot")}
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
          </Button>
        </Box>
      </Box>
      {/*      <Box
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
      </Box> */}
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
