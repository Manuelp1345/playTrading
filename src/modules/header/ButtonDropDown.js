import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function ButtonDropDown({ content }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    const value = event.target.id;
    if (value === "TRADING BOT") {
      navigate("/trading-bot");
    }
    if (value === "Team") {
      navigate("/team");
    }
    if (value === "Quienes Somos") {
      navigate("/quienes-somos");
    }
    if (value === "Goles") {
      navigate("/Historico");
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: { xs: "black", md: "white" }, display: "block" }}
      >
        {content}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {content === "Historico" && (
          <MenuItem
            sx={{
              color: "#012340",
              borderBottom: "2px solid #fff",

              ":hover": {
                borderBottom: "2px solid #012340",
              },
            }}
            onClick={handleClose}
            id="Goles"
          >
            Goles
          </MenuItem>
        )}
        <MenuItem
          sx={{
            color: "#012340",
            borderBottom: "2px solid #fff",

            ":hover": {
              borderBottom: "2px solid #012340",
            },
          }}
          onClick={handleClose}
          id={
            (content === "Nosotros" && "Quienes Somos") ||
            (content === "Servicios" && "TRADING BOT") ||
            (content === "Historico" && "Historico")
          }
        >
          {(content === "Nosotros" && "Quienes Somos") ||
            (content === "Servicios" && "TRADING BOT") ||
            (content === "Historico" && "Favoritos")}
        </MenuItem>
        <MenuItem
          sx={{
            color: "#012340",
            borderBottom: "2px solid #fff",

            ":hover": {
              borderBottom: "2px solid #012340",
            },
          }}
          onClick={handleClose}
          id={
            (content === "Nosotros" && "Team") ||
            (content === "Servicios" && "CANAL PREMIUM") ||
            (content === "Historico" && "Favoritos")
          }
        >
          {(content === "Nosotros" && "Team") ||
            (content === "Servicios" && "CANAL PREMIUM") ||
            (content === "Historico" && "Gana sin empate")}
        </MenuItem>
      </Menu>
    </div>
  );
}
