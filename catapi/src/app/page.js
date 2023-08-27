import styles from './page.module.css'
import IndexPage from "./home/page"
import RightSidePage from './@right/page';

 const Home = () => {
  return (
    <main className={`${styles.main} ${styles.wrapper}`}>
      <IndexPage />
      <RightSidePage />
    </main>
  )
}

export default Home;