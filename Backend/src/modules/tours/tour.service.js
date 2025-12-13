import { createTour } from './tour.model.js';

const TOURS = []; // ⛔ docelowo DB

export function listTours() {
	return TOURS.filter(t => t.published);
}

export function getTourById(id) {
	return TOURS.find(t => t.id === id);
}

export function addTour(data) {
	const tour = createTour(data);
	TOURS.push(tour);
	return tour;
}
