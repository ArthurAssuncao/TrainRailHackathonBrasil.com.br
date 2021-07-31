import classNames from 'classnames';
import Image from 'next/image';
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
          {/* <LogoOficial className={styles.logo} /> */}
          <Image
            src={LogoOficial}
            alt="Logo do Hackathon"
            width={150}
            height={60}
            className={styles.logo}
          />
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

        <div
          className={styles.menu}
          data-sidemenuopened={sideMenuOpened}
          data-sidemenuwilldisappear={sideMenuWillDisappear}
        >
          <div
            className={styles.menuOverlay}
            onClick={() => toggleSideMenu()}
          />
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a className={styles.menuItemLink} href="#">
                {t('navbar_participe')}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuItemLink} href="#">
                {t('navbar_cronograma')}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuItemLink} href="#">
                {t('navbar_parceiros')}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuItemLink} href="#">
                {t('navbar_perguntasFrequentes')}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuItemLink} href="#">
                {t('navbar_contato')}
              </a>
            </li>
            <li className={classNames(styles.menuItem, styles.menuLanguage)}>
              <LanguageButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
