export async function checkAvailability(categoryId, days) {
	// TODO: sprawdzić ilość rowerów vs rezerwacje
	return true;
}

export async function softHold(categoryId) {
	// TODO: soft-hold (np. Redis / DB, 15 min)
	return true;
}
