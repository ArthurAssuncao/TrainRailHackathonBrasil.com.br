import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Hero } from '../../components/Hero';
import { About } from '../About';
import { Header } from '../Header';
import { Participate } from '../Participate';
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
      </main>

      {/* Footer */}
    </div>
  );
};

export { Home };
