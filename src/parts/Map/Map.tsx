import classNames from 'classnames';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { MapLocation } from '../../components/MapLocation';
import styles from './Map.module.scss';

interface MapProps {
  className?: string;
}

const Map = (props: MapProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Fade triggerOnce>
        <span className={styles.title}>{t('map_title')}</span>
        <MapLocation />
      </Fade>
    </section>
  );
};

export { Map };
