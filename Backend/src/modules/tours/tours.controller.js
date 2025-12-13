import * as service from './tours.service.js';

export async function getPublishedTours(req, res) {
	const tours = await service.getPublishedTours();
	res.json(tours);
}

export async function getTourById(req, res) {
	const tour = await service.getTourById(req.params.id);
	res.json(tour);
}
export async function downloadPdf(req, res) {
	validateToken(req.query.token);

	const tour = await service.getTourById(req.params.id);
	res.redirect(tour.pdf_pl);
}
