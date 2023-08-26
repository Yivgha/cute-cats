import React from 'react'
import Image from 'next/image'
import styles from "./LeftSide.module.css"
import paw from "../../../assets/images/paw-logo.png"
import textLogo from "../../../assets/images/PetsPaw.png"
import votes from "../../../assets/images/vote-table.png"
import breed from "../../../assets/images/pet-breeds.png"
import gallery from "../../../assets/images/images-search.png"

const LeftSide = () => {
  return (
      <div className={styles.leftWrapper}>
          <div>
              <div className={styles.logoBox}>
              <Image src={paw} alt="paw logo" width="24px" height="24px" className={styles.logo} />
                  <Image src={textLogo} alt="text logo" width="71px" height="24px" />
                  </div>
              <div className={styles.pagesNav}>
                  <h1 className={styles.title}>Hi! &#128075; </h1>
                  <h2 className={styles.underTitle}>Welcome to MacPaw Bootcamp 2023</h2>
                  <p className={styles.basicText}>Lets start using The Cat API</p>
                  <div>
                      <ul className={styles.mainList}>
                          <li className={styles.listElWrapper}>
                              <a href='/'>
                              <div className={`${styles.listEl} ${styles.votesEl}`}>
                                  <Image src={votes}  alt="votes element img" width="100px" height="124px"/>
                              </div>
                              <div className={styles.listBottom}>
                                  <p className={styles.listBoxName}>Voting</p>
                                  </div>
                                  </a>
                          </li>
                          <li className={styles.listElWrapper}>
                              <a href='/'>
                              <div className={`${styles.listEl} ${styles.breedsEl}`}>
                                  <Image src={breed}  alt="breed element img" width="100px" height="124px"/>
                              </div>
                              <div className={styles.listBottom}>
                                   <p className={styles.listBoxName}>Breeds</p>
                                  </div>
                                  </a>
                          </li>
                          <li className={styles.listElWrapper}>
                              <a href='/'>
                              <div className={`${styles.listEl} ${styles.galleryEl}`}>
                                  <Image src={gallery}  alt="gallery element img" width="100px" height="124px"/>
                              </div>
                              <div className={styles.listBottom}>
                                  <p className={styles.listBoxName}>Gallery</p>
                                  </div>
                                  </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default LeftSide;