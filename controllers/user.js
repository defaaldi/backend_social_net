// Método de prueba del controlador user
export const testUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde el controlador de Usuarios",
  });
};

//Metodo Registro de Usuarios
export const register = (req, res) => {
  return res.status(200).send({
    message: "Registro de Usuarios",
  });
};
