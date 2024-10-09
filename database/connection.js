import { connect } from "mongoose";
import dotenv from "dotenv";

//Configurar el dotenv para usar variables de entorno
dotenv.config();

const connection = async()=> {
try {
    await connect(process.env.MONGODB_URI);
    console.log("Conectado Correctamente a BD_social_net");
}catch(error){
    console.log("Error al conectar la BD", error);
    throw new Error("¡No se ha podido conectar a la BD");
}
};
export default connection;
