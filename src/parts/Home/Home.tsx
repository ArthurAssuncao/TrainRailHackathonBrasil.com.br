import React from 'react';
import { Element } from 'react-scroll';
import { ToastContainer } from 'react-toastify';
import { ButtonScrollToTop } from '../../components/ButtonScrollToTop';
import { Hero } from '../../components/Hero';
import { About } from '../About';
import { Countdown } from '../Countdown/Countdown';
import { FAQ } from '../FAQ';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Organizers } from '../Organizers';
import { Participate } from '../Participate';
import { Partners } from '../Partners';
import { RailwayBorder } from '../RailwayBorder';
import { Schedule } from '../Schedule';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <ToastContainer />
      {/* Header */}
      <div className={styles.containerHeader}>
        <Header />
        <Hero />
      </div>

      {/* Main */}
      <main className={styles.main}>
        <Element name="about">
          <RailwayBorder type={0}>
            <About className={styles.section} />
          </RailwayBorder>
        </Element>
        <Element name="participate">
          <RailwayBorder type={1}>
            <Participate className={styles.section} />
          </RailwayBorder>
        </Element>
        <Element name="schedule">
          <RailwayBorder type={2} size="half">
            <Schedule className={styles.section} />
          </RailwayBorder>
        </Element>
        <Element name="countdown">
          <RailwayBorder type={1} size="half">
            <Countdown className={styles.section} />
          </RailwayBorder>
        </Element>
        <Element name="partners">
          <RailwayBorder type={2}>
            <Partners className={styles.section} />
          </RailwayBorder>
        </Element>
        <Element name="organizers">
          <RailwayBorder type={1}>
            <Organizers className={styles.section} />
          </RailwayBorder>
        </Element>
        <Element name="faq">
          <RailwayBorder type={2}>
            <FAQ className={styles.section} />
          </RailwayBorder>
        </Element>
      </main>

      {/* Footer */}
      <Element name="contact">
        <Footer className={styles.footer} />
      </Element>

      <ButtonScrollToTop className={styles.buttonToTop} />
    </div>
  );
};

export { Home };
