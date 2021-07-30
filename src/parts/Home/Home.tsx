import { useRouter } from "next/dist/client/router";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { Header } from "../Header";
import styles from "./Home.module.scss";

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const lang =
    router.query?.lang && typeof router.query?.lang == "string"
      ? router.query?.lang
      : undefined;

  return (
    <div className={styles.container}>
      <ToastContainer />
      {/* Header */}
      <Header />

      {/* Main */}

      {/* Footer */}
    </div>
  );
};

export { Home };
