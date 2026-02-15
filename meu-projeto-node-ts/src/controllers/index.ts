import { Request, Response } from 'express';

class Controller {
    public async exampleMethod(req: Request, res: Response): Promise<void> {
        // Lógica para manipular a requisição e enviar uma resposta
        res.send('Hello from Controller!');
    }
}

export default new Controller();