export function validateRental(data) {
	if (!data.name) throw new Error('Imię i nazwisko wymagane');
	if (!data.email || !data.email.includes('@')) {
		throw new Error('Nieprawidłowy email');
	}
	if (!data.phone) throw new Error('Telefon wymagany');
	if (!data.gdpr) throw new Error('Zgoda RODO wymagana');

	(data.heights || []).forEach(h => {
		if (typeof h !== 'number') {
			throw new Error('Wzrost musi być liczbą');
		}
	});
}
