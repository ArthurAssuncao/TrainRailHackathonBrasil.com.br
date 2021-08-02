import classNames from 'classnames';
import throttle from 'lodash.throttle';
import React, { createRef, ReactNode, useEffect, useState } from 'react';
import styles from './RailwayBorder.module.scss';

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100
): [boolean, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<Element>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentElement];
}

interface RailwayBorderProps {
  className?: string;
  children: ReactNode;
  type: 0 | 1 | 2;
}

const RailwayBorder = (props: RailwayBorderProps): JSX.Element => {
  const { className, children, type } = props;
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isVisible && !startAnimation) {
      setStartAnimation(isVisible);
    }
  }, [startAnimation, isVisible]);

  return (
    <div
      className={classNames(className, styles.container)}
      data-type={type}
      data-start-animation={startAnimation}
      ref={currentElement}
    >
      {children}
    </div>
  );
};

export { RailwayBorder };
