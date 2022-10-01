import { Instagram, Telegram, Twitter, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomizedDialogs from "./ModalAuth";

const pagesFooter = [
  "INFORMACIÓN",
  "POLÍTICAS DE PRIVACIDAD",
  "TÉRMINOS DE USO",
  "CONTÁCTENOS",
  "NOTICIAS",
];

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
