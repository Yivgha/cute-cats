import React from 'react'
import styles from "./page.module.css"
import RightSide from '@/components/Layout/RightSide/RightSide'
import Voting from '@/components/Voting/Voting'

const RightSidePage = (props) => {
  return (
    <div className={styles.rightSide}>
      {/* <RightSide /> */}
      {props.voting ? <Voting /> : <RightSide />}
      </div>
  )
}

export default RightSidePage