import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Hero } from '../../components/Hero';
import { About } from '../About';
import { Countdown } from '../Countdown/Countdown';
import { FAQ } from '../FAQ';
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
        <About className={styles.section} />
        <Participate className={styles.section} />
        <Schedule className={styles.section} />
        <Countdown className={styles.section} />
        <Partners className={styles.section} />
        <Organizers className={styles.section} />
        <FAQ className={styles.section} />
      </main>

      {/* Footer */}
    </div>
  );
};

export { Home };
