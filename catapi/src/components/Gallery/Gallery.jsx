import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from "./Gallery.module.css"

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
       <Dashboard />
      <div className={styles.rightSide}>
        <LikesNav /> 
        <div>Gallery content</div>
      </div>
    </div>
    
  )
}

export default Gallery
