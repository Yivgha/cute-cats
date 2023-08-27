import React from 'react'
import styles from "./Voting.module.css"
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from "../LikesNav/LikesNav"


const Voting = () => {
  return (
    <div className={styles.wrapper}>
        <Dashboard />
      
      <div className={styles.rightSide}>
        <LikesNav /> 
        <div>Voting content</div>
      </div>
    </div>
    
  )
}

export default Voting
