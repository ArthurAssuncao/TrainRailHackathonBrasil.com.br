import flagForBrazil from "@iconify/icons-emojione-v1/flag-for-brazil";
import flagForUnitedStates from "@iconify/icons-emojione-v1/flag-for-united-states";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import nextId from "react-id-generator";
import { toast } from "react-toastify";
import { SUPPORTED_LANGUAGES } from "../../utils/i18n";
import styles from "./LanguageButton.module.scss";

const LanguageButton = () => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  const supportedLangs = SUPPORTED_LANGUAGES;

  const changeLanguage = (newLanguage: string) => {
    if (lang !== newLanguage) {
      i18n.changeLanguage(newLanguage);
      toast(t("languageChange"));
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.containerInner}>
        {supportedLangs.map((supportedLang) => {
          const className =
            supportedLang !== lang
              ? classNames(styles.container, styles.item, styles.itemHidden)
              : classNames(styles.container, styles.item, styles.itemCurrent);
          let icon;
          if (supportedLang == "pt") {
            icon = <Icon icon={flagForBrazil} />;
          } else if (supportedLang == "en") {
            icon = <Icon icon={flagForUnitedStates} />;
          }

          return (
            <li
              className={className}
              key={nextId()}
              onClick={() => changeLanguage(supportedLang)}
            >
              {t(supportedLang)}
              <span className={styles.icon}>{icon}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { LanguageButton };
