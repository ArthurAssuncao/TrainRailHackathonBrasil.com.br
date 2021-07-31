import classNames from 'classnames';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { ScheduleItem } from '../../components/ScheduleItem';
import { TitleSection } from '../../components/TitleSection';
import styles from './Schedule.module.scss';

interface ScheduleProps {
  className?: string;
}

const Schedule = (props: ScheduleProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Slide direction="left">
        <TitleSection title={t('schedule_title')} className={styles.title} />
        <div className={styles.schedules}>
          <ScheduleItem
            date={t('schedule_registration_date')}
            title={t('schedule_registration_title')}
            text={t('schedule_registration_text')}
          />
          <ScheduleItem
            date={t('schedule_event_date')}
            title={t('schedule_event_title')}
            text={t('schedule_event_text')}
          />
        </div>
      </Slide>
    </section>
  );
};

export { Schedule };
