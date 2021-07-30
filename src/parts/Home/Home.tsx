import { ToastContainer } from 'react-toastify';
import { Header } from '../Header';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <ToastContainer />
      {/* Header */}
      <Header />

      {/* Main */}

      {/* Footer */}
    </div>
  );
};

export { Home };
