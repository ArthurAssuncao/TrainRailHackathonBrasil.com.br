import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const FALLBACK_LANG = 'pt';
export const SUPPORTED_LANGUAGES = ['pt', 'en'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      pt: {
        translation: {
          'Bem-vindo ao Hackathon':
            'Bem-vindo ao TrainRail Hackathon edição organizada pelo Brasil',
        },
      },
      en: {
        translation: {
          'Bem-vindo ao Hackathon':
            'Welcome to TrainRail Hackathon Brazilian edition',
        },
      },
    },
    // lng: "pt", // if you're using a language detector, do not define the lng option
    fallbackLng: FALLBACK_LANG,
    debug: true,
    supportedLngs: SUPPORTED_LANGUAGES,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
