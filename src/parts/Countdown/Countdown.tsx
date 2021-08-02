import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Countdown as CountdownComp } from './../../components/Countdown';
import styles from './Countdown.module.scss';

interface CountdownProps {
  className?: string;
}

const Countdown = (props: CountdownProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  const year = 2022;
  const month = 2 - 1;
  const day = 11;
  const hours = 8;
  const minutes = 0;
  const seconds = 0;

  return (
    <section className={classNames(className, styles.container)}>
      <span className={styles.title}>{t('countdown_title')}</span>
      <CountdownComp
        year={year}
        month={month}
        day={day}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </section>
  );
};

export { Countdown };
