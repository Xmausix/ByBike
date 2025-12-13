export function calculateToursPrice(tours = []) {
	return tours.reduce((sum, tour) => sum + tour.price, 0);
}
