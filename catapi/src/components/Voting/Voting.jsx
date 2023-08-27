import React from 'react'
import styles from "./Voting.module.css"
import Header from "../../app/home/page"

const Voting = () => {
  return (
    <div className={styles.defaultWrapper}>
      <div className={styles.leftWrapper}><Header /> </div>
      
      <div className={styles.votingWrapper}>
        Voting
      </div>
    </div>
    
  )
}

export default Voting
