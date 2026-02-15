import { Router } from 'express';
import { someControllerFunction } from '../controllers/index';

const router = Router();

router.get('/endpoint', someControllerFunction);

export default router;