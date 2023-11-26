const oracledb = require('oracledb');

const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 9000;

let connection;

(async () => {
  try {
    connection = await oracledb.getConnection({ user: "ADMIN", password: "capiBrownies123", connectionString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1521)(host=adb.mx-monterrey-1.oraclecloud.com))(connect_data=(service_name=g04a8e4b91f3260_capibrownies_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))" });

    // Create a table
  //  await connection.execute(`begin execute immediate 'drop table nodetab'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
  //  await connection.execute(`create table nodetab (id number, data varchar2(20))`);
   
   // Insert some rows
  //  const sql = `INSERT INTO nodetab VALUES (:1, :2)`;
  //  const binds = [ [1, "First" ], [2, "Second" ], [3, "Third" ], [4, "Fourth" ], [5, "Fifth" ], [6, "Sixth" ], [7, "Seventh" ] ];
  //  await connection.executeMany(sql, binds);
   // connection.commit(); // uncomment to make data persistent
   
   // Now query the rows back
  //  const result = await connection.execute(`SELECT * FROM nodetab`);
  //  console.dir(result.rows, { depth: null });


    app.use('/semantic', express.static(path.join(__dirname, '../semantic')));
    app.use('/src', express.static(path.join(__dirname, '../src')));
    app.use('/public', express.static(path.join(__dirname, 'public')));

    app.use(express.json());
    
    // Guardar la seccion 
    app.use(session({
      secret: 'capiBrownies-2x1-losJuevesdeEnero',
      resave: false,
      saveUninitialized: true,
    }));


    // ruta para paginas
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'login.html'));
    });

    app.post('/', async (req, res) => {
      try {
          const { correo, contrasena } = req.body;
          // Llamar al procedimiento almacenado para verificar el usuario
          const result = await connection.execute(
              'BEGIN login(:in_correo, :in_contrasena, :out_usuario_id); END;',
              {
                  in_correo: correo,
                  in_contrasena: contrasena,
                  out_usuario_id: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
              }
          );
  
          const usuarioId = result.outBinds.out_usuario_id;
  
          // Verificar si el usuario existe
          if (usuarioId !== null) {
              // Almacenar el usuario_id en la sesión (puedes usar alguna librería de manejo de sesiones)
              req.session.usuarioId = usuarioId;
  
              // Redirigir a la página de inicio o a donde sea necesario
              res.redirect('/index.html');
          } else {
              // El usuario no existe, manejar la lógica correspondiente (puedes mostrar un mensaje de error, redirigir a otra página, etc.)
              res.status(401).send('Credenciales incorrectas');
          }
      } catch (error) {
          console.error('Error:', error);
          res.status(500).send('Error en el servidor.');
      }
    });
  

    // Páginas HTML
    app.get('/index.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

    app.get('/registro.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'registro.html'));
    });
    
    app.get('/conocenos.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'conocenos.html'));
    });

    app.get('/regular.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'regular.html'));
    });

    app.get('/nuez.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'nuez.html'));
    });
    
    app.get('/nutella.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'nutella.html'));
    });
    
    app.get('/coco.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'coco.html'));
    });
    
    app.get('/zebra.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'zebra.html'));
    });
    
    app.get('/oreo.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'oreo.html'));
    });
    
    app.get('/cheesecake.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'cheesecake.html'));
    });
    
    app.get('/brookie.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'brookie.html'));
    });
  
    app.post('/registro.html', async (req, res) => {
      try{
          const { nombre, apellido, correo, contra,contra2 } = req.body;
          console.log('Datos recibidos:', nombre, apellido, correo, contra)
          if (contra === contra2) {
            res.status(200).json({ mensaje: 'Registro exito' });
          // Call the stored procedure
          const result = await connection.execute(
            `BEGIN
                AGREGARUSUARIO(:in_nombre, :in_apellido, :in_correo, :in_contra);
            END;`,
            {
                in_nombre: nombre,
                in_apellido: apellido,
                in_correo: correo,
                in_contra: contra,
            }
          );

          const result2 = await connection.execute(
            `BEGIN
                ASIGNARCARRITO(:in_correo);
            END;`,
            {
                in_correo: correo,
            }
          );

        console.log("Exito"); 

          } else {
            res.status(401).json({ mensaje: 'Algo salio mal vuelvalo a intentar' });
          }
         
        } catch (error) {          
        if (error.errorNum === 20001) {
            // Password mismatch error
            console.error('Password mismatch error:', error.message);
            // Send a response indicating the password mismatch
            res.status(400).send('El correo ya esta registrado.');
        } else {
            // Other errors
            console.error('Error:', error);
            // Send a generic error response
            res.status(500).send('Error en el servidor.');
          }
        }
      });
    
    
    app.get('/productos.html', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'Productos.html'));
    });


    app.get('/usuario.html', async (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'usuario.html'));
    });

    app.post('/usuario.html', async (req, res) => {
      try {
        const usuarioId = req.session.usuarioId;
        // Llamar al procedimiento almacenado
        const result = await connection.execute(
            'BEGIN ObtenerCapiPoints(:in_usuario_id, :out_nombre, :out_apellido, :out_correo, :out_capiPoints); END;',
            {
                in_usuario_id: usuarioId,
                out_nombre: { type: oracledb.STRING, dir: oracledb.BIND_OUT },
                out_apellido: { type: oracledb.STRING, dir: oracledb.BIND_OUT },
                out_correo: { type: oracledb.STRING, dir: oracledb.BIND_OUT },
                out_capiPoints: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
            }
        );

        const userData = {
            nombre: result.outBinds.out_nombre,
            apellido: result.outBinds.out_apellido,
            correo: result.outBinds.out_correo,
            capiPoints: result.outBinds.out_capiPoints
        };
        
        console.log('>:)',userData)

        // Renderizar la página usuario.html con los datos
        // res.render('usuario', { usuario: userData });
        res.status(200).json(userData);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error en el servidor.');
    }
  });

  

    // Scripts
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
      res.sendFile(path.join(__dirname, 'img', 'nutella.jpg'));
    });
    app.get('/coco.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'coco.jpg'));
    });
    app.get('/zebra.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'zebra.jpg'));
    });
    app.get('/oreo.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'oreo.jpg'));
    });
    app.get('/cheesecake.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'cheesecake.jpg'));
    });
    app.get('/brookie.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'brookie.jpg'));
    });

    app.get('/logo.jpg', (req, res) => {
      res.sendFile(path.join(__dirname, 'img', 'logo2.png'));
    });
    
    app.listen(port, () => console.log('Server is running on port', port));
  } catch (error) {
    console.error('Error connecting to Oracle Cloud:', error);
  }
})();
