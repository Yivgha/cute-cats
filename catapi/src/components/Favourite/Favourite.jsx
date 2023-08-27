import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from "./Favourite.module.css"

const Favourite = () => {
  return (
    <div className={styles.wrapper}>
       <Dashboard />
      <div className={styles.rightSide}>
        Fav Page
        <LikesNav /> 
        <div>Fav Page content</div>
      </div>
    </div>
  )
}

export default Favourite