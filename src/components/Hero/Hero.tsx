import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import IfsudestemgLogo from '../../assets/images/ifsudestemg-white.svg';
import SebraeLogo from '../../assets/images/sebrae.png';
import UfpaLogo from '../../assets/images/ufpa.svg';
import UfscLogo from '../../assets/images/ufsc.png';
import UicLogo from '../../assets/images/uic_logo.svg';
import { Button } from '../Button';
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
      <Fade>
        <Railway className={styles.railway} />
      </Fade>
      <Fade delay={500} cascade>
        <div className={styles.textWrapper}>
          <span className={styles.title}>{t('hero_title')}</span>
          <span className={styles.subtitle}>{t('hero_subtitle')}</span>
        </div>
      </Fade>
      <Fade delay={1000} cascade>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <a
              href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/mg"
              title="Acesse o site do Sebrae"
            >
              <Image
                src={SebraeLogo}
                alt="Logo do Sebrae"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://portal.ufpa.br/" title="Acesse o site da UFPA">
              <Image
                src={UfpaLogo}
                alt="Logo da UFPA"
                width={100}
                height={100}
                className={styles.icon}
              />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.ifsudestemg.edu.br/"
              title="Acesse o site do IFSudesetMG"
            >
              <Image
                src={IfsudestemgLogo}
                alt="Logo do IFSudesteMG"
                width={100}
                height={100}
                className={styles.icon}
              />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://ufsc.br/" title="Acesse o site da UFSC">
              <Image
                src={UfscLogo}
                alt="Logo da UFSC"
                width={100}
                height={100}
                className={styles.icon}
              />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://uic.org/"
              title="Acesse o site da Union Internationale des Chemins de fer (UIC)"
            >
              <Image
                src={UicLogo}
                alt="Logo do UIC"
                width={100}
                height={100}
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </Fade>
      <Fade delay={1200} cascade>
        <Button className={styles.button} animated={true}>
          {t('hero_registration')}
        </Button>
      </Fade>
    </section>
  );
};

export { Hero };
