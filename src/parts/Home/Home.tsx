import React from 'react';
import { Element } from 'react-scroll';
import { ToastContainer } from 'react-toastify';
import { Hero } from '../../components/Hero';
import { About } from '../About';
import { Countdown } from '../Countdown/Countdown';
import { FAQ } from '../FAQ';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Organizers } from '../Organizers';
import { Participate } from '../Participate';
import { Partners } from '../Partners';
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
          <About className={styles.section} />
        </Element>
        <Element name="participate">
          <Participate className={styles.section} />
        </Element>
        <Element name="schedule">
          <Schedule className={styles.section} />
        </Element>
        <Element name="countdown">
          <Countdown className={styles.section} />
        </Element>
        <Element name="partners">
          <Partners className={styles.section} />
        </Element>
        <Element name="organizers">
          <Organizers className={styles.section} />
        </Element>
        <Element name="faq">
          <FAQ className={styles.section} />
        </Element>
      </main>

      {/* Footer */}
      <Element name="contact">
        <Footer className={styles.footer} />
      </Element>
    </div>
  );
};

export { Home };
