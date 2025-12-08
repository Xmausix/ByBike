import { getInfo } from '$lib/server/server-appwrite.js';
import { infoStore } from '$lib/stores/infoStore.js';

export async function load({ params }) {

        const info = await getInfo();
        return {
            info
        };
 
    
}