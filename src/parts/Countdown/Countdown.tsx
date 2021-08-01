import classNames from 'classnames';
import React from 'react';
import { Countdown as CountdownComp } from './../../components/Countdown';
import styles from './Countdown.module.scss';

interface CountdownProps {
  className?: string;
}

const Countdown = (props: CountdownProps): JSX.Element => {
  const { className } = props;

  const year = 2022;
  const month = 2 - 1;
  const day = 11;
  const hours = 8;
  const minutes = 0;
  const seconds = 0;

  return (
    <section className={classNames(className, styles.container)}>
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
