import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { DataContext } from "../context/DataContext";
import ButtonDropDown from "./ButtonDropDown";
import { useNavigate } from "react-router-dom";

const pages = ["Nosotros", "Servicios", "Historico", "contacto"];
const settings = ["Perfil", "Cerrar Sesion"];
const settingLogout = ["Ingresar", "Registrarse"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, setUser, modalAuth, tabIndex } = React.useContext(DataContext);
  const { open, setOpen } = modalAuth;
  const { setTabIndex } = tabIndex;

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    console.log(e.target.getInnerHTML());

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (param) => {
    const value = param.target.getInnerHTML();
    if (value === "Ingresar") {
      setTabIndex(0);
      setOpen(!open);
    }
    if (value === "Registrarse") {
      setTabIndex(1);
      setOpen(!open);
    }
    if (value === "Cerrar Sesion") {
      setUser({});
      setOpen(!open);
      navigate("/");
    }

    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "rgba(0,0,0,0.6)",
        border: "none",
        boxShadow: "none",
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button onClick={() => navigate("/")}>
            <Box
              component="img"
              width={200}
              src="img/Logo horizontal Play Trading.png"
            />
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                page === pages[1] || page === pages[0] ? (
                  <ButtonDropDown content={page} />
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 5 }}
            >
              {pages.map((page) =>
                page === pages[1] || page === pages[0] ? (
                  <ButtonDropDown content={page} />
                ) : (
                  <Button
                    id={page}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                )
              )}
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/1.jpg">
                  {user.name ? `${user.name[0]}${user.apellido[0]}` : null}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", width: "500px !important" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                style: {
                  width: "30ch",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Avatar src="/static/images/avatar/1.jpg">
                  {user.name ? `${user.name[0]}${user.apellido[0]}` : null}
                </Avatar>
                <Typography>
                  {" "}
                  {user.name ? `${user.name} ${user.apellido}` : null}
                </Typography>
              </Box>
              {user.auth
                ? settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      id={setting}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                : settingLogout.map((setting) => (
                    <MenuItem
                      key={setting}
                      id={setting}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
