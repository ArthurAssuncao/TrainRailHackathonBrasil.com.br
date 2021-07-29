import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../LanguageButton";
import { MenuHamburguer } from "../MenuHamburguer";
import LogoOficial from "./../../assets/images/logo-oficial.svg";
import styles from "./NavBar.module.scss";

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  const { t } = useTranslation();
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpened((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <a className={styles.logoLink} href="/">
        <LogoOficial className={styles.logo} />
      </a>
      <div className={styles.menuWrapper}>
        <div
          className={styles.menuIconWrapper}
          onClick={() => toggleSideMenu()}
        >
          {/* <Icon icon={menuLine} className={styles.menuIcon} /> */}
          <MenuHamburguer className={styles.menuIcon} opened={sideMenuOpened} />
        </div>

        <ul className={styles.menu} data-sideMenuOpened={sideMenuOpened}>
          <div
            className={styles.menuOverlay}
            onClick={() => toggleSideMenu()}
          ></div>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t("participe")}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t("cronograma")}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t("parceiros")}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t("perguntasFrequentes")}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t("contato")}
            </a>
          </li>
          <li className={classNames(styles.menuItem, styles.menuLanguage)}>
            <LanguageButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
