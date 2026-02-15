import express from 'express';
import { createServer } from 'http';
import { initRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
initRoutes(app);

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});