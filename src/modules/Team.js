import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/DataContext";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";

const Team = () => {
  const { modalAuth, tabIndex } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <Box sx={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: "url('img/Team.jpg')",
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
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            mt: "1rem",
          }}
        >
          Nuestro Equipo
        </Typography>
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
          <Box component="img" width="20%" src="img/Foto Justin1.png" />
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                mt: "1rem",
              }}
            >
              Justin Crespo
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                mt: "1rem",
              }}
            >
              Perfil Fundador y ceo de la marca póker geek que tiene presencia
              en 8 países entre América y Europa dedicado a póker en línea y
              venta de productos de póker. Socio propietario y fundador de
              empresas como, Smartbpay dedicada a la capitalización de activos
              digitales, Soulteach dedicada al desarrollo tecnológico e
              innovación en proyectos digitales en Ecuador. Ex propietario de
              casas de juego online. Inversionista en varias empresas dedicadas
              a rubros varios como restaurantes, discotecas y spas. Imagen para
              Latinoamérica de la marca póker Bros como embajador.
            </Typography>
          </Box>
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
            width: "85%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "8rem",
          }}
        >
          <Box component="img" width="20%" src="img/Foto 3-1.png" />
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                mt: "1rem",
              }}
            >
              Jorge Martin
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                mt: "1rem",
              }}
            >
              Finanzas y Trading
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                mt: "1rem",
              }}
            >
              Perfil Martin es Británico-Colombiano, pregrado en Banca y
              Finanzas Internacionales en CASS Business School, estudios en la
              Universidad de Oxford y Maestría en Finanzas de la London School
              of Economics and Political Science. Inicia su carrera profesional
              en Mercados Globales en Morgan Stanley y Goldman Sachs en Londres.
              Luego en Barclays Capital Londres como analista de Fondos. Luego
              en SISU Capital Hedge Fund en Londres, desarrolló estrategias de
              inversión en renta fija, variable y derivados. Luego en la Bolsa
              de Valores de Londres en el equipo de Deuda Soberana y IPOs, abrió
              por primera vez la Bolsa de Valores de Londres para Colombia,
              República Dominicana y SICA (Bloque Económico Centroamericano) y
              Panamá.
            </Typography>
          </Box>
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
            width: "85%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "8rem",
          }}
        >
          <Box component="img" width="20%" src="img/Foto Alexander1.png" />
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                mt: "1rem",
              }}
            >
              Edgar Alexander Rosales
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                mt: "1rem",
              }}
            >
              Tecnología y Inteligencia Artificial
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                mt: "1rem",
              }}
            >
              Perfil Edgar es un Ingeniero con 24 años de experiencia, dedicado
              a la docencia universitaria en la Carrera de Ingeniería de
              Informática, ocupando gran parte de su tiempo a desarrollar
              sistemas administrativos y de procesos, para el sector público y
              privado, con amplios conocimientos en Inteligencia Artificial,
              luego incursionó en la gerencia de proyectos tecnológicos,
              ocupando los más altos cargos del país, teniendo la oportunidad de
              dirigir proyectos con empresas internacionales como lo fueron
              CEIEC de China, COBRA de España y las filiales nacionales de
              Empresas como HP, XEROS, IBM, CISCO entre otras. En 2015, comenzó
              con el desarrollo en la Tecnología Blockchain, dirigiendo equipos
              multidisciplinarios, en cada una de las fases de desarrollo o
              creación de una Criptomoneda.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
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
              sx={{
                textAlign: "center",
                width: "100%",
                fontSize: "1.3rem",
              }}
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
              sx={{
                textAlign: "center",
                width: "100%",
                fontSize: "1.3rem",
              }}
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
              sx={{
                textAlign: "center",
                width: "100%",
                fontSize: "1.3rem",
              }}
            >
              TRADING BOT
            </Typography>
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Team;
