import React from 'react'
import styles from "./page.module.css"
import RightSide from '@/components/RightSide/RightSide'
// import Voting from '@/components/Voting/Voting'

const RightSidePage = () => {
  return (
    <div className={styles.rightSide}>
      {/* <Voting /> */}
      <RightSide />
      </div>
  )
}

export default RightSidePage