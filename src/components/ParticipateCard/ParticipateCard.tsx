import classNames from 'classnames';
import styles from './ParticipateCard.module.scss';

interface ParticipateCardProps {
  className?: string;
  title: string;
  icon: JSX.Element;
  text: string;
  type?: 'card' | 'no-card';
}

const ParticipateCard = (props: ParticipateCardProps): JSX.Element => {
  const { className, title, icon, text, type } = props;

  return (
    <div
      className={classNames(className, styles.container)}
      data-iscard={type == 'no-card' ? false : true}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export { ParticipateCard };
