import express from "express"; //traemos express
import clientesRouter from "./routes/clientes.routes.js"; //traemos router clientes

const app = express();

app.use(express.json());

app.use("/clientes", clientesRouter); // conectamos el router

const PORT = 3000;

app.listen (PORT, () => { //levantamos el servidor en el puerto 3000
    console.log(`servidor corriendo en http://localhost:${PORT}`);    
});