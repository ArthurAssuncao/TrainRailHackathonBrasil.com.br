import classNames from 'classnames';
import styles from './TitleSection.module.scss';

interface TitleSectionProps {
  className?: string;
  title: string;
}

const TitleSection = (props: TitleSectionProps): JSX.Element => {
  const { className, title } = props;
  return <div className={classNames(className, styles.container)}>{title}</div>;
};

export { TitleSection };
