import { Application } from 'express';
import { someControllerFunction, exampleMethod } from '../controllers';

export const setupRoutes = (app: Application): void => {
    app.get('/api/endpoint', someControllerFunction);
    app.get('/api/example', exampleMethod);
    app.get('/api/health', (req, res) => {
        res.json({ status: 'ok' });
    });
};