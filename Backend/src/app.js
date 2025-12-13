import express from 'express';
import cors from 'cors';
import rentalRoutes from './routes/rental.routes.js';
import stripeWebhookRoutes from './routes/stripe.webhook.routes.js';
import tourRoutes from './routes/tour.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/rentals', rentalRoutes);
app.use('/api/stripe/webhook', stripeWebhookRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/admin', adminRoutes);

export default app;
