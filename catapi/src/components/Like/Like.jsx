import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from "./Like.module.css"
const Like = () => {
  return (
    
    <div className={styles.wrapper}>
       <Dashboard />
      <div className={styles.rightSide}>
        Like Page
        <LikesNav /> 
        <div>Like page content</div>
      </div>
    </div>
  )
}

export default Like