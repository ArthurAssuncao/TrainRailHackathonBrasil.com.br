import { ToastContainer } from 'react-toastify';
import { Hero } from '../../components/Hero';
import { About } from '../About';
import { Header } from '../Header';
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
      <main>
        <About />
      </main>

      {/* Footer */}
    </div>
  );
};

export { Home };
