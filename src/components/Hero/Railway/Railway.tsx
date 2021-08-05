import classNames from 'classnames';
import styles from './Railway.module.scss';

interface RailwayProps {
  className?: string;
}

const Railway = (props: RailwayProps): JSX.Element => {
  const { className } = props;

  const cor1 = '#0aa848';
  const cor2 = '#fedd00';
  const cor3 = '#111';
  const cor4 = '#f49506';
  const cor5 = '#1076c4';
  const cor6 = '#ff6961';

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>
          TrainRail
          <br />
          Hackathon
        </span>
      </div>
      <svg
        width="416.26526"
        height="221.99619"
        data-name="Metro Map Lines"
        className={styles.map}
        version="1.1"
        id="svg21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs25" />

        <title id="title2">metro-map-svg</title>
        <g id="g19" transform="translate(-269.47458,-161.81369)">
          <title id="title4">Layer 1</title>
          <path
            className={styles.line}
            stroke={cor1}
            strokeWidth="3px"
            strokeMiterlimit="10"
            strokeLinecap="round"
            fill="none"
            d="m 447.47458,323.81369 -14,-14 c -0.7,-1 -2.77,-0.83 -3.95,-0.57 l -4.17,2.15 a 3.32,3.32 0 0 1 -3.17,-1 l -8.07,-8.79 a 5.51,5.51 0 0 0 -4.06,-1.79 h -14.24 a 4.37,4.37 0 0 1 -4.37,-4.33 l 0.53,-58.38 a 4.84,4.84 0 0 0 -4.84,-4.89 h -3.19 a 4,4 0 0 1 -4,-4 v -1.9 a 4,4 0 0 1 4,-4 h 6.73 a 8,8 0 0 0 7.36,-4.84 l 1.58,-3.66 a 6.64,6.64 0 0 1 0.83,-1 l 22.53,-22.5"
            id="green-line"
          />
          <path
            className={styles.line}
            stroke={cor2}
            strokeWidth="3px"
            strokeMiterlimit="10"
            strokeLinecap="round"
            fill="none"
            d="m 370.47458,364.81369 v -37 c 0,-4.43 -2.57,-6.13 -7,-6 0,0 -6,1.22 -6,-2 v -15 c 0,-2.13 11,-11 11,-11 1.39,-1.33 4.08,-1 6,-1 h 10 c 3,0 3,-1.1 3,-6 v -45 c 0,-3.35 0.65,-5.63 -2.66,-5.68 h -1.72 a 6.83,6.83 0 0 1 -6.81,-6.83 v -3.84 a 7,7 0 0 1 7,-7 c 3.39,0 6.77,0 6.94,0 a 6,6 0 0 0 2,-0.38 l 1.84,-1.28 1.7,-1.6"
            id="yellow-line"
          />
          <path
            className={styles.line}
            stroke={cor3}
            strokeWidth="3px"
            strokeMiterlimit="10"
            strokeLinecap="round"
            fill="none"
            d="m 270.97458,264.31369 h 43.9 c 5.1,0 11.6,1.5 11.6,-3.5 v -5.5 c 0,-9 7.5,-12 9.5,-12 h 32 c 2.54,0 10,1 10,12 v 13 c 0,2.54 0,7 6,7 h 26 c 1.07411,3.9e-4 2.1131,-0.38258 2.93,-1.08 l 6.77,-5.81 c 0.83501,-0.71697 1.89941,-1.1108 3,-1.11"
            id="orange-line"
          />
          <path
            className={styles.line}
            stroke={cor4}
            strokeWidth="3px"
            strokeMiterlimit="10"
            strokeLinecap="round"
            fill="none"
            d="m 272.47458,244.81369 22.17,22.17 a 2.84,2.84 0 0 0 2,0.83 h 26.83 a 7,7 0 0 0 7,-7 v -7.38 c 0.15,-2 2.64,-5.42 5.75,-5.66 l 30.22,-0.32 c 4.43,0 7.35,3.55 7.35,8 l 0.1,15.83 c 0,4.18 4,7.56 8.16,7.56 h 29.79 a 4.35,4.35 0 0 0 2.89,-1.1 l 6.31,-5.61 a 4,4 0 0 1 2.91,-1.3 h 52.52"
            id="silver-line"
          />
          <path
            className={styles.line}
            stroke={cor5}
            strokeWidth="3px"
            strokeMiterlimit="10"
            strokeLinecap="round"
            fill="none"
            d="m 324.47458,363.81369 v -8.58 a 6.42,6.42 0 0 1 6.42,-6.42 h 32.33 a 3.25,3.25 0 0 0 3.25,-3.25 v -13.87 a 4.88,4.88 0 0 0 -4.88,-4.88 h -2.88 a 5.24,5.24 0 0 1 -5.24,-5.24 v -21.51 a 7.84,7.84 0 0 0 -2.3,-5.54 l -13.7,-13.71 a 12.07,12.07 0 0 1 -3.54,-8.54 v -17 a 4,4 0 0 1 4,-4 h 27.93 a 3.57,3.57 0 0 1 3.57,3.57 v 14.84 a 13.09,13.09 0 0 0 13.13,13.13 h 30.26 a 4.7,4.7 0 0 0 2.94,-1 l 7,-5.57 a 6.4,6.4 0 0 1 4,-1.4 h 49.71"
            id="blue-line"
          />
          <path
            className={styles.line}
            stroke={cor6}
            strokeWidth="3px"
            strokeMiterlimit="10"
            strokeLinecap="round"
            fill="none"
            d="m 379.97458,163.31369 v 31.5 a 6.2,6.2 0 0 0 1.69,4.26 l 27.74,28.59 a 5,5 0 0 1 1.07,1.8 5.22,5.22 0 0 1 0.3,2.06 c -0.28,7.59 0.3,15.2 0.16,22.79 a 4.32,4.32 0 0 1 -1,3 3.68,3.68 0 0 1 -2,1 c -11.33,0 -26.67,-0.15 -38,0 -7.89,0.1 -7.29,-3.89 -7.29,-3.89 l -0.17,-16.46 c -0.3,-1.25 -2,-3.14 -2.87,-4.08 l -10.05,-10.66 a 5.25,5.25 0 0 0 -4,-1.91 h -2.38 c -2.69,0 -5.27,-3.08 -7.15,-5 l -41.05,-41"
            id="red-line"
          />
          <g transform="rotate(-179.998,581.49,281.56)" id="svg_16">
            <path
              className={styles.line}
              stroke={cor1}
              strokeWidth="3px"
              strokeMiterlimit="10"
              strokeLinecap="round"
              fill="none"
              d="m 655.24018,341.3099 -14,-14 c -0.7,-1 -2.77,-0.83 -3.95,-0.57 l -4.17,2.15 a 3.32,3.32 0 0 1 -3.17,-1 l -8.07,-8.79 a 5.51,5.51 0 0 0 -4.06,-1.79 h -14.24 a 4.37,4.37 0 0 1 -4.37,-4.33 l 0.53,-58.38 a 4.84,4.84 0 0 0 -4.84,-4.89 h -3.19 a 4,4 0 0 1 -4,-4 v -1.9 a 4,4 0 0 1 4,-4 h 6.73 a 8,8 0 0 0 7.36,-4.84 l 1.58,-3.66 a 6.64,6.64 0 0 1 0.83,-1 l 22.53,-22.5"
              id="svg_10"
            />
            <path
              className={styles.line}
              stroke={cor2}
              strokeWidth="3px"
              strokeMiterlimit="10"
              strokeLinecap="round"
              fill="none"
              d="m 578.24018,382.3099 v -37 c 0,-4.43 -2.57,-6.13 -7,-6 0,0 -6,1.22 -6,-2 v -15 c 0,-2.13 11,-11 11,-11 1.39,-1.33 4.08,-1 6,-1 h 10 c 3,0 3,-1.1 3,-6 v -45 c 0,-3.35 0.65,-5.63 -2.66,-5.68 h -1.72 a 6.83,6.83 0 0 1 -6.81,-6.83 v -3.84 a 7,7 0 0 1 7,-7 c 3.39,0 6.77,0 6.94,0 a 6,6 0 0 0 2,-0.38 l 1.84,-1.28 1.7,-1.6"
              id="svg_11"
            />
            <path
              className={styles.line}
              stroke={cor3}
              strokeWidth="3px"
              strokeMiterlimit="10"
              strokeLinecap="round"
              fill="none"
              d="m 478.74018,281.8099 43.9,0 c 5.1,0 11.6,1.5 11.6,-3.5 l 0,-5.5 c 0,-9 7.5,-12 9.5,-12 h 32 c 2.54,0 10,1 10,12 l 0,13 c 0,2.54 0,7 6,7 h 26 c 1.07411,3.9e-4 2.1131,-0.38258 2.93,-1.08 l 6.77,-5.81 c 0.83501,-0.71697 1.89941,-1.1108 3,-1.11"
              id="svg_12"
            />
            <path
              className={styles.line}
              stroke={cor4}
              strokeWidth="3px"
              strokeMiterlimit="10"
              strokeLinecap="round"
              fill="none"
              d="m 480.24018,262.3099 22.17,22.17 a 2.84,2.84 0 0 0 2,0.83 h 26.83 a 7,7 0 0 0 7,-7 v -7.38 c 0.15,-2 2.64,-5.42 5.75,-5.66 l 30.22,-0.32 c 4.43,0 7.35,3.55 7.35,8 l 0.1,15.83 c 0,4.18 4,7.56 8.16,7.56 h 29.79 a 4.35,4.35 0 0 0 2.89,-1.1 l 6.31,-5.61 a 4,4 0 0 1 2.91,-1.3 h 52.52"
              id="svg_13"
            />
            <path
              className={styles.line}
              stroke={cor5}
              strokeWidth="3px"
              strokeMiterlimit="10"
              strokeLinecap="round"
              fill="none"
              d="m 532.24018,381.3099 v -8.58 a 6.42,6.42 0 0 1 6.42,-6.42 h 32.33 a 3.25,3.25 0 0 0 3.25,-3.25 v -13.87 a 4.88,4.88 0 0 0 -4.88,-4.88 h -2.88 a 5.24,5.24 0 0 1 -5.24,-5.24 v -21.51 a 7.84,7.84 0 0 0 -2.3,-5.54 l -13.7,-13.71 a 12.07,12.07 0 0 1 -3.54,-8.54 v -17 a 4,4 0 0 1 4,-4 h 27.93 a 3.57,3.57 0 0 1 3.57,3.57 v 14.84 a 13.09,13.09 0 0 0 13.13,13.13 h 30.26 a 4.7,4.7 0 0 0 2.94,-1 l 7,-5.57 a 6.4,6.4 0 0 1 4,-1.4 h 49.71"
              id="svg_14"
            />
            <path
              className={styles.line}
              stroke={cor6}
              strokeWidth="3px"
              strokeMiterlimit="10"
              strokeLinecap="round"
              fill="none"
              d="m 587.74018,180.8099 v 31.5 a 6.2,6.2 0 0 0 1.69,4.26 l 27.74,28.59 a 5,5 0 0 1 1.07,1.8 5.22,5.22 0 0 1 0.3,2.06 c -0.28,7.59 0.3,15.2 0.16,22.79 a 4.32,4.32 0 0 1 -1,3 3.68,3.68 0 0 1 -2,1 c -11.33,0 -26.67,-0.15 -38,0 -7.89,0.1 -7.29,-3.89 -7.29,-3.89 l -0.17,-16.46 c -0.3,-1.25 -2,-3.14 -2.87,-4.08 l -10.05,-10.66 a 5.25,5.25 0 0 0 -4,-1.91 h -2.38 c -2.69,0 -5.27,-3.08 -7.15,-5 l -41.05,-41"
              id="svg_15"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export { Railway };
