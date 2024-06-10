const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database/db'); // Ajusta la ruta si es necesario

const app = express();
const port = 3000;
console.log("hola");
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Hola</h1>');
});
app.get('/gastos', async (req, res) => {
  try {
      const connection = await connectToDatabase();
      const [rows, fields] = await connection.execute("SELECT * FROM gastos");
      console.log(rows, fields);
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
  }
});
app.post('/gasto', async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const { Monto, Descripcion, FormaDePago, usuarioID, categoriaID } = req.body;

    const query = 'INSERT INTO gastos (Monto, Descripcion, FormaDePago, usuarioID, categoriaID) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [Monto, Descripcion, FormaDePago, usuarioID, categoriaID]);

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
