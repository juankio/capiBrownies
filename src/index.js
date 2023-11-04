const express = require('express');
// const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
// const userRoute = require("./routes/user")

const app = express();
const port= process.env.PORT ||9000;

app.use('/semantic', express.static(path.join(__dirname, '../semantic')));
app.use(express.json());

//ruta para paginas
app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/', (req, res) => {
  const { usuario, contrasena } = req.body;
    if (usuario === 'correo@example.com' && contrasena === 'password') {
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
        res.json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });
app.get('/registro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'registro.html'));
  });

//mongoose  base de datos
// mongoose.connect(process.env.MONGODB_1)
// .then(() => console.log('contetado ala base'))
// .catch((error)=>console.error(error));

app.listen(port,()=> console.log('server prendido'))