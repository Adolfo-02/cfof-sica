import express from 'express';
import { createServer } from './server';
import { setupRoutes } from './routes';

const app = express();
const server = createServer(app);

app.use(express.json());

setupRoutes(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});