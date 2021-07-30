import classnames from 'classnames';
import styles from './MenuHamburguer.module.scss';

interface MenuHamburguerProps {
  className: string;
  opened: boolean;
}

const MenuHamburguer = (props: MenuHamburguerProps): JSX.Element => {
  const { className, opened } = props;
  return (
    <div
      className={classnames(className, styles.container)}
      data-menuIconOpen={opened}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export { MenuHamburguer };
