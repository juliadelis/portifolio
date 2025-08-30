import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend((lng, ns) =>
        import(`../public/locales/${lng}/${ns}.json`)
      )
    )
    .init({
      supportedLngs: ["en", "pt"],
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
