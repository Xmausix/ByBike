export function calculateBikePrice(days, pricing) {
	if (days >= 7) return days * pricing.price_7d;
	if (days >= 3) return days * pricing.price_3d;
	return days * pricing.price_1d;
}
