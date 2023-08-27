import React from 'react'
import styles from "./page.module.css"
import LeftSide from '@/components/Layout/LeftSide/LeftSide'

const LeftSidePage = () => {
  return (
      <div className={styles.leftSide}>
          <LeftSide />
      </div>
  )
}

export default LeftSidePage