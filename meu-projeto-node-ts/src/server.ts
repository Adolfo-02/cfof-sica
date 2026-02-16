import { Application } from 'express';
import { createServer as createHttpServer, Server } from 'http';

export const createServer = (app: Application): Server => {
    return createHttpServer(app);
};