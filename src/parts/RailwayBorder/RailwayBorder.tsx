import classNames from 'classnames';
import throttle from 'lodash.throttle';
import React, {
  createRef,
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as workerTimers from 'worker-timers';
import styles from './RailwayBorder.module.scss';

interface positionVisibility {
  value: 'before' | 'inside' | 'after' | undefined;
}

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100
): [boolean, number, positionVisibility, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercPosition, setCurrentPercPosition] = useState(0);
  const currentElement = createRef<Element>();
  const [position, setPosition] = useState<positionVisibility>({
    value: undefined,
  });

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    if (top + offset >= 0 && !(top - offset <= window.innerHeight)) {
      setCurrentPercPosition(0);
      setPosition({ value: 'before' });
    } else if (!(top + offset >= 0) && top - offset <= window.innerHeight) {
      setCurrentPercPosition(100);
      setPosition({ value: 'after' });
    } else if (top + offset >= 0 && top - offset <= window.innerHeight) {
      const currentPosition = top + offset;
      const currentPercPositionTemp =
        100 - (currentPosition * 100) / window.innerHeight;
      setCurrentPercPosition(Math.ceil(currentPercPositionTemp));
      setPosition({ value: 'inside' });
    }
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentPercPosition, position, currentElement];
}

interface RailwayBorderProps {
  className?: string;
  children: ReactNode;
  type: 0 | 1 | 2;
  size?: 'full' | 'half';
}

const RailwayBorder = (props: RailwayBorderProps): JSX.Element => {
  const { className, children, type, size } = props;
  const [isVisible, currentPercPosition, position, currentElement] =
    useVisibility<HTMLDivElement>(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [startHeightAnimation, setStartHeightAnimation] = useState(false);
  const style: CSSProperties = {
    '--railway-perc-position':
      size && size == 'half'
        ? (currentPercPosition * 2 > 100
            ? 100
            : currentPercPosition * 2
          ).toString() + '%'
        : currentPercPosition.toString() + '%',
    '--railway-perc-width': currentPercPosition > 0 ? '100%' : '0%',
  } as React.CSSProperties;

  let countDownTimeout = useRef<number>();

  useEffect(() => {
    if (isVisible) {
      if (!startAnimation) {
        setStartAnimation(isVisible);

        if (countDownTimeout && countDownTimeout.current) {
          workerTimers.clearTimeout(countDownTimeout.current);
        }
      }

      if (!startHeightAnimation) {
        countDownTimeout.current = workerTimers.setTimeout(() => {
          setStartHeightAnimation(true);
        }, 600);
      }
    } else {
      // setStartAnimation(isVisible);
      if (position.value == 'before') {
        setStartHeightAnimation(false);
      }
    }
  }, [startAnimation, isVisible, startHeightAnimation, position]);

  return (
    <div
      className={classNames(className, styles.container)}
      style={style}
      data-type={type}
      data-start-animation={startAnimation}
      data-start-height-animation={startHeightAnimation}
      ref={currentElement}
    >
      {children}
    </div>
  );
};

export { RailwayBorder };
