// Middleware para validar los métodos HTTP permitidos
const validarMetodosHTTP = (req, res, next) => {
    const metodosValidos = ["GET", "POST", "PUT", "DELETE"];
  
    if (!metodosValidos.includes(req.method)) {
      return res.status(405).json({ error: "Método HTTP no permitido" });
    }
  
    next();
  };
  
  module.exports = { validarMetodosHTTP };
  