export function calculateAccessoriesPrice(days, accessories = []) {
	return accessories.reduce((sum, acc) => {
		return sum + (acc.perDay ? acc.price * days : acc.price);
	}, 0);
}
