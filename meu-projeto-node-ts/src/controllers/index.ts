import { Request, Response } from 'express';

export const someControllerFunction = async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Hello from Controller!' });
};

export const exampleMethod = async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Example endpoint working!' });
};