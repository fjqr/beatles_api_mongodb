const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")
const queriesRoutes = require("./rutas/queries.routes");
const connectDataBase = require("./database");

const port = 3000;
app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(queriesRoutes);

connectDataBase();

app.listen(port, () => {
  console.log(`Servidor escuchando en el servidor ${port}`);
});
