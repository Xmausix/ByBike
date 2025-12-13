import { sendConfirmationMail } from '../notifications/mail.service.js';
import { generateAccessToken } from '../../utils/tokens.js';

export async function handleStripeWebhook(event) {
	switch (event.type) {
		case 'payment_intent.succeeded': {
			const intent = event.data.object;
			const token = generateAccessToken();

			// ✅ tutaj:
			// - zapisujesz rezerwację jako CONFIRMED
			// - zdejmujesz soft-hold
			// - wysyłasz maila

			await sendConfirmationMail({
				email: intent.receipt_email,
				accessLink: `${process.env.FRONTEND_URL}/tours/access/${token}`
			});
			break;
		}

		case 'payment_intent.payment_failed': {
			// ❌ anulowanie soft-hold
			console.log('❌ Payment failed');
			break;
		}
	}
}
