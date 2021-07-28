import i18n from "i18next";
import Head from "next/head";
import { initReactI18next, useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import styles from "../assets/styles/Home.module.css";
import { PWATags } from "../parts/PWATags";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      pt: {
        translation: {
          "Bem-vindo ao Hackathon":
            "Bem-vindo ao TrainRail Hackathon edição organizada pelo Brasil",
        },
      },
    },
    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false,
    },
  });

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>TrainRail Hackathon Brasil</title>
        <meta name="description" content={t("Bem-vindo ao Hackathon")} />
        <link rel="icon" href="/favicon.ico" />

        <PWATags />
      </Head>

      <ToastContainer />
      {/* Header */}

      {/* Main */}

      {/* Footer */}
    </div>
  );
}
