import React from 'react'
import Header from "../../app/home/page"
import styles from './Breed.module.css'

const Breed = () => {
  return (
    <div className={styles.defaultWrapper}>
       <div className={styles.leftWrapper}><Header /> </div>
      <div className={styles.breedWrapper}>Breed</div>
    </div>
    
  )
}

export default Breed
