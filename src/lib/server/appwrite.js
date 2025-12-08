// src/lib/server/appwrite.js
import { Client, Storage } from 'appwrite';
import { env } from '$env/dynamic/private';

const endpoint = env?.APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const project = env?.APPWRITE_PROJECT || '6936d0610032b5f88dc6';
const storageId = env?.APPWRITE_STORAGE_ID || '6847044900100717f6e5';

console.log('✅ Appwrite Storage Client Initialized');
console.log('Endpoint:', endpoint);

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(project);

const storage = new Storage(client);

// Funkcje tylko do Storage (bez Database)
export function getPhoto(fileId, height, width) {
    try {
        console.log(`📸 Getting photo: ${fileId}`);
        const url = storage.getFilePreview(
            storageId,
            fileId,
            width || undefined,
            height || undefined
        );
        return url;
    } catch (error) {
        console.error('❌ Błąd podczas pobierania zdjęcia:', error);
        return null;
    }
}

export function getPdfUrl(fileId) {
    try {
        console.log(`📄 Getting PDF: ${fileId}`);
        const url = storage.getFileDownload(storageId, fileId);
        return url;
    } catch (error) {
        console.error('❌ Błąd podczas pobierania PDF:', error);
        return null;
    }
}

export { client, storage };