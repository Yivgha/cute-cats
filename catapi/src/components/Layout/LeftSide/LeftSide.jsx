import React from 'react'
import Image from 'next/image'
import styles from "./LeftSide.module.css"
import logo from "../../../assets/images/logo.png"

const LeftSide = () => {
  return (
      <div className={styles.leftWrapper}>
          <div>
              <Image src={logo} alt="logo" width="107px" height="24px" />
              <div className={styles.pagesNav}>
                  <h1 className={styles.title}>Hi! &#128075; </h1>
                  <h2 className={styles.underTitle}>Welcome to MacPaw Bootcamp 2023</h2>
                  <p className={styles.basicText}>Lets start using The Cat API</p>
                  <div>
                      <ul className={styles.mainList}>
                          <li className={styles.listEl}></li>
                          <li className={styles.listEl}></li>
                          <li className={styles.listEl}></li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default LeftSide;