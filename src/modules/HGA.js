import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import { REACT_APP_TOKEN } from "./envariomens";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";
import TableHistory from "./table/TableHistory";

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

const Historico = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  useEffect(() => {
    (async () => {
      let response;
      try {
        response = await fetchFA(
          "http://soltechgroup.net:8080/api/partidos?q=GA"
        );
      } catch (error) {
        console.log(error);
      }
      setData2(
        response.map((row) => {
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, MMMM Do YYYY, h:mm a"
          );
          row.vs = "VS";
          return row;
        })
      );

      try {
        response = await fetchFA(
          "http://soltechgroup.net:8080/api/partidos?q=FA"
        );
      } catch (error) {
        console.log(error);
      }
      setData(
        response.map((row) => {
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, MMMM Do YYYY, h:mm a"
          );
          row.vs = "VS";
          return row;
        })
      );

      try {
        response = await fetchFA(
          "http://soltechgroup.net:8080/api/partidos?q=GO"
        );
      } catch (error) {
        console.log(error);
      }
      setData1(
        response.map((row) => {
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, MMMM Do YYYY, h:mm a"
          );
          row.vs = "VS";
          return row;
        })
      );
      setLoading(false);
    })();
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: "url('img/SECCION HISTORIAL.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></Box>
      <Box
        sx={{ width: "100%", height: "0.5rem", backgroundColor: "#05f2c7" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          my: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: 50,
          }}
        >
          Favoritos
        </Typography>
        <TableHistory loading={loading} rows={data} />
        <Typography
          sx={{
            fontSize: 50,
          }}
        >
          Goles
        </Typography>
        <TableHistory loading={loading} rows={data1} />
        <Typography
          sx={{
            fontSize: 50,
          }}
        >
          Gana sin Empate
        </Typography>
        <TableHistory loading={loading} rows={data2} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Historico;
