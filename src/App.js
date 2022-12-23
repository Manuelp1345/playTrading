import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "./modules/header/nav";
import Footer from "./modules/Footer";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./modules/context/DataContext";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrG-wfDHDuEV7hfIiOvVQHum0itWqBqM",
  authDomain: "playtradingdashboard.firebaseapp.com",
  projectId: "playtradingdashboard",
  storageBucket: "playtradingdashboard.appspot.com",
  messagingSenderId: "1081764229177",
  appId: "1:1081764229177:web:a97df8d568002a1c3d9de8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const urls = [
  "img/videoInicio.mov",
  "img/ViDEO ALEXANDER.mov",
  "img/VIDEO JORGE.mov",
];

function App() {
  const { modalAuth, tabIndex, user } = useContext(DataContext);
  const [videoActive, setVideoActive] = useState({
    url: urls[0],
    color: "#05f2c7",
  });
  const [open, setOpen] = useState(false);
  const [noticia, setNoticia] = useState({
    imgUrl: "",
    titular: "",
    url: "",
  });
  const [noticias, setNoticias] = useState([
    {
      imgUrl: "",
      titular: "Cargando...",
      url: "",
    },
    {
      imgUrl: "",
      titular: "Cargando...",
      url: "",
    },
    {
      imgUrl: "",
      titular: "Cargando...",
      url: "",
    },
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAgregarNoticia = async () => {
    const docRef = await addDoc(collection(db, "noticias"), {
      url: noticia.url,
      imgUrl: noticia.imgUrl,
      titular: noticia.titular,
      fecha: new Date(),
    });

    console.log(docRef);
    handleNoticias();
    setNoticia({
      imgUrl: "",
      titular: "",
      url: "",
    });
  };
  const handleNoticias = async () => {
    const auxNoticias = [];
    const queryDB = query(
      collection(db, "noticias"),
      limit(3),
      orderBy("fecha", "desc")
    );
    const querySnapshot = await getDocs(queryDB);
    querySnapshot.forEach((doc) => {
      auxNoticias.push(doc.data());
    });
    setNoticias(auxNoticias);
    handleClose();
  };

  useEffect(() => {
    (async () => {
      await handleNoticias();
    })();
  }, []);

  const navigate = useNavigate();
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
      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 10,
        }}
      >
        <Typography variant="h4" sx={{ mt: 1, mb: 5 }}>
          Nuestra pasión por el futbol, ahora con play trading, es más rentable!
        </Typography>
        <Box
          sx={{ width: "100%", height: "0.2rem", backgroundColor: "#05f2c7" }}
        ></Box>
        <Typography variant="h3" sx={{ mt: 5, mb: 5, color: "#012340" }}>
          Noticias
        </Typography>
        {user.is_staff && <Button onClick={handleOpen}>Agregar noticia</Button>}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {noticias.map((element) => {
            return (
              <Button
                sx={{
                  width: "33.3%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                onClick={() => {
                  window.open(element.url, "_blank");
                }}
              >
                <Box
                  sx={{ width: "100%" }}
                  component="img"
                  src={element.imgUrl}
                ></Box>
                <Typography>{element.titular}</Typography>
              </Button>
            );
          })}
        </Box>
        <Typography variant="h3" sx={{ mt: 5, mb: 5, color: "#012340" }}>
          LAS REGLAS DEL JUEGO ESTÁN CAMBIANDO
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mt: 10,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            <Box
              sx={{ width: "100%" }}
              component="video"
              src={videoActive.url}
              controls
              autoPlay={true}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Box
                onClick={() => {
                  setVideoActive({ ...videoActive, url: urls[0] });
                }}
                sx={{
                  border: `5px solid ${
                    urls[0] === videoActive.url && videoActive.color
                  }`,
                  cursor: "pointer",
                }}
                component="img"
                src="img/ssvideo1.jpg"
                width="20%"
              ></Box>
              <Box
                onClick={() => {
                  setVideoActive({ ...videoActive, url: urls[1] });
                }}
                sx={{
                  border: `5px solid ${
                    urls[1] === videoActive.url && videoActive.color
                  }`,
                  cursor: "pointer",
                }}
                component="img"
                src="img/ssvideo2.jpg"
                width="20%"
              ></Box>
              <Box
                onClick={() => {
                  setVideoActive({ ...videoActive, url: urls[2] });
                }}
                sx={{
                  border: `5px solid ${
                    urls[2] === videoActive.url && videoActive.color
                  }`,
                  cursor: "pointer",
                }}
                component="img"
                src="img/ssvideo3.jpg"
                width="20%"
              ></Box>
            </Box>
          </Box>
          <Typography
            sx={{
              width: { xs: "100%", md: "30%" },
              fontSize: "1.3rem",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Bienvenido a la plataforma pionera en Latino America especializada
            en trading deportivo. Disfruta al máximo nuestra tecnología de
            inteligencia artificial y obtén los mejores resultados del mercado.
            <br /> <br />
            Nuestro equipo de profesionales en tecnología, finanzas y deporte,
            están aquí para brindarte el más alto porcentaje de rentabilidad en
            toda la región.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('img/Seccion intermedia.jpg')",
          backgroundPosition: "center",
          backgroundSize: "100% 90vh",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
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
              sx={{ textAlign: "center", width: "100%", fontSize: "1.3rem" }}
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
              sx={{ textAlign: "center", width: "100%", fontSize: "1.3rem" }}
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
              sx={{ textAlign: "center", width: "100%", fontSize: "1.3rem" }}
            >
              TRADING BOT
            </Typography>
          </Button>
        </Box>
      </Box>
      {/*      <Box
        sx={{
          mt: 5,
          display: "flex",
          px: 5,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" width="80%" src="img/g4.png" />
        <Typography
          sx={{
            flexGrow: 1,
            width: "90%",
            fontSize: "1.3rem",
            textAlign: "center",
            mt: 4,
            mb: 15,
          }}
        >
          Bienvenido a la plataforma pionera en Latino America especializada en
          trading deportivo. Disfruta al máximo nuestra tecnología de
          inteligencia artificial y obtén los mejores resultados del mercado.
          Nuestro equipo de profesionales en tecnología, finanzas y deporte,
          están aquí para brindarte el más alto porcentaje de rentabilidad en
          toda la región.
        </Typography>
      </Box> */}
      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      ></Box>
      <Footer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            id="passLogin"
            type="text"
            label="Url de la noticia"
            variant="outlined"
            value={noticia.url}
            onChange={(e) => {
              setNoticia({ ...noticia, url: e.target.value });
            }}
          />
          <TextField
            id="passLogin"
            type="text"
            label="Titular de la noticia"
            variant="outlined"
            value={noticia.titular}
            onChange={(e) => {
              setNoticia({ ...noticia, titular: e.target.value });
            }}
          />
          <TextField
            id="passLogin"
            type="text"
            label="Url de Imagen de la noticia"
            variant="outlined"
            value={noticia.imgUrl}
            onChange={(e) => {
              setNoticia({ ...noticia, imgUrl: e.target.value });
            }}
          />
          <Button
            sx={{
              backgroundColor: "#012340",
              ":hover": { background: "#03738C" },
            }}
            variant="contained"
            onClick={handleAgregarNoticia}
          >
            Agregar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default App;

export const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        background:
          " radial-gradient(circle, rgba(186,186,186,0.5) 25%, rgba(3,115,140,1) 50%, rgba(1,35,64,1) 100%)",
        pt: -10,
      }}
    >
      <Box
        sx={{ width: "30%", mt: -10, pb: 0 }}
        component="img"
        src="img/IMAGOTIPO PLAY TRADING PRINCIPAL.png"
      />
      <CircularProgress sx={{ mt: -10 }} />
    </Box>
  );
};
