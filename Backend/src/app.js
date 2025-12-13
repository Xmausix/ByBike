import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


import rentalRoutes from './routes/rental.routes.js';
import stripeWebhookRoutes from './routes/stripe.webhook.routes.js';
import tourRoutes from './routes/tour.routes.js';
import adminRoutes from './routes/admin.routes.js';
import { apiLimiter } from '../middlewares/ratelimit.middleware.js';

const app = express();

app.use(
	helmet({
		contentSecurityPolicy: false
	})
);


app.use(cors());
app.use(express.json());
app.use('/api', apiLimiter);
app.use('/api/rentals', rentalRoutes);
app.use('/api/stripe/webhook', stripeWebhookRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/admin', adminRoutes);

export default app;
