import express from "express";
import mongoose from "mongoose";
import { routerAPI }  from "./routes/index.js";
import cors from "cors";
const app = express();
// importante, agregar para tener acceso desde otros origenes
app.use( cors() );
const port = 3000;

mongoose.connect( 'mongodb://127.0.0.1:27017/blog', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> Blog </h1>');
})

// Llamo al RouterAPI y le paso la aplicación
routerAPI(app);


app.listen( 3000, () =>{
    console.log('Servidor escuchando en el puerto ' + port);
})
