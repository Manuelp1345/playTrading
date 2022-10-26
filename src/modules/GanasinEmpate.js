import { Box } from "@mui/system";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/DataContext";
import { REACT_APP_TOKEN } from "./envariomens";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";
import TableGa from "./table/TableGA";

const fetchFA = async (url) => {
  let response;
  try {
    response = await axios.get(url, {
      headers: {
        Authorization: `Token ${REACT_APP_TOKEN}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
  let result = response.data.results;
  if (response.data.next !== null) {
    const data = await fetchFA(response.data.next);
    console.log(data);
    return result.concat(data);
  }
  console.log(result);

  return result;
};

const GanaSinEmpate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = React.useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.auth === undefined || user.auth === false)
      navigate("/trading-bot");
    if (user.is_active === false) navigate("/trading-bot");

    if (user.is_premium === false && user.is_staff === false)
      navigate("/trading-bot");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const video = document.querySelector("#video");
    (async () => {
      await video.play();
      video.onended = () => {
        video.style.height = "50vh";
        setLoading(false);
      };
      let response;
      try {
        response = await fetchFA(
          "http://soltechgroup.net:8080/api/cuotas/?q=GA"
        );
      } catch (error) {
        console.log(error);
      }
      console.log("Response", response);
      setData(
        response.map((row) => {
          console.log(row.fechahora);
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, MMMM Do YYYY, h:mm a"
          );
          row.vs = "VS";
          return row;
        })
      );
    })();
  }, [user, navigate]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        height: "100%",
        width: "100%",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <ResponsiveAppBar />
      <Box
        component="video"
        src="img/MERCADO GANA SIN EMPATE.mp4"
        id="video"
        sx={{
          top: "0",
          height: "100vh",
          width: "100%",
          transition: "all 0.5s ease-in-out",
          zIndex: "1",
          objectFit: "cover",
          position: "absolute",
          bottom: "0",
          objectPosition: "center bottom",
        }}
      ></Box>
      <Box
        id="containerTable"
        sx={{
          marginTop: "50vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "0.5rem",
            backgroundColor: "#05f2c7",
          }}
        />
        <TableGa rows={!loading && data} />
        <Footer />
      </Box>
    </Box>
  );
};

export default GanaSinEmpate;
