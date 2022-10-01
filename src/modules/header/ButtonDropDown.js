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
        sx={{ my: 2, color: "white", display: "block" }}
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
        <MenuItem
          sx={{
            color: "#012340",
            borderBottom: "2px solid #fff",

            ":hover": {
              borderBottom: "2px solid #012340",
            },
          }}
          onClick={handleClose}
          id={content === "Nosotros" ? "Quienes Somos" : "TRADING BOT"}
        >
          {content === "Nosotros" ? "Quienes Somos" : "TRADING BOT"}
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
          id={content === "Nosotros" ? "Team" : "CANAL PREMIUM"}
        >
          {content === "Nosotros" ? "Team" : "CANAL PREMIUM"}
        </MenuItem>
      </Menu>
    </div>
  );
}
