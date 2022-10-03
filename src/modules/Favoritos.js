import { Box } from "@mui/system";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";
import TableFa from "./table/TableFa";
moment.locale("es");

const fetchFA = async (url) => {
  let response;
  try {
    response = await axios.get(url, {
      headers: {
        Authorization: "Token e366fedf18467d39a36e099fd5391ebab48b7c33",
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

const Favoritos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const video = document.querySelector("#video");
    (async () => {
      await video.play();
      video.onended = () => {
        video.style.height = "50vh";
      };
      let response;
      try {
        response = await fetchFA(
          "http://soltechgroup.net:8080/api/cuotas/?q=FA"
        );
      } catch (error) {
        console.log(error);
      }
      console.log("Response", response);
      setData(
        response.map((row) => {
          console.log(row.fechahora);
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, MMMM Do YYYY, h:mm:ss a"
          );
          return row;
        })
      );
    })();
  }, []);

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
        src="img/MERCADO FAVORITOS A GANAR.mp4"
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
        <TableFa rows={data} />
        <Footer />
      </Box>
    </Box>
  );
};

export default Favoritos;
