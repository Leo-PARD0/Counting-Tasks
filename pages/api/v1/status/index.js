function status(request, response) {
  response.status(200).json({ chave: "Está tudo funcionando" });
}

export default status;
