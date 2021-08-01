import classnames from 'classnames';
import styles from './ScheduleItem.module.scss';

interface ScheduleProps {
  className?: string;
  date: string;
  title: string;
  text: string;
}

const ScheduleItem = (props: ScheduleProps): JSX.Element => {
  const { className, date, title, text } = props;
  return (
    <div className={classnames(className, styles.container)}>
      <span className={styles.date}>{date}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export { ScheduleItem };
