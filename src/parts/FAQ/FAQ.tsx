import classNames from 'classnames';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Accordion } from '../../components/Accordion';
import { TitleSection } from '../../components/TitleSection';
import styles from './FAQ.module.scss';

interface FAQProps {
  className?: string;
}

const FAQ = (props: FAQProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Fade triggerOnce={true}>
        <TitleSection title={t('faq_title')} className={styles.title} />
        <div className={styles.faqs}>
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_1_title')}
            content={t('faq_question_1_content')}
          />
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_2_title')}
            content={t('faq_question_2_content')}
          />
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_3_title')}
            content={t('faq_question_3_content')}
          />
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_4_title')}
            content={t('faq_question_4_content')}
          />
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_5_title')}
            content={t('faq_question_5_content')}
          />
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_6_title')}
            content={t('faq_question_6_content')}
          />
          <Accordion
            className={styles.faqItem}
            title={t('faq_question_7_title')}
            content={t('faq_question_7_content')}
          />
        </div>
      </Fade>
    </section>
  );
};

export { FAQ };
