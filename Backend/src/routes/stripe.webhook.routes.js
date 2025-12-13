import express from 'express';
import stripe from '../config/stripe.js';
import { handleStripeWebhook } from '../modules/payments/webhook.service.js';

const router = express.Router();

router.post(
	'/',
	express.raw({ type: 'application/json' }),
	(req, res) => {
		const sig = req.headers['stripe-signature'];

		try {
			const event = stripe.webhooks.constructEvent(
				req.body,
				sig,
				process.env.STRIPE_WEBHOOK_SECRET
			);

			handleStripeWebhook(event);
			res.json({ received: true });
		} catch (err) {
			res.status(400).send(`Webhook Error: ${err.message}`);
		}
	}
);

if (event.type === 'payment_intent.succeeded') {
	const orderId = event.data.object.metadata.orderId;
	const order = await orders.markAsPaid(orderId);

	if (order.tours?.length) {
		await sendSelfGuidedTours(order);
	}
}


export default router;
