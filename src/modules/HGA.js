import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import Footer from "./Footer";
import ResponsiveAppBar from "./header/nav";
import TableHistory from "./table/TableHistory";

const fetchFA = async (next) => {
  let response;

  try {
    response = await axios.get(
      //`server/partidos.php?${next ? next.split("?")[1] : "q=GA"}`
      `server/partidos.php?q=GA`
    );
  } catch (error) {
    console.log(error);
  }
  let result = response.data.results;
  /*if (response.data.next !== null) {
    const data = await fetchFA(response.data.next);
    console.log(data);
    return result.concat(data);
  }*/
  console.log(result);

  return result;
};

const HGA = () => {
  const [loading, setLoading] = React.useState(true);
  const [data2, setData2] = React.useState([]);

  useEffect(() => {
    (async () => {
      let response;
      try {
        response = await fetchFA();
      } catch (error) {
        console.log(error);
      }
      const filterr = response.filter(
        (row) =>
          //  se discrimina las tuplas de consulta api solo a campo status
          row.status !== false
          // moment().diff(moment(row.fechahora), "hours") > 12 &&
          // moment().diff(moment(row.fechahora), "day") === 0 &&
          // row.goles_local !== null
      );
      setData2(
        filterr.map((row) => {
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, DD MMMM YYYY"
          );
          // Define un mensaje si no hay goles
          if ((row.goles_local === null) || (row.goles_visitante === null)) {
            row.resultado = ` Pendiente `;
            } else {
            row.resultado = `${row.goles_local}-${row.goles_visitante}`;
          }
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
          backgroundImage: "url('img/HIST_GANA_SIN_EMP.jpg')",
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
          Gana sin Empate
        </Typography>
        <TableHistory loading={loading} rows={data2} />
      </Box>
      <Footer />
    </Box>
  );
};

export default HGA;
