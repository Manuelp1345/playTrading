import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";

const TradingBot = () => {
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
      <Footer />
    </Box>
  );
};

export default TradingBot;
