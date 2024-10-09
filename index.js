
// Importar dependencias (configurar en package.json)
import express from "express";
import connection from "./database/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoutes from "./routes/users.js";
import PublicationRoutes from "./routes/publications.js";
import FollowRoutes from "./routes/follows.js"

//Mensaje de Bienvenida Para Verficar que ejecutó la API de Node
console.log("API de Node ejecutandose Correctamente");

// Conexión a la Base de Datos
connection();

// Crear el servidor node
const app = express();
const puerto = process.env.PORT || 3900;

// Configurar cors para que acepte peticiones del frontend
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));

//Configurar los datos desde los formularios para convertirlos en objetos de JavaScrip
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

// Configurar el servidor de Node
app.listen(puerto, () => {
  console.log("Servidor de Node ejecutándose en el puerto", puerto);
});

export default app;