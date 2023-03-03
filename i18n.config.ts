import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '~translations/locales/en.json';
import ru from '~translations/locales/ru.json';
import { getLocales } from 'react-native-localize';

i18next.use(initReactI18next).init({
    lng: getLocales()[0].languageCode,
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: en,
        },
        ru: {
            translation: ru,
        },
    },
    react: {
        useSuspense: false,
    },
});

export default i18next;
