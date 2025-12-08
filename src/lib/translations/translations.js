export const translations = {
    en: {
        tours: "TOURS",
        rentals: "RENTALS",
        events: "EVENTS",
        about: "ABOUT",
        blog: "BLOG",
        contact: "CONTACT",
        tc: "Terms & Conditions",
        privacy: "Privacy Policy",
        faq: "FAQ"
    },
    pl: {
        tours: "WYCIECZKI",
        rentals: "WYNAJEM",
        events: "EVENTY",
        about: "O NAS",
        blog: "BLOG",
        contact: "KONTAKT",
        tc: "Regulamin",
        privacy: "Polityka prywatności",
        faq: "FAQ"
    }
};

const pathMap = {
    '/': {
        en: '/',
        pl: '/pl/gdansk-by-bike-wycieczki-rowerowe-w-gdansku'
    },
    '/tours': {
        en: '/tours',
        pl: '/pl/wycieczki'
    },
    '/rentals': {
        en: '/rentals',
        pl: '/pl/wynajem'
    },
    '/events': {
        en: '/events',
        pl: '/pl/eventy'
    },
    '/about': {
        en: '/about',
        pl: '/pl/o-nas'
    },
    '/blog': {
        en: '/blog',
        pl: '/pl/blog'
    },
    '/contact': {
        en: '/contact',
        pl: '/pl/kontakt'
    },
    "/faq": {
        en: "/faq",
        pl: "/pl/faq-pl"
    },
    "/privacy-policy": {
        en: "/privacy-policy",
        pl: "/pl/polityka-prywatnosci"
    },
    "/terms-and-conditions": {
        en: "/terms-and-conditions",
        pl: "/pl/regulamin"
    },
};

export function getLocalizedPath(path, lang) {
    return pathMap[path]?.[lang] || pathMap[path]?.['en'] || path;
}

export function t(key, lang) {
    return translations[lang]?.[key] || translations['en'][key] || key;
}
