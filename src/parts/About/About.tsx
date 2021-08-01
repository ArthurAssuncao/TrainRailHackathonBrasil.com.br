import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import LogoOficial from '../../assets/images/logo-oficial.png';
import { TitleSection } from '../../components/TitleSection';
import styles from './About.module.scss';

interface AboutProps {
  className?: string;
}

const About = (props: AboutProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Slide direction="up">
        <TitleSection title={t('about_title')} className={styles.title} />
        <div className={styles.logo}>
          <Image
            src={LogoOficial}
            alt="Logo do Trainrail Hackathon"
            width={350}
            height={100}
          />
        </div>

        <span className={styles.text}>{t('about_text')}</span>
      </Slide>
    </section>
  );
};

export { About };
