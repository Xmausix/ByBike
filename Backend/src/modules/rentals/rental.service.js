import { calculateRentalDays } from '../../utils/dates.js';
import { calculateBikePrice } from '../pricing/pricing.service.js';
import { calculateAccessoriesPrice } from '../accessories/accessories.service.js';
import { checkAvailability, softHold } from '../availability/availability.service.js';
import { validateRental } from './rental.validation.js';

import { createPaymentIntent } from '../payments/payment.service.js';
import { calculateToursPrice } from '../orders/order.service.js';

export async function createRental(data) {
	// 🔒 walidacja danych klienta
	validateRental(data);

	// 📅 tryb wynajmu
	const days = calculateRentalDays(
		data.mode,
		data.startDate,
		data.endDate
	);

	// 🚲 dostępność + soft-hold
	await checkAvailability(data.categoryId, days);
	await softHold(data.categoryId);

	// 💰 ceny
	const bikePrice = calculateBikePrice(days, data.pricing);
	const accessoriesPrice = calculateAccessoriesPrice(
		days,
		data.accessories
	);

	// 🧭 Self Guided Tours
	const toursPrice = calculateToursPrice(data.tours || []);

	const total = bikePrice + accessoriesPrice + toursPrice;

	// ⏳ rezerwacja oczekująca na płatność
	const pendingRental = {
		categoryId: data.categoryId,
		mode: data.mode,
		startDate: data.startDate,
		endDate: data.endDate,
		days,

		customer: {
			name: data.name,
			email: data.email,
			phone: data.phone,
			heights: data.heights
		},

		accessories: data.accessories || [],
		tours: data.tours || [],

		pricing: {
			bikePrice,
			accessoriesPrice,
			toursPrice,
			total
		},

		status: 'pending_payment',
		createdAt: new Date().toISOString()
	};

	// 💳 Stripe Payment Intent (wymuszona płatność)
	const paymentIntent = await createPaymentIntent(
		total,
		'temp-rental-id',
		data.email,
		{
			categoryId: data.categoryId,
			tours: (data.tours || []).join(',')
		}
	);

	return {
		rental: pendingRental,
		clientSecret: paymentIntent.client_secret
	};
}
