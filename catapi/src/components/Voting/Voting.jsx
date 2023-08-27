"use client"
import React from 'react'
import styles from "./Voting.module.css"
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from "../LikesNav/LikesNav"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import arrowBack from "../../assets/images/nav/arrow-back.svg"
import smile from "../../assets/images/nav/like.svg"
import heart from "../../assets/images/nav/fav.svg"
import dislike from "../../assets/images/nav/dislike.svg"

const Voting = () => {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
        <Dashboard />
      
      <div className={styles.rightSide}>
        <LikesNav /> 
        <div className={styles.votingContent}>
          <div className={styles.votingNav}>
            <button className={styles.arrowBackBtn} onClick={() => router.push('/')}>
              <Image src={arrowBack} alt='arrow back' width={20} height={20} className={styles.arrowBackImg}/>
            </button>
            <div className={styles.pageLabel}>
              <p className={styles.pageLabelText}>Voting</p>
            </div>
          </div>
          <div className={styles.votingImgBox}>
            {/* <Image /> */}
            <ul className={styles.votingIconsList}>
              <li className={`${styles.votingIconsEl} `}>
                <button className={`${styles.votingIconBtn} ${styles.greenIcon}`}>
                  <Image src={smile} alt="green smile" width={30} height={30}/>
                </button>
              </li>
               <li className={styles.votingIconsEl}>
                <button className={`${styles.votingIconBtn} ${styles.redIcon}`}>
                  <Image src={heart} alt="green smile" width={30} height={30}/>
                </button>
              </li>
              <li className={styles.votingIconsEl}>
                <button className={`${styles.votingIconBtn} ${styles.yellowIcon}`}>
                  <Image src={dislike} alt="green smile" width={30} height={30}/>
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.votingLogsBox}>
            Logs
            <ul>
              <li className={styles.votingLogEl}>
                <div style={{display: "flex", flexDirection: "row"}}>
                  <div className={styles.votingTime}>19:33</div>
                  <div>
                    Image ID: <span style={{ fontWeight: "bold", color: "#1D1D1D" }}>fQSunHvl8</span> was added to Favourites
                    </div>
                  </div>
                <div className={styles.votingLogIcon}>
                  <Image src={smile} alt="smile" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Voting
