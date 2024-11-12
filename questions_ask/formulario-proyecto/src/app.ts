import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware para procesar datos de formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para el formulario
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../views/form.html'));
});

// Ruta para manejar las respuestas
app.post('/submit', (req: Request, res: Response) => {
  const { name, age, favoriteColor } = req.body;
  console.log(`Nombre: ${name}, Edad: ${age}, Color favorito: ${favoriteColor}`);
  res.send(`¡Gracias por enviar tus respuestas, ${name}!`);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

