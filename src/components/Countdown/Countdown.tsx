import classNames from 'classnames';
import { intervalToDuration } from 'date-fns';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import * as workerTimers from 'worker-timers';
import styles from './Countdown.module.scss';
import { MemoizedCountdownItem } from './CountdownItem';

interface CountdownProps {
  className?: string;
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = (props: CountdownProps): JSX.Element => {
  const { className, day, month, year, hours, minutes, seconds } = props;
  const date = useMemo(
    () => new Date(year, month, day, hours, minutes, seconds),
    [year, month, day, hours, minutes, seconds]
  );

  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<Duration>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let countDownTimeout = useRef<number>();

  useEffect(() => {
    if (countDownTimeout && countDownTimeout.current) {
      workerTimers.clearTimeout(countDownTimeout.current);
    }

    countDownTimeout.current = workerTimers.setTimeout(() => {
      const currentDate = Date.now();
      const diff = intervalToDuration({
        start: currentDate,
        end: date,
      });
      setTimeLeft(diff);
    }, 1000);
  }, [date, timeLeft]);

  return (
    <div className={classNames(className, styles.container)}>
      <Fade cascade triggerOnce>
        <MemoizedCountdownItem
          className={styles.item}
          title={t('countdown_months')}
          value={timeLeft.months ?? 0}
          maxValue={12}
        />
        <MemoizedCountdownItem
          className={styles.item}
          title={t('countdown_days')}
          value={timeLeft.days ?? 0}
          maxValue={30}
        />
        <MemoizedCountdownItem
          className={styles.item}
          title={t('countdown_hours')}
          value={timeLeft.hours ?? 0}
          maxValue={60}
        />
        <MemoizedCountdownItem
          className={styles.item}
          title={t('countdown_minutes')}
          value={timeLeft.minutes ?? 0}
          maxValue={60}
        />
        <MemoizedCountdownItem
          className={styles.item}
          title={t('countdown_seconds')}
          value={timeLeft.seconds ?? 0}
          maxValue={60}
        />
      </Fade>
    </div>
  );
};

export { Countdown };
