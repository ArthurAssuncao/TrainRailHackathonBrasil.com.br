import classNames from 'classnames';
import React from 'react';
import styles from './CountdownItem.module.scss';

interface CountdownItemProps {
  className?: string;
  title: string;
  value: number;
  maxValue: number;
}

const CountdownItem = (props: CountdownItemProps): JSX.Element => {
  const { className, title, value, maxValue } = props;
  const raio = 66;
  const circunferencia = 2 * Math.PI * raio;
  const percTime = (value * 100) / maxValue;
  const circOfPercTime = (percTime * circunferencia) / 100;

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.containerInner}>
        <span className={styles.value}>{value}</span>
        <svg className={styles.circleOff} height="140" width="140">
          <circle cx="70" cy="70" r={raio} fill="none" strokeWidth="4px" />
        </svg>
        <svg className={styles.circleOn} height="140" width="140">
          <circle
            cx="70"
            cy="70"
            r={raio}
            fill="none"
            strokeWidth="4px"
            strokeDasharray={circunferencia}
            strokeDashoffset={circOfPercTime}
          />
        </svg>
      </div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

const propsAreEqual = (
  prevItem: CountdownItemProps,
  nextItem: CountdownItemProps
): boolean => {
  return (
    prevItem.value === nextItem.value && prevItem.maxValue === nextItem.maxValue
  );
};

const MemoizedCountdownItem = React.memo(CountdownItem, propsAreEqual);

export { CountdownItem, MemoizedCountdownItem };
