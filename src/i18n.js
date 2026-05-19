import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../public/locales/en/translation.json";
import ptTranslation from "../public/locales/pt/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: ["en", "pt"],
      lng: "en",
      fallbackLng: "en",
      debug: process.env.NODE_ENV === "development",
      defaultNS: "translation",
      ns: ["translation"],
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      returnObjects: true,
    });
}

export default i18n;
