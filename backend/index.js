const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database/db'); // Ajusta la ruta si es necesario
const cors = require('cors');
const app = express();
const port = 3000;
console.log("hola");
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('<h1>Hola</h1>');
});
app.get('/gastos', async (req, res) => {
  try {
      const connection = await connectToDatabase();
      const [rows, fields] = await connection.execute("SELECT * FROM gastos");
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
  }
});
app.post('/newexpense', async (req, res) => {
  try {
    const { Monto, Descripcion, FormaDePago, usuarioID, categoriaID } = req.body;

    // Log para verificar los datos recibidos
    console.log("Received data: ", req.body);
    console.log("Monto:", Monto);
    console.log("Descripcion:", Descripcion);
    console.log("FormaDePago:", FormaDePago);
    console.log("usuarioID:", usuarioID);
    console.log("categoriaID:", categoriaID);

    // Validación de los campos obligatorios
    if (Monto === undefined || Descripcion === undefined) {
      return res.status(400).json({ error: 'Monto y Descripción son obligatorios' });
    }

    const connection = await connectToDatabase();
    const query = 'INSERT INTO gastos (Monto, Descripcion, FormaDePago, usuarioID, categoriaID) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [
      Monto,
      Descripcion,
      FormaDePago ?? null,
      usuarioID ?? null,
      categoriaID ?? null
    ]);

    await connection.end();

    res.status(201).json({
      text: 'Gasto agregado correctamente',
      gasto: {
        idgastos: result.insertId,
        Monto,
        Descripcion,
        FormaDePago,
        usuarioID,
        categoriaID
      }
    });
  } catch (err) {
    console.error('Error al insertar el gasto:', err);
    res.status(500).json({ error: 'Error al insertar el gasto' });
  }
});
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto: ${port}`);
});
