import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import IfsudestemgLogo from '../../assets/images/ifsudestemg.png';
import SebraeLogo from '../../assets/images/sebrae.png';
import UfpaLogo from '../../assets/images/ufpa.png';
import UfscLogo from '../../assets/images/ufsc.png';
import UicLogo from '../../assets/images/uic_logo.svg';
import styles from './Hero.module.scss';
import { Railway } from './Railway';

interface HeroProps {
  className?: string;
}

const Hero = (props: HeroProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Railway className={styles.railway} />
      <div className={styles.textWrapper}>
        <span className={styles.title}>{t('hero_title')}</span>
        <span className={styles.subtitle}>{t('hero_subtitle')}</span>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image
            src={SebraeLogo}
            alt="Logo do Sebrae"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={UfpaLogo}
            alt="Logo da UFPA"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={IfsudestemgLogo}
            alt="Logo do IFSudesteMG"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={UfscLogo}
            alt="Logo da UFSC"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={UicLogo}
            alt="Logo do UIC"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
