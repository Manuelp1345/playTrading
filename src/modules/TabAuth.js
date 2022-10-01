import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert, Button, TextField } from "@mui/material";
import { DataContext } from "./context/DataContext";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabAuth() {
  const [value, setValue] = React.useState(0);
  /*   const [loading, setLoading] = React.useState(false); */
  const [error, setError] = React.useState("");
  const [formLogin, setFormLogin] = React.useState({ user: "", pass: "" });
  const { tabIndex, setUser } = React.useContext(DataContext);

  const { tabIndex: tabCurrent } = tabIndex;

  React.useEffect(() => {
    setValue(tabCurrent);
  }, [setValue, tabCurrent]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loginHandle = async () => {
    const { user, pass } = formLogin;
    setError("");
    if (user === "") {
      return setError("Debe ingresar un usuario.");
    }
    if (pass === "") {
      return setError("Debe ingresar una contraseña.");
    }
    setError("");
    let response;
    try {
      response = await axios.get(
        "http://soltechgroup.net:8080/api/cuota/",
        /*   {
          username: "manuelp1345@gmail.con",
          password: "api54321",
        }, */

        {
          headers: {
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type,Authorization",
            Authorization: "Token e366fedf18467d39a36e099fd5391ebab48b7c33",
          },
        }
      );
    } catch (error) {
      console.log(error);
      setError("error");
    }
    setError("");

    setUser({ token: response.token });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ingresar" {...a11yProps(0)} />
          <Tab label="Registrarse" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70vh",
            gap: "1rem",
          }}
        >
          <TextField
            id="UsuarioLogin"
            label="Usuario"
            variant="outlined"
            value={formLogin.user}
            onChange={(e) => {
              console.log(e.target.value);
              setFormLogin({ ...formLogin, user: e.target.value });
            }}
          />
          <TextField
            id="passLogin"
            type="password"
            label="Contraseña"
            variant="outlined"
            value={formLogin.pass}
            onChange={(e) => {
              setFormLogin({ ...formLogin, pass: e.target.value });
            }}
          />
          {error !== "" && <Alert severity="error">{error}</Alert>}

          <Button
            sx={{
              backgroundColor: "#012340",
              ":hover": { background: "#03738C" },
            }}
            variant="contained"
            onClick={loginHandle}
          >
            Ingresar
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70vh",
            gap: "1rem",
          }}
        >
          <TextField id="UsuarioLogin" label="Usuario" variant="outlined" />
          <TextField
            id="passLogin"
            type="password"
            label="Contraseña"
            variant="outlined"
          />
          <Button
            sx={{
              backgroundColor: "#012340",
              ":hover": { background: "#03738C" },
            }}
            variant="contained"
          >
            Registrarse
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}