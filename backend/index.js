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
let connection;
(async () => {
  try {
    connection = await connectToDatabase();
  } catch (err) {
    console.error("Error connecting to database:", err);
    process.exit(1); // Exit the process if connection fails
  }
})();
app.get('/gastos', async (req, res) => {
  try {
      const [rows, fields] = await connection.execute("SELECT * FROM gastos");
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
  }
});
app.get('/gastos/total', async (req, res) => {
  try {
    const [rows, fields] = await connection.execute(' SELECT SUM(gastos.monto) AS total_expenses FROM gastos');
    const totalExpenses = rows[0].total_expenses; // Assuming the result is in the first row

    if (totalExpenses === null) {
      // Handle the case where there are no expenses
      res.json({ message: 'No hay gastos registrados' });
    } else {
      res.json({ total_expenses: totalExpenses });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el total de gastos');
  }
});

app.get('/monedas', async (req, res) => {
  try {
      const [rows, fields] = await connection.execute("SELECT * FROM monedas");
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los datos');
  }
});
app.post('/gasto', async (req, res) => {
  try {
    const { Monto, Descripcion, FormaDePago, usuarioID, categoriaID, beneficiario, moneda } = req.body;
    if (Monto === undefined || Descripcion === undefined) {
      return res.status(400).json({ error: 'Monto y Descripción son obligatorios' });
    }

    const query = 'INSERT INTO gastos (Monto, Descripcion, FormaDePago, usuarioID, categoriaID,beneficiario, moneda) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [
      Monto,
      Descripcion,
      FormaDePago ?? null,
      usuarioID ?? null,
      categoriaID ?? null,
      beneficiario ?? null,
      moneda ?? null,
    ]);


    res.status(200).json({
      text: 'Gasto agregado correctamente',
      gasto: {
        idgastos: result.insertId,
        Monto,
        Descripcion,
        FormaDePago,
        usuarioID,
        categoriaID,
        beneficiario,
        moneda
      }
    });
  } catch (err) {
    console.error('Error al insertar el gasto:', err);
    res.status(500).json({ error: 'Error al insertar el gasto' });
  }
});

app.put('gasto/:id', async (req, res) => {
  try {
    const gastoID = req.params.id;
    const { Monto, Descripcion, FormaDePago, usuarioID, categoriaID } = req.body;
    if (!Monto || !Descripcion) {
      return res.status(400).json({ error: 'Monto y Descripción son obligatorios' });
    }
    const query = `
      UPDATE gastos
      SET Monto = ?, Descripcion = ?, FormaDePago = ?, usuarioID = ?, categoriaID = ?
      WHERE id = ?
    `;
    const [results] = await connection.query(query, [Monto, Descripcion, FormaDePago, usuarioID, categoriaID, gastoID]);

    if (results.affectedRows === 0) {
      return null;
    }
    const gastoActualizado = {
      id: gastoID,
      Monto,
      Descripcion,
      FormaDePago,
      usuarioID,
      categoriaID
    };

    return gastoActualizado;


  }catch(err){
    console.error('Error al insertar el gasto:', err);
    res.status(500).json({ error: 'Error al insertar el gasto' });
  }

});
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto: ${port}`);
});
