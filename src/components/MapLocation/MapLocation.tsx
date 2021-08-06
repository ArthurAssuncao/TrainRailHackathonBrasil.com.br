import classNames from 'classnames';
import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './MapLocation.module.scss';

interface MapLocationProps {
  className?: string;
}

const MapLocation = (props: MapLocationProps): JSX.Element => {
  const { className } = props;

  const { t } = useTranslation();

  const positions = {
    brPA: {
      x: 210,
      y: 315,
    },
    brSC: {
      x: 210,
      y: 365,
    },
    brMG: {
      x: 220,
      y: 345,
    },
    ch: {
      x: 510,
      y: 240,
    },
    ru: {
      x: 450,
      y: 150,
    },
    ma: {
      x: 300,
      y: 260,
    },
    es: {
      x: 310,
      y: 230,
    },
    tr: {
      x: 377,
      y: 230,
    },
  };

  const positionTextShift = {
    x: 0,
    y: -7,
  };

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.mapContainer}>
        <svg
          className={styles.mapSvg}
          id="Map-svg"
          viewBox="0 0 670.2 432.4"
          style={
            { 'enable-background': 'new 0 0 670.2 432.4;' } as CSSProperties
          }
          xmlSpace="preserve"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient
              className={styles.mapGradient}
              id="Map-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0f9ad7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0f9ad7" stopOpacity="0.5" />
            </linearGradient>
            <clipPath id="Map-mask">
              <use xlinkHref="#Map-globe"></use>
            </clipPath>
          </defs>
          <g id="Map-texts">
            <text
              y={positions.brPA.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper1
              )}
            >
              <tspan
                x={positions.brPA.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_br_pa')}
              </tspan>
            </text>
            <text
              y={positions.brSC.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper2
              )}
            >
              <tspan
                x={positions.brSC.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_br_sc')}
              </tspan>
            </text>
            <text
              y={positions.brMG.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper3
              )}
            >
              <tspan
                x={positions.brMG.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_br_mg')}
              </tspan>
            </text>
            <text
              y={positions.ch.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper4
              )}
            >
              <tspan
                x={positions.ch.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_ch')}
              </tspan>
            </text>
            <text
              y={positions.ru.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper5
              )}
            >
              <tspan
                x={positions.ru.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_ru')}
              </tspan>
            </text>
            <text
              y={positions.ma.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper6
              )}
            >
              <tspan
                x={positions.ma.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_ma')}
              </tspan>
            </text>
            <text
              y={positions.es.y + positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper7
              )}
            >
              <tspan
                x={positions.es.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_es')}
              </tspan>
            </text>
            <text
              y={positions.tr.y - positionTextShift.y}
              className={classNames(
                styles.pinTextWrapper,
                styles.pinTextWrapper8
              )}
            >
              <tspan
                x={positions.tr.x + positionTextShift.x}
                textAnchor="middle"
                className={styles.pinText}
              >
                {t('map_tr')}
              </tspan>
            </text>
          </g>
          <g clipPath="url(#Map-mask)" fill="url(#Map-gradient)" id="Map-shape">
            <path
              id="Map-globe"
              d="M338,49.3l7.5-0.6l7.7-6.7h10.6l6.2-2.4v5l-2.9,5.5l1.5,0.1l-3.5,4.1l5.2,5.7l-14.8,13.8l-3.4,0.2l-6.2-4.7l0,0
        v-3.9l-4-4.4v-7.5l-4-3.4L338,49.3L338,49.3z M312,166v9.1l10.7,10.9H320l-0.6,9H296v-20.7l12.5-12.8L312,166z M134,26.4l20.5-7.4h7
        l12.8-13h22.9H197v8.6l-15,15v18.1l-12,12.6V79h-11.6l-5.1-7l4.2-9.1L134,42.7V26.4z M201.4,132.1l-7.4,6.5V160h-0.6L180,143.2
        v-17.4l-17.6-17.7l-9,8.6l-7.2-6.9l-5.3,4.4L125.2,101h53.3l13.5,12v8.4L201.4,132.1z M123.1,57.1l14.5-0.1l6.8,5.1l-4.6,3.3
        L157.3,86h12.5l6.3,5H140l-17-17.8L123.1,57.1z M107.5,73l6.5,7.3V93h-4.5L94.1,77.8L93.8,73H107.5z M78,95h21.2l6.3,6h8l22.2,22.7
        l-1.5,2.3h-7.8l-4.2-4.2L118,126h-10.3l-10.5-11h-5.8L78,101.6V95z M247,315v18.3L219,362v7l-27,28.7V409l-5,3.7v19.7l-10-10.7v-32
        l3-3.3v-20l2-3.7V345l-21-21.3v-21.3l5.8-5.3l-12.1-13h-15.2l-11-12h-3.7L96,243.3v-6.7l-15-14v-29L53.8,165H40.2l-15.4,9.6L7,157.3
        v-14.7L0,136v-16.3l18.5-4.6h12.7l5,5h14.7l5.7,4h41.1l9.6,11h11l4.3-4.3l4.3,4.3h12l7.3-11.5l6.1,3.5l6.3-8.1l4.4,7.4v8.7l-22,22.3
        V180h14.5l13.5,11.6v-12.9l7-7l-5-5V157h12.2l34,34.3L191.8,217H182l-8,8v5.3l-13.7,13v3.3l2.1,3.4l-0.1,6.4l-3,0.1l-3.6-6.5
        l-23.8,0.3v12L142,273l9.9-2v1.6l17.8,17.4h46.7l23.3,25H247L247,315z M262.3,131l-22.3,8.7v2.7l-6,6.2V166l-16-15v-37.2l-10-9.6
        V86.4l-6.4-7.4H181V59.6l6-7.2V31.1l18.1-0.1l15.3-15h9.5l16.2-16h17.1l15.9,13.1l-4.4,1.7l5.9,7.7l6.8-3.5h6l8.6,8.5l-20,13.1v25.3
        l-3,3.9v19.7l-2,6.9l3.2,20.3L269.7,131H262.3z M272,145.1v-6.4l12.5-0.8h7.5v2.7l-0.5,13.3h-10.8L272,145.1z M412,339.8l-6,5.5V361
        h-5v-25.7l11-11.4V339.8z M395,309.2v24.3l-11,9.3v8.6l-4,4.3v7l-4.1,17.3h-13.7L343,361.5v-16l-5-4.9v-28.9l-5-5V301h-28.6
        L285,282.3V255l28.7-15h7.1l4.8-5H337v6h12.1l5.9,7v-3h18.8l13.2,15v8.3l21.5,20.7h6.7L395,309.2z M525.3,322.6H509v-3.2L498.7,309
        v-6.7l12.2,12.2h12.5l4.2,4.2L525.3,322.6z M600.3,400l-3.2-4.3l0.3-3.1h4.3L600.3,400z M591.6,388l-2.8-2.7l0.2-6.3h-7.3l-5.3-6
        H564l-4.6,6h-8.6l-2.8,1h-12v-16.2l-0.6-2l2.9-9l6.5-2.9h5.2l15.2-15H576v-3.1l10,10.6V331h3l6,4v3.8l10,12.2l0.1,37.1h-13.5V388z
         M533.6,313.8L552,298l-1.3,23.3l-7.6,2.7L533.6,313.8z M590.3,219.3h-5.5l-2.3,3.2l2.4,3.5l0.1,9l-10.3,7.7v2l-2.1,1.3l-3.4-2.7
        l0.1-6.5l10.5-8.2l-0.1-11.3l6.8-7.8l8,4.7L590.3,219.3z M600.8,327h-16.3l-8.2-8.6l3-3.4h18.6l3.1,2.4L600.8,327z M654,142.2v4.1
        L612.7,190l1.9-16.4l8.7-11.5l-10.6,9h-19l-13.5,14h3.8v14.3l-21.2,24.4l6.6,4.7l-7.1,5.7l-6.3-3.6v-2.8l-7.2-6.2l-5.8,4.9v6.2l5,4
        v12.9l-4.5,17.6h-14.6l-8.3,1.8l8.4,9.4v3.8l-6.8,11.5L516,286v9.3l2.1,3.2l-0.6,6l-5.8-0.5l-2-7.5l-0.2-16.4L495.9,266h-4
        l-15.3,12.7l-0.3,4l-5.1,6.2l-8.4-8.1l-0.2-9.7L449.2,261h-15.3l6,5.8L422.5,284h-11.7L392,266.1v-7.9l-15.3-16l7.4-6.2h-8.6
        l-22.2-25.1l-4.4-2.9v4.6l6.3,6.6v4.7l-3.8,2l-10.1-6.9h-7l-16.1,16h-8.5L299,224.2V219h16v-15.6l20.9-16.4h21.6l4.6-17.4v-9.3h-3
        v-11.8l3-3.7l-12,3.5V181H341v-8h-14v-27.6l42.2-29.4h12.6l13.2,13.7v3.8l-6.5,5.9l-8.5-7.8v6.1l12.1,11.2l28.3-21.9h16.1l21-20h12
        l25.7-25h15.9l12.5-13.1l5.7,6.1h8.2l-0.1,16.5l-8.9,9.5h30.2l8.8,9h44l14.3,14h16.3l2.3-3h15.5l10.3,11.4L654,142.2z"
            ></path>
            <g data-location="BR-pa" className={styles.pin1}>
              <circle
                className={styles.pinBack}
                cx={positions.brPA.x}
                cy={positions.brPA.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.brPA.x}
                cy={positions.brPA.y}
                r="2.5"
                fill="#fff"
              />
            </g>
            <g data-location="BR-sc" className={styles.pin2}>
              <circle
                className={styles.pinBack}
                cx={positions.brSC.x}
                cy={positions.brSC.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.brSC.x}
                cy={positions.brSC.y}
                r="2.5"
                fill="#fff"
              />
            </g>
            <g data-location="BR-mg" className={styles.pin3}>
              <circle
                className={styles.pinBack}
                cx={positions.brMG.x}
                cy={positions.brMG.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.brMG.x}
                cy={positions.brMG.y}
                r="2.5"
                fill="#fff"
              />
            </g>

            <g data-location="CH" className={styles.pin4}>
              <circle
                className={styles.pinBack}
                cx={positions.ch.x}
                cy={positions.ch.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.ch.x}
                cy={positions.ch.y}
                r="2.5"
                fill="#fff"
              />
            </g>
            <g data-location="RU" className={styles.pin5}>
              <circle
                className={styles.pinBack}
                cx={positions.ru.x}
                cy={positions.ru.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.ru.x}
                cy={positions.ru.y}
                r="2.5"
                fill="#fff"
              />
            </g>
            <g data-location="MA" className={styles.pin6}>
              <circle
                className={styles.pinBack}
                cx={positions.ma.x}
                cy={positions.ma.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.ma.x}
                cy={positions.ma.y}
                r="2.5"
                fill="#fff"
              />
            </g>
            <g data-location="ES" className={styles.pin7}>
              <circle
                className={styles.pinBack}
                cx={positions.es.x}
                cy={positions.es.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.es.x}
                cy={positions.es.y}
                r="2.5"
                fill="#fff"
              />
            </g>
            <g data-location="TR" className={styles.pin8}>
              <circle
                className={styles.pinBack}
                cx={positions.tr.x}
                cy={positions.tr.y}
                r="2.5"
                fill="#fff"
                fillOpacity="0.5"
              />
              <circle
                className={styles.pinFront}
                cx={positions.tr.x}
                cy={positions.tr.y}
                r="2.5"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export { MapLocation };
