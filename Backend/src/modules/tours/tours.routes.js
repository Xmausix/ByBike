import express from 'express';
import { getPublishedTours, getTourById } from './tours.controller.js';
import {requireAuth} from '../../../middlewares/auth.middleware.js'
import { createTour } from './tour.model.js';
const router = express.Router();

router.get('/', getPublishedTours);
router.get('/:id', getTourById);
router.post('/admin/tours', requireAuth, createTour);

export default router;
