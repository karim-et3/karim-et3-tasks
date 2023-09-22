import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'ar',
    fallbackLng: 'en',
    resources: {en: en, ar: ar},
    interpolation: {escapeValue: false},
  });

export default i18n;
