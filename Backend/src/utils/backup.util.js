import fs from 'fs';
import path from 'path';

export async function runBackup() {
	const backupPath = path.join(
		process.cwd(),
		'backups',
		`backup-${Date.now()}.json`
	);

	const data = await db.exportAll(); // Appwrite / DB adapter

	fs.writeFileSync(backupPath, JSON.stringify(data));
}
