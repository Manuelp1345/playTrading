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
    console.log(`Iniciando funcion fetchFA...NEXT DATOS:${next ? next.split("?")[1] : "q=FA"}`);
    response = await axios.get(
      `server/partidos.php?q=FA`
    );
    console.log(response.data.results);
    console.log(`Terminando funcion fetchFA ${response.data.results}`);
  } catch (error) {
    console.log(error);
  }
  console.log(`response.data.results: ${response.data.results}`)
  let result = response.data.results;
  console.log(`Revisando response.data.next  aXios.${response}.data: ${response.data}.next: ${response.data.next}`);
  console.log(`TERMINA PEGAO Captura de API con fetchFA...`);
  return result;

};

const HFA = () => {
  console.log(`Iniciando HFA...`);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    (async () => {
      let response;
      console.log(`Cargando Filtrado de partidos ...`);
      try {
        response = await fetchFA();
         console.log(`Respuesta useEffect: ...`);
         console.log(response);
      } catch (error) {
        console.log(error);
      }
      console.log(response);
      const filterr = response.filter(
        (row) =>
          //  se discrimina las tuplas de consulta api solo a campo status
          row.status !== false
          // moment().diff(moment(row.fechahora), "hours") > 12 &&
          // moment().diff(moment(row.fechahora), "day") === 0 &&
      );
      console.log(filterr);
      setData(
        filterr.map((row) => {
          row.fechahora = moment(`${row.fechahora}`).format(
            "dddd, DD MMMM YYYY"
          );
          if ((row.goles_local === null) || (row.goles_visitante === null)) {
            row.resultado = ` Pendiente `;
            } else {
            row.resultado = `${row.goles_local}-${row.goles_visitante}`;
          }
          row.vs = "VS";
          console.log(`Termina Filtrado y USEEFFECTS ${filterr}`);
          return row;
        })
      );
      setLoading(false);
    })();
  }, []);
  console.log(`Terminando deploy de tabla y render...`);
  return (
    <Box sx={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: "url('img/HIST_FAVOR.jpg')",
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
      </Box>
      <Footer />
    </Box>
  );
};

export default HFA;
