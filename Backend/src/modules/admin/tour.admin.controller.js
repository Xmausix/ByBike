import { addTour } from '../../tours/tour.service.js';

export function createTourAdmin(req, res) {
	const tour = addTour(req.body);
	res.status(201).json(tour);
}
