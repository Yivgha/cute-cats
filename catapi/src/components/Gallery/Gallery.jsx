import React from 'react'
import Header from "../../app/home/page"
import styles from "./Gallery.module.css"

const Gallery = () => {
  return (
    <div className={styles.defaultWrapper}>
       <div className={styles.leftWrapper}><Header /> </div>
      <div className={styles.galleryWrapper}>Gallery</div>
    </div>
    
  )
}

export default Gallery
