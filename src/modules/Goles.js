import { Box } from "@mui/system";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/DataContext";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";
import TableGO from "./table/TableGO";

const fetchGO = async (next) => {
  let response;

  try {
    response = await axios.get(
      `server/cuotas.php?${next ? next.split("?")[1] : "q=GO"}`
    );
  } catch (error) {
    console.log(error);
  }
  let result = response.data.results;
  if (response.data.next !== null) {
    const data = await fetchGO(response.data.next);
    console.log(data);
    return result.concat(data);
  }
  console.log(result);

  return result;
};

const Goles = () => {
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
        response = await fetchGO();
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
        src="img/MERCADO +1,5 GOLES.mp4"
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
        <TableGO rows={!loading && data} />
        <Footer />
      </Box>
    </Box>
  );
};

export default Goles;
