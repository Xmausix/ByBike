import { register, init, locale, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('pl', () => import('./pl.json'));

export function initI18n(lang) {

    init({
        fallbackLocale: 'en',
        initialLocale: lang || getLocaleFromNavigator()|| 'en',
    });
}
