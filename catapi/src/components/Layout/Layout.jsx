import React from 'react'
import styles from "./Layout.module.css"
import LeftSide from "./LeftSide/LeftSide"

const HomeLayout = () => {
  return (
      <div className={styles.wrapper}>
          <div className={styles.leftSide}>
              <LeftSide />
          </div>
          <div className={styles.rightSide}>right</div>
    </div>
  )
}

export default HomeLayout