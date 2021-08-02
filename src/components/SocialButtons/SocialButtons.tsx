import bxlFacebookSquare from '@iconify/icons-bx/bxl-facebook-square';
import bxlInstagramAlt from '@iconify/icons-bx/bxl-instagram-alt';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './SocialButtons.module.scss';

interface SocialButtonsProps {
  className?: string;
}
interface SocialButtonProps {
  className?: string;
  name: string;
  href: string;
  children: ReactNode;
}

const SocialButton = (props: SocialButtonProps): JSX.Element => {
  const { name, href, className, children } = props;
  return (
    <a
      className={classNames(className, styles.sbIconWrapper)}
      title={name}
      href={href}
    >
      {children}
    </a>
  );
};

const SocialButtons = (props: SocialButtonsProps): JSX.Element => {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <SocialButton name="Facebook" className={styles.iconWrapper} href="#">
        <Icon icon={bxlFacebookSquare} />
      </SocialButton>
      <SocialButton name="Instagram" className={styles.iconWrapper} href="#">
        <Icon icon={bxlInstagramAlt} />
      </SocialButton>
    </div>
  );
};

export { SocialButtons };
