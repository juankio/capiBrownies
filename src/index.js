const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port= process.env.PORT ||9000;


app.use('/semantic', express.static(path.join(__dirname, '../semantic')));
app.use('/src', express.static(path.join(__dirname, '../src')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());

//ruta para paginas
app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/registro.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'registro.html'));
});
app.get('/productos.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Productos.html'));
});
app.get('/productos.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'scripts', 'productos.js'));
});
//POST

app.post('/', (req, res) => {
  const { usuario, contrasena } = req.body;
  if (usuario === 'correo@example.com' && contrasena === 'password') {
      res.status(200).json({ mensaje: 'Credenciales correctas' });
  } else {
      res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});
app.listen(port,()=> console.log('server prendido'))