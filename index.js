import express from 'express';
import db from './config/db.js';
import { Viaje } from './models/Viaje.js';
/*const express = require("express"); */
import router from './routes/index.js';

const app = express();

//Conectar con la base de datos
db.authenticate().catch((error) => console.log(error));

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitando PUG
app.set('view engine', 'pug');

//Obtener año actual
app.use(async (req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.actualYear = year;
  res.locals.siteName = 'Agencia de Viajes';
  next();
});

//Definir body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//Definir carpeta Publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${port} 🎇🎆✨`);
});
