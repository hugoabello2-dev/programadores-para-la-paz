const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// AGREGA ESTO
app.get('/prueba', (req, res) => {
  res.send('Ruta de prueba funcionando');
});

// YA LO TENÍAS
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});