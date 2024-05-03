const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());

let products = [];
products.push({ nome: "zapatillas", precio: 20, id: 1 });
products.push({ nome: "notebook", precio: 2000, id: 2 });
products.push({ nome: "camara", precio: 5, id: 3 });

let nextProductId = 4;
app.get('/', (req, res) => {
    res.send('<h1>Hola</h1>');
});

app.post("/createProduct", (req, res) => {
    const { name, precio } = req.body;
    const newProduct = {
        name,
        precio,
        id: nextProductId
    };
    nextProductId++; 
    products.push(newProduct);
    res.status(201).json({
        text: "Producto agregado correctamente",
        product: newProduct
    });
});
app.get("/getProductByID", (req, res) => {
    const productId = parseInt(req.query.id);
    const product = products.find(_product => _product.id === productId);
    if (product) {
        return res.status(200).json({
            text: "La siguiente consulta devolvió lo siguiente",
            product: product
        });
    } else {
        return res.status(404).json({
            text: "No se encontró ningún producto con el ID proporcionado",
            error: 300
        });
    }
});
app.delete("/deleteProductByID", (req, res) => {
    const productId = parseInt(req.body.id);
    console.log(productId);
    const indiceAEliminar = products.findIndex(producto => producto.id === productId);
    if (indiceAEliminar !== -1) {
        products.splice(indiceAEliminar, 1);
        console.log(products);
        return res.status(200).json({
            text: "Se ha borrado el elemento exitosamente!",
        });
    }else{
        return res.status(404).json({
            text: "No se encontró ningún producto con el ID proporcionado",
        });
    }   
});
app.put("/updateProductByID", (req, res) => {
    const productId = parseInt(req.body.id);
    const indiceAActualizar = products.findIndex(producto => producto.id === productId);
    if (indiceAActualizar !== -1) {
        products[indiceAActualizar] = req.body;
        console.log(products);
        return res.status(200).json({
            text: "Se ha actualizado el elemento exitosamente!",
            product: products[indiceAActualizar]
        });
    }else{
        return res.status(404).json({
            text: "No se encontró ningún producto con el ID proporcionado",
        });
    }   
});

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto: ${port}`);
});