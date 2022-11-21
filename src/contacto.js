import { Box, Button, Typography } from "@mui/material";
import ResponsiveAppBar from "./modules/header/nav";
import Footer from "./modules/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./modules/context/DataContext";

function Contacto() {
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
          Contacto
        </Typography>
        <Box
          sx={{ width: "100%", height: "0.2rem", backgroundColor: "#05f2c7" }}
        ></Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
            mt: 10,
          }}
        >
          <Typography>
            Telegram (
            {
              <Button
                onClick={() => {
                  window.open("https://t.me/Comunityplaytrading", "_blank");
                }}
              >
                @PlayTrading CHAT
              </Button>
            }
            )
          </Typography>

          <Typography>
            Telefono : +593 99 123 0599 / +57 317 889 2962
          </Typography>

          <Typography>
            Correo : soporte@play-trading.com / administracion@play-trading.com
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

      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      ></Box>
      <Footer />
    </Box>
  );
}

export default Contacto;
