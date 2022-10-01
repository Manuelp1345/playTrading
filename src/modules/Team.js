import { Box } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./header/nav";

const Team = () => {
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
    </Box>
  );
};

export default Team;
