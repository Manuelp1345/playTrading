import * as React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";

const columns = [
  { field: "id", headerName: "ID", width: 70, hide: true },
  {
    field: "local",
    headerName: "Local",
    width: 130,
    headerClassName: "backGround",

    headerAlign: "center",
    flex: 1,
    align: "center",
  },
  {
    field: "vs",
    headerName: "VS",
    width: 50,
    headerClassName: "backGround",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "visitante",
    headerName: "Visitante",
    width: 130,
    headerClassName: "backGround",
    headerAlign: "center",
    textAlign: "center",
    flex: 1,
    align: "center",
  },
  {
    field: "resultado",
    headerName: "Resultados",
    type: "number",
    width: 100,
    headerClassName: "backGround",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "fechahora",
    headerName: "FECHA Y HORA",
    width: 130,
    headerClassName: "backGround",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{
        gap: "2rem",
        justifyContent: "space-between",
        color: "black",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ gap: "1rem", display: "flex" }}>
        <GridToolbarColumnsButton sx={{ color: "black" }} />
        <GridToolbarFilterButton sx={{ color: "black" }} />
      </Box>
      <GridToolbarExport sx={{ color: "black" }} />
    </GridToolbarContainer>
  );
}

export default function TableHistory({ rows, loading }) {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        "& .backGround": {
          background: "#012340",
          color: "white",
          textAlign: "center",
          width: "100%",
        },
      }}
    >
      <DataGrid
        id="TableHistory"
        sx={{
          zIndex: loading ? -1 : 1,
        }}
        localeText={{
          toolbarExport: "Exportar",
          toolbarExportCSV: "Descargar CSV",
          toolbarExportPrint: "Imprimir",
          toolbarFilters: "Filtrar",
          filterPanelColumns: "Columna",
          filterPanelOperators: "Filtro",
          filterOperatorContains: "Contiene",
          filterOperatorEquals: "Igual A",
          filterOperatorStartsWith: "Inicia Con",
          filterOperatorEndsWith: "Termina Con",
          filterOperatorIsEmpty: "Es Vacio",
          filterOperatorIsNotEmpty: "No esta vacio",
          filterOperatorIsAnyOf: "Cualquiera de",
          filterPanelInputPlaceholder: "valor",
          filterPanelInputLabel: "Valor",
          toolbarColumns: "Columnas",
          columnsPanelTextFieldLabel: "Buscar Columna",
          columnsPanelTextFieldPlaceholder: "",
          columnsPanelHideAllButton: "Ocultar todas",
          columnsPanelShowAllButton: "Mostrar todas",
          noRowsLabel:
            "Al tercer día de estadísticas se mostraran los resultados.",
        }}
        loading={loading}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{ Toolbar: CustomToolbar }}
      />
    </Box>
  );
}
