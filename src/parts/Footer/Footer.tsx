import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../../components/ContactForm';
import { SocialButtons } from '../../components/SocialButtons';
import { TitleSection } from '../../components/TitleSection';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <footer className={classNames(className, styles.container)}>
      <TitleSection title={t('footer_title')} className={styles.title} />
      <ContactForm className={styles.contact} />
      <SocialButtons className={styles.socialButtons} />
      <div className={styles.copyright}>TrainRail Hackathon Brasil @ 2021</div>
    </footer>
  );
};

export { Footer };
