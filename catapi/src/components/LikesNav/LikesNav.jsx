"use client"
import React from 'react'
import Image from 'next/image'
import CustomLink from '../CustomLink/Custom'
import styles from "./LikesNav.module.css"
import searchImg from "../../assets/images/nav/search.svg"
import likes from "../../assets/images/nav/like.svg"
import heart from "../../assets/images/nav/heart.svg"
import dislikes from "../../assets/images/nav/dislike.svg"


const LikesNav = () => {
  return (
    <div className={styles.votingNav}>
          <div className={styles.votingInput}>
            <input className={styles.votingInputText} placeholder='Search for breeds by name' />
            <button className={styles.votingInputIcon}>
          <Image src={searchImg} alt='search icon' width="20" height="20" className={styles.searchIcon} />

            </button>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navEl}>
              <CustomLink href="/likes" as="style" rel="stylesheet preload prefetch">
                <Image src={likes} alt='smiling face' width="30" height="30" className={styles.navElIcon} />
              </CustomLink>
            </li>
            <li className={styles.navEl}>
              <CustomLink href="/favourite" as="style" rel="stylesheet preload prefetch">
                <Image src={heart} alt='white heart with red border' width="30" height="30" className={styles.navElIcon} />
              </CustomLink>
          </li>
            <li className={styles.navEl}>
              <CustomLink href="/dislikes" as="style" rel="stylesheet preload prefetch">
                <Image src={dislikes} alt='grumpy face' width="30" height="30" className={styles.navElIcon} />
              </CustomLink>
            </li>
          </ul>
        </div>
  )
}

export default LikesNav