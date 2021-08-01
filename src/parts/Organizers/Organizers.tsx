import classNames from 'classnames';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import nextId from 'react-id-generator';
import { TitleSection } from '../../components/TitleSection';
import styles from './Organizers.module.scss';
interface OrganizersProps {
  className?: string;
}

const Organizers = (props: OrganizersProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  const organizers: string[] = [
    'Alessandra Coelho',
    'Arthur Assuncao',
    'Bruno Lyra',
    'Bruno Silva',
    'Carlos Leal',
    'Celso Luiz De Souza',
    'Cheilon Camargo',
    'Christiane Lima Barbosa',
    'Emerson Moraes',
    'Fernando Caneschi',
    'Flavia Ruback',
    'Iara Nascimento',
    'Juliana Godinho',
    'Livia Avila',
    'Paulo Machado',
    'Pedro Rocha',
    'Philipe Pacheco',
    'Yesid Asaff',
  ];

  return (
    <section className={classNames(className, styles.container)}>
      <Slide direction="up">
        <TitleSection title={t('organizers_title')} className={styles.title} />
        <div className={styles.organizers}>
          {organizers.map((organizer) => {
            return (
              <span className={styles.organizer} key={nextId()}>
                {organizer}
              </span>
            );
          })}
        </div>
      </Slide>
    </section>
  );
};

export { Organizers };
