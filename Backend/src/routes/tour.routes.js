import { Router } from 'express';
import { listTours, getTourById } from '../modules/tours/tour.service.js';

const router = Router();

router.get('/', (req, res) => {
	res.json(listTours());
});

router.get('/:id', (req, res) => {
	const tour = getTourById(req.params.id);
	if (!tour) return res.status(404).end();
	res.json(tour);
});

export default router;
