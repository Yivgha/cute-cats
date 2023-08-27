import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from "./Dislikes.module.css"

const Dislikes = () => {
  return (
    <div className={styles.wrapper}>
       <Dashboard />
      <div className={styles.rightSide}>
        Dislike Page
        <LikesNav /> 
        <div>Dislike page content</div>
      </div>
    </div>
  )
}

export default Dislikes