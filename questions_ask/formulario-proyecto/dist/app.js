"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para procesar datos de formulario
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Ruta para el formulario
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../views/form.html'));
});
// Ruta para manejar las respuestas
app.post('/submit', (req, res) => {
    const { name, age, favoriteColor } = req.body;
    console.log(`Nombre: ${name}, Edad: ${age}, Color favorito: ${favoriteColor}`);
    res.send(`¡Gracias por enviar tus respuestas, ${name}!`);
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
