import { createRental } from './rental.service.js';

export async function createRentalController(req, res) {
	try {
		const rental = await createRental(req.body);
		res.status(201).json(rental);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
}
