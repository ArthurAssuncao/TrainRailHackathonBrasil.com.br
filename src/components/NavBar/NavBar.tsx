import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as LinkScroll } from 'react-scroll';
import LogoOficial from '../../assets/images/logo-oficial.svg';
import { LanguageButton } from '../LanguageButton';
import { MenuHamburguer } from '../MenuHamburguer';
import styles from './NavBar.module.scss';

const NavBar = (): JSX.Element => {
  const { t } = useTranslation();
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [sideMenuWillDisappear, setSideMenuWillDisappear] = useState(false);
  const scrollOptions = {
    class: styles.active,
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
  };

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
              <LinkScroll
                activeClass={scrollOptions.class}
                to="participate"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
              >
                <span className={styles.menuItemLink}>
                  {t('navbar_participe')}
                </span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="schedule"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
              >
                <span className={styles.menuItemLink}>
                  {t('navbar_cronograma')}
                </span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="partners"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
              >
                <span className={styles.menuItemLink}>
                  {t('navbar_parceiros')}
                </span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="faq"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
              >
                <span className={styles.menuItemLink}>
                  {t('navbar_perguntasFrequentes')}
                </span>
              </LinkScroll>
            </li>
            <li className={styles.menuItem}>
              <LinkScroll
                activeClass={scrollOptions.class}
                to="contact"
                spy={scrollOptions.spy}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
              >
                <span className={styles.menuItemLink}>
                  {t('navbar_contato')}
                </span>
              </LinkScroll>
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
