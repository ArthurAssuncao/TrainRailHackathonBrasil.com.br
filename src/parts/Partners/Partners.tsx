import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import LogoAstonrail from '../../assets/images/parceiros/astonrail.png';
import LogoIFF from '../../assets/images/parceiros/iff-institut-de-formation-ferroviare.svg';
import LogoMERTCE from '../../assets/images/parceiros/MERTCE-middle-east-railway-trainig-center.png';
import LogoMIIT from '../../assets/images/parceiros/MIIT-russian-university-of-transport.png';
import LogoONCF from '../../assets/images/parceiros/ONCF-office-national-des-chemins-defer.png';
import LogoSWJTU from '../../assets/images/parceiros/SWJTU-southwest-jiaotong-university.png';
import LogoTCDD from '../../assets/images/parceiros/TCDD-the-state-railways-of-the-republic-of-turkey.png';
import LogoUIC from '../../assets/images/parceiros/UIC-international-union-of-railways.svg';
import LogoUMA from '../../assets/images/parceiros/UMA-universidad-de-malaga.png';
import { TitleSection } from '../../components/TitleSection';
import styles from './Partners.module.scss';

interface PartnersProps {
  className?: string;
}

const Partners = (props: PartnersProps): JSX.Element => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={classNames(className, styles.container)}>
      <Fade>
        <TitleSection title={t('partners_title')} className={styles.title} />
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Image
              src={LogoAstonrail}
              alt="Logo da Astonrail"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoIFF}
              alt="Logo do Institut de Formation Ferroviare"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoMERTCE}
              alt="Logo do Middle-east Railway Trainig Center"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoMIIT}
              alt="Logo da russian-university-of-transport"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoONCF}
              alt="Logo do Office National des Chemins Defer"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoSWJTU}
              alt="Logo da Southwest Jiaotong University"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoTCDD}
              alt="Logo do The State Railways of the Republic of Turkey"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoUIC}
              alt="Logo do International Union of Railways"
              width={150}
              height={100}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={LogoUMA}
              alt="Logo da universidad de Malaga"
              width={150}
              height={100}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export { Partners };
