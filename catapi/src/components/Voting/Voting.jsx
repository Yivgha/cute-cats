"use client"
import React, { useState, useEffect } from 'react'
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
  const router = useRouter();

  const [img, setImg] = useState('')

  const API_URL = `https://api.thecatapi.com/v1/`;
  const API_KEY = "live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT";

  // const fetchOneImg = async() => {
  //   const url = `${API_URL}images/0XYvRd7oD?api_key=${API_KEY}`
  //   await fetch(url, { headers: { 'x-api-key': API_KEY } }).then((res) => res.json()).then((data) => setImg(data))
  //   return img
  // }
  // useEffect(()=>{fetchOneImg()}, [])
  

  
  return (
    <div className={styles.wrapper}>
        <Dashboard />
      
      <div className={styles.rightSide}>
        <LikesNav /> 
        <div className={styles.pageContent}>
          <div className={styles.pageNav}>
            <button className={styles.arrowBackBtn} onClick={() => {router.push('/')}}>
              <Image src={arrowBack} alt='arrow back' width={20} height={20} className={styles.arrowBackImg}/>
            </button>
            <div className={styles.pageLabel}>
              <p className={styles.pageLabelText}>Voting</p>
            </div>
          </div>
          <div className={styles.votingImgBox}>


            {/* <Image src={img.url} alt={img.id} width={640} height={360} style={{objectFit: "contain", borderRadius: "20px"}} /> */}

            <ul id="vote-options" className={styles.votingIconsList}>
              <li className={`${styles.votingIconsEl} `}  key={1}> 
                <button className={`${styles.votingIconBtn} ${styles.greenIcon}`} onClick={()=> {}}>
                  <Image src={smile} alt="green smile" width={30} height={30}/>
                </button>
              </li>
               <li className={styles.votingIconsEl} key={2}>
                <button className={`${styles.votingIconBtn} ${styles.redIcon}`} onClick={()=>{}}>
                  <Image src={heart} alt="green smile" width={30} height={30}/>
                </button>
              </li>
              <li className={styles.votingIconsEl} key={3}>
                <button className={`${styles.votingIconBtn} ${styles.yellowIcon}`} onClick={()=>{}}>
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
