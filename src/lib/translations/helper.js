import { pathnames } from './routes.js';
import { translations } from './translations.js';
export function getLocalizedPath(basePath, lang) {
    const entry = pathnames[basePath];
    if (entry && entry[lang]) {
        return entry[lang];
    }
    return basePath;
}


export function t(key, lang) {
    return translations[lang]?.[key] || translations['en'][key] || key;
}
