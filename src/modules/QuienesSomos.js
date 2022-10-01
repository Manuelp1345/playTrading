import { Instagram, Telegram, Twitter, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./header/nav";

const pagesFooter = [
  "INFORMACIÓN",
  "POLÍTICAS DE PRIVACIDAD",
  "TÉRMINOS DE USO",
  "CONTÁCTENOS",
  "NOTICIAS",
];

const QuienesSomos = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: "url('img/Quienes somos.jpg')",
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
          Bienvenido
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            marginX: "8rem",
            mb: "2rem",
          }}
        >
          Conoce más sobre nosotros, es un placer que estés aqui, te invitamos a
          formar parte de Play Trading, disfrutar de todos los servicios y
          alcanzar junto a nosotros la rentabilidad que siempre haz deseado con
          tu pasión por el deporte.
        </Typography>
        <Box
          sx={{ width: "90%", height: "0.5rem", backgroundColor: "#05f2c7" }}
        ></Box>

        <Box
          sx={{
            width: "80%",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1.5rem",
              fontWeight: "bold",
              mt: "1rem",
            }}
          >
            Quienes Somos:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              mb: "2rem",
            }}
          >
            Somos un equipo multidiciplinario, compuesto por profesionales
            latinoamericanos del sector tecnologico, financiero y desportivo.
            Que unificamos especialidades para el desarrollo de un proyecto
            basado en la aplicación de inteligencia artificial en el mercado de
            los pronosticos deportivos, el cual es enfocado bajo directrices
            financieras, obteniendo un indicutible avance vanguardista a nivel
            de rentabilidad
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1.5rem",
              fontWeight: "bold",
              mt: "1rem",
            }}
          >
            Misión:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              mb: "2rem",
            }}
          >
            Ofrece a nuestro usuarios un ecosistema integral de trading
            deportivo, en donde puedan acceder a información y tecnologia de
            primer categoria, que les facilite crecer en el amplio universo de
            las apuestas deportivas, contando con un acompañamiento, formacion,
            guia y datos que aumentan los márgenes de ganancia y sostenibilidad
            en el tiempo.
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1.5rem",
              fontWeight: "bold",
              mt: "1rem",
            }}
          >
            Visión:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              mb: "2rem",
            }}
          >
            Ser prioneros en el mercado del Trading Deportivo latinoamericano,
            apoyados en el desarrollo tecnologico de última generación, que
            permita generar márgenes sustancialmente mayores de rentabilidad en
            apuestas deportivas.
          </Typography>

          <Box component="img" width="100%" src="img/imagen tecnología.png" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 1,
              p: 5,
              mb: "5rem",
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
        </Box>
      </Box>
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
    </Box>
  );
};

export default QuienesSomos;
