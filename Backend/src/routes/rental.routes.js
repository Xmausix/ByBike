import { Router } from 'express';
import { createRentalController } from '../modules/rentals/rental.controller.js';

const router = Router();

router.post('/', createRentalController);

export default router;
