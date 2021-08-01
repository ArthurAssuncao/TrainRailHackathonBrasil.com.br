import arrowDownCircle from '@iconify/icons-ion/arrow-down-circle';
import arrowForwardCircle from '@iconify/icons-ion/arrow-forward-circle';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
  className?: string;
  title: string;
  content: string;
  startOpened?: boolean;
}

const Accordion = (props: AccordionProps): JSX.Element => {
  const { className, title, content, startOpened } = props;
  const [isOpened, setIsOpened] = useState(startOpened ? true : false);

  const toggleStatus = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      className={classNames(className, styles.container)}
      data-isopen={isOpened}
    >
      <div className={styles.header} onClick={() => toggleStatus()}>
        <div className={styles.headerIcon}>
          <Icon icon={isOpened ? arrowDownCircle : arrowForwardCircle} />
        </div>
        <span className={styles.headerTitle}>{title}</span>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export { Accordion };
