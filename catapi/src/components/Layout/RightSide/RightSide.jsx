import React from 'react'
import styles from "./RightSide.module.css"
import Image from 'next/image'
import girlAndCat from "../../../assets/images/girl-and-pet 1.png"

const RightSide = () => {
  return (
      <div className={styles.rightWrapper}>
          <div className={styles.rectangle}> </div>
          <Image src={girlAndCat} alt="girl and cat" width="775px" height="900px" style={{position: "absolute", top: 0, left: "-65px"}}/>
    </div>
  )
}

export default RightSide