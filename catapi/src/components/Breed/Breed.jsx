import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from './Breed.module.css'

const Breed = () => {
  return (
    <div className={styles.wrapper}>
        <Dashboard />
      <div className={styles.rightSide}>
       <LikesNav /> 
        <div>Breed content</div>
      </div>
    </div>
    
  )
}

export default Breed