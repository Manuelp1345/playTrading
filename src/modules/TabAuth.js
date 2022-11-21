import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert, Button, Input, TextField } from "@mui/material";
import { DataContext } from "./context/DataContext";
import axios from "axios";
import swal from "sweetalert2";
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
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [formLogin, setFormLogin] = React.useState({ user: "", pass: "" });
  const [formRegister, setFormRegister] = React.useState({
    user: "",
    pass: "",
    pass2: "",
    name: "",
    lasName: "",
    tel: null,
  });

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
    const data = new FormData();
    data.append("username", user);
    data.append("password", pass);

    try {
      setLoading(true);
      response = await axios.post(`server/auth.php`, data);
    } catch (error) {
      console.log(error.response.data.non_field_errors);
    }
    setLoading(false);

    if (response.data.non_field_errors)
      return setError(response.data.non_field_errors[0]);

    setError("");

    const dataTwo = new FormData();
    dataTwo.append("id", response.data.id);
    console.log(response.data.id);

    if (response.data.Autenticado) {
      const auth = response.data.Autenticado;
      try {
        response = await axios.post(`server/me.php`, dataTwo);
      } catch (error) {
        console.log(error.response.data.non_field_errors);
        return setError(error.response.data.non_field_errors[0]);
      }

      console.log(response.data);
      setUser({ auth, ...response.data.results[0] });
      const Toast = swal.mixin({
        toast: true,
        position: "button-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", swal.stopTimer);
          toast.addEventListener("mouseleave", swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Bienvenido ${response.data.results[0].name} ${response.data.results[0].apellido}`,
      });
    }
  };

  const registerHandle = async () => {
    const { user, pass, name, tel, lasName, pass2 } = formRegister;
    setError("");
    if (name === "") return setError("Debe ingresar un nombre.");

    if (lasName === "") return setError("Debe ingresar un apelldio.");

    if (tel === null || tel < 0)
      return setError("Debe ingresar un telefono valido.");

    if (user === "" || !user.includes("@"))
      return setError("Debe ingresar un Correo.");

    if (pass === "") return setError("Debe ingresar una contraseña.");

    if (pass2 === "") return setError("Debe confirmar la contraseña.");

    if (pass !== pass2) setError("La contraseña no coinciden");

    let response;
    const data = new FormData();
    data.append("username", user);
    data.append("password", pass);
    data.append("lasName", lasName);
    data.append("name", name);
    data.append("tel", tel);

    try {
      setLoading(true);
      response = await axios.post(`server/register.php`, data);
    } catch (error) {
      console.log(error.response.data.non_field_errors);
    }
    setLoading(false);
    if (response.data.password) return setError(response.data.password[0]);
    if (response.data.email !== user) return setError(response.data.email[0]);
    setError("");

    setUser({ ...response.data, auth: true });
    const Toast = swal.mixin({
      toast: true,
      position: "button-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", swal.stopTimer);
        toast.addEventListener("mouseleave", swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: `Bienvenido ${response.data.name} ${response.data.apellido}`,
    });

    /*     if (response.data.Autenticado) {
      const auth = response.data.Autenticado;
      try {
        response = await axios.get(
          `http://soltechgroup.net:8080/api/usuario/${response.data.id}`,
          {
            headers: {
              Authorization: `Token ${REACT_APP_TOKEN}`,
            },
          }
        );
      } catch (error) {
        console.log(error.response.data.non_field_errors);
        return setError(error.response.data.non_field_errors[0]);
      }
      console.log(response.data);

    } */
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
            width: "100%",
            gap: "1rem",
          }}
        >
          <TextField
            id="UsuarioLogin"
            label="Correo"
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
            onKeyDown={(e) => {
              console.log(e);
              if (e.code === "Enter") {
                loginHandle();
              }
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
            disabled={loading}
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
            width: "100%",

            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              gap: 3,
              padding: 0,
            }}
          >
            <TextField
              id="UsuarioLogin"
              label="Nombre"
              variant="outlined"
              value={formRegister.name}
              onChange={(e) => {
                setFormRegister({ ...formRegister, name: e.target.value });
              }}
            />
            <TextField
              id="UsuarioLogin"
              label="Apellido"
              variant="outlined"
              value={formRegister.lasName}
              onChange={(e) => {
                setFormRegister({ ...formRegister, lasName: e.target.value });
              }}
            />
          </Box>
          <Input
            type="Number"
            id="UsuarioLogin"
            label="Telefono"
            variant="outlined"
            placeholder="Telefono"
            value={formRegister.tel}
            onChange={(e) => {
              setFormRegister({ ...formRegister, tel: e.target.value });
            }}
          />

          <TextField
            id="UsuarioLogin"
            label="Correo"
            variant="outlined"
            value={formRegister.user}
            onChange={(e) => {
              setFormRegister({ ...formRegister, user: e.target.value });
            }}
          />
          <TextField
            id="passLogin"
            type="password"
            label="Contraseña"
            variant="outlined"
            value={formRegister.pass}
            onChange={(e) => {
              setFormRegister({ ...formRegister, pass: e.target.value });
            }}
          />
          <TextField
            id="passLogin"
            type="password"
            label="Confirmar Contraseña"
            variant="outlined"
            value={formRegister.pass2}
            onChange={(e) => {
              setFormRegister({ ...formRegister, pass2: e.target.value });
            }}
          />
          {error !== "" && <Alert severity="error">{error}</Alert>}
          <Button
            sx={{
              backgroundColor: "#012340",
              ":hover": { background: "#03738C" },
            }}
            variant="contained"
            onClick={registerHandle}
            disabled={loading}
          >
            Registrarse
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}
