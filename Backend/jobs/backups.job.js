import cron from 'node-cron';
import { runBackup } from '../utils/backup.util.js';

cron.schedule('0 3 * * *', async () => {
	await runBackup();
	console.log('✅ Daily backup completed');
});
