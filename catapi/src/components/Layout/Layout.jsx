import React from 'react'
import styles from "./Layout.module.css"
import LeftSide from "./LeftSide/LeftSide"
import RightSide from './RightSide/RightSide'

const HomeLayout = () => {
  return (
      <div className={styles.wrapper}>
          <div className={styles.leftSide}>
        <LeftSide />
          </div>
      <div className={styles.rightSide}>
        <RightSide />
          </div>
    </div>
  )
}

export default HomeLayout