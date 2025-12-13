import { Router } from 'express';
import { createTourAdmin } from '../modules/admin/tour.admin.controller.js';

const router = Router();

router.post('/tours', createTourAdmin);

export default router;
