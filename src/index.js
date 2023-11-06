const oracledb = require('oracledb');

const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;

(async () => {
  try {
    connection = await oracledb.getConnection({ user: "ADMIN", password: "capiBrownies123", connectionString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1521)(host=adb.mx-monterrey-1.oraclecloud.com))(connect_data=(service_name=g04a8e4b91f3260_capibrownies_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))" });

    // Create a table
   await connection.execute(`begin execute immediate 'drop table nodetab'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
   await connection.execute(`create table nodetab (id number, data varchar2(20))`);
   
   // Insert some rows
   const sql = `INSERT INTO nodetab VALUES (:1, :2)`;
   const binds = [ [1, "First" ], [2, "Second" ], [3, "Third" ], [4, "Fourth" ], [5, "Fifth" ], [6, "Sixth" ], [7, "Seventh" ] ];
   await connection.executeMany(sql, binds);
   // connection.commit(); // uncomment to make data persistent
   
   // Now query the rows back
   const result = await connection.execute(`SELECT * FROM nodetab`);
   console.dir(result.rows, { depth: null });


    app.use('/semantic', express.static(path.join(__dirname, '../semantic')));
    app.use('/src', express.static(path.join(__dirname, '../src')));
    app.use('/public', express.static(path.join(__dirname, 'public')));

    app.use(express.json());

    // ruta para paginas
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

    // fotos
    app.get('/brwnie.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'brwnie.jpg'));
    });
    app.get('/galleta.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'galleta.jpg'));
    });
    app.get('/nutella.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'nutella2.jpg'));
    });
    app.get('/logo.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'logo2.png'));
    });

    // POST
    app.post('/', (req, res) => {
      const { usuario, contrasena } = req.body;
      if (usuario === 'correo@example.com' && contrasena === 'password') {
        res.status(200).json({ mensaje: 'Credenciales correctas' });
      } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
    });

    app.listen(port, () => console.log('Server is running on port', port));
  } catch (error) {
    console.error('Error connecting to Oracle Cloud:', error);
  }
})();
