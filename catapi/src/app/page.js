import styles from './page.module.css'
import HomePage from "./home/page"
import RightSidePage from './rightSide/page';

 const IndexPage = () => {
  return (
    <main
      className={`${styles.main} ${styles.wrapper}`}
    >
      <HomePage />
      <RightSidePage />
    </main>
  )
}

export default IndexPage;