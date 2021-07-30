import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LogoOficial from '../../assets/images/logo-oficial.svg';
import { LanguageButton } from '../LanguageButton';
import { MenuHamburguer } from '../MenuHamburguer';
import styles from './NavBar.module.scss';

const NavBar = (): JSX.Element => {
  const { t } = useTranslation();
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [sideMenuWillDisappear, setSideMenuWillDisappear] = useState(false);

  const toggleSideMenu = (): void => {
    setSideMenuOpened((prev) => {
      if (prev) {
        setSideMenuWillDisappear(true);
        setTimeout(() => {
          setSideMenuWillDisappear(false);
        }, 1000);
      } else {
        setSideMenuWillDisappear(true);
      }
      return !prev;
    });
  };

  return (
    <nav className={styles.container}>
      <Link href="/">
        <a className={styles.logoLink}>
          <LogoOficial className={styles.logo} />
        </a>
      </Link>
      <div className={styles.menuWrapper}>
        <div
          className={styles.menuIconWrapper}
          onClick={() => toggleSideMenu()}
        >
          {/* <Icon icon={menuLine} className={styles.menuIcon} /> */}
          <MenuHamburguer className={styles.menuIcon} opened={sideMenuOpened} />
        </div>

        <ul
          className={styles.menu}
          data-sideMenuOpened={sideMenuOpened}
          data-sideMenuWillDisappear={sideMenuWillDisappear}
        >
          <div
            className={styles.menuOverlay}
            onClick={() => toggleSideMenu()}
          />
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t('participe')}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t('cronograma')}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t('parceiros')}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t('perguntasFrequentes')}
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink} href="#">
              {t('contato')}
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
