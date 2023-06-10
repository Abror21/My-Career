
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["uz", "en", "ru"],
        fallbackLng: "en",
        debug: true,
        detection: {
            order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
            caches: ["cookie"]
        },
        react: {
            useSuspense: true
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
    });

export default i18n;