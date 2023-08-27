import styles from './page.module.css'
import LeftSidePage from './@left/page';
import RightSidePage from './@right/page';

 const Home = () => {
  return (
    <main className={`${styles.main} ${styles.wrapper}`}>
      <LeftSidePage />
      <RightSidePage />
    </main>
  )
}

export default Home;