import styles from './components/css/App.module.css'

import Header from './components/layout/Header';  
import Main from './components/layout/Main';  
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
