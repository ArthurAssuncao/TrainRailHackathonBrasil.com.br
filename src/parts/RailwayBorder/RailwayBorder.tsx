import classNames from 'classnames';
import throttle from 'lodash.throttle';
import React, {
  createRef,
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import styles from './RailwayBorder.module.scss';

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100
): [boolean, number, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercPosition, setCurrentPercPosition] = useState(0);
  const currentElement = createRef<Element>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    if (top + offset >= 0 && !(top - offset <= window.innerHeight)) {
      setCurrentPercPosition(0);
    } else if (!(top + offset >= 0) && top - offset <= window.innerHeight) {
      setCurrentPercPosition(100);
    } else if (top + offset >= 0 && top - offset <= window.innerHeight) {
      const currentPosition = top + offset;
      const currentPercPositionTemp =
        100 - (currentPosition * 100) / window.innerHeight;
      setCurrentPercPosition(Math.ceil(currentPercPositionTemp));
    }
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentPercPosition, currentElement];
}

interface RailwayBorderProps {
  className?: string;
  children: ReactNode;
  type: 0 | 1 | 2;
}

const RailwayBorder = (props: RailwayBorderProps): JSX.Element => {
  const { className, children, type } = props;
  const [isVisible, currentPercPosition, currentElement] =
    useVisibility<HTMLDivElement>(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const style: CSSProperties = {
    '--railway-perc-position': currentPercPosition.toString() + '%',
    '--railway-perc-width': currentPercPosition > 0 ? '100%' : '0%',
  } as React.CSSProperties;

  useEffect(() => {
    if (isVisible && !startAnimation) {
      setStartAnimation(isVisible);
    }
  }, [startAnimation, isVisible]);

  return (
    <div
      className={classNames(className, styles.container)}
      style={style}
      data-type={type}
      data-start-animation={startAnimation}
      data-start-height-animation={currentPercPosition > 30 ? true : false}
      ref={currentElement}
    >
      {children}
    </div>
  );
};

export { RailwayBorder };
