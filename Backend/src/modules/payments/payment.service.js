import stripe from '../../config/stripe.js';


export async function createPaymentIntent(amount, rentalId, email, metadata = {}) {
	return stripe.paymentIntents.create({
		amount: Math.round(amount * 100),
		currency: 'pln',
		automatic_payment_methods: { enabled: true },
		receipt_email: email,
		metadata: {
			rentalId,
			...metadata
		}
	});
}
