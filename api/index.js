//importaciones
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

//uso de json
app.use(cors());
app.use(express.json());

const usuarios = [


];
// Ruta de prueba
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde la API!' });
});

//servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//conexion
const registrosRoutes = require('./routes/registros');
app.use('/api/registros', registrosRoutes);