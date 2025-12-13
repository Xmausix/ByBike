import { createTour } from './tour.model.js';

const TOURS = []; // ⛔ docelowo DB

export function listTours() {
	return TOURS.filter(t => t.published);
}

export async function getTourById(id) {
	return db.tours.findOne({ id, published: true });
}

export function addTour(data) {
	const tour = createTour(data);
	TOURS.push(tour);
	return tour;
}


export async function getPublishedTours() {
	return db.tours.find({ published: true });
}
