import express from 'express';
import mongoose from 'mongoose';
import expressHandlebars from 'express-handlebars';
import path from 'path';

import viewRoutes from './routes/viewRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/semillero-gorrion', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB establecida.');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.use('/', viewRoutes);
app.use('/', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
