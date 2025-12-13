export function calculateRentalDays(mode, startDate, endDate) {
	if (mode === '3h') return 0.125;
	if (mode === '1d') return 1;

	const start = new Date(startDate);
	const end = new Date(endDate);

	return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
}
