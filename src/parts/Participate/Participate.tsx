import helpCircleOutline from '@iconify/icons-ion/help-circle-outline';
import peopleCircleOutline from '@iconify/icons-ion/people-circle-outline';
import timeOutline from '@iconify/icons-ion/time-outline';
import mapMarkerCircle from '@iconify/icons-mdi/map-marker-circle';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import { Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { ParticipateCard } from '../../components/ParticipateCard';
import { TitleSection } from '../../components/TitleSection';
import styles from './Participate.module.scss';
interface ParticipateProps {
  className?: string;
}

const Participate = (props: ParticipateProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Slide direction="up" triggerOnce>
        <TitleSection title={t('participate_title')} className={styles.title} />
        <ParticipateCard
          className={classNames(styles.firstCard, styles.card)}
          title={t('participate_oquee')}
          icon={<Icon icon={helpCircleOutline} />}
          text={t('participate_oquee_text')}
          type="no-card"
        />
      </Slide>
      <Slide direction="up" cascade triggerOnce>
        <div className={styles.cards}>
          <ParticipateCard
            className={styles.card}
            title={t('participate_quem')}
            icon={<Icon icon={peopleCircleOutline} />}
            text={t('participate_quem_text')}
          />
          <ParticipateCard
            className={styles.card}
            title={t('participate_quando')}
            icon={<Icon icon={timeOutline} />}
            text={t('participate_quando_text')}
          />
          <ParticipateCard
            className={styles.card}
            title={t('participate_onde')}
            icon={<Icon icon={mapMarkerCircle} />}
            text={t('participate_onde_text')}
          />
        </div>
      </Slide>
    </section>
  );
};

export { Participate };
