import { Router } from 'express';

const router = Router();

router.get('/:token', (req, res) => {
	// sprawdź token
	// zwróć listę tras + linki PDF / GPX
	res.json({ ok: true });
});

export default router;
