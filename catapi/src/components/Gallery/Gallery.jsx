"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from "./Gallery.module.css"
import pageStyles from "../styles/navPages.module.css"

const Gallery = () => {
  const router = useRouter()
  return (
    <div className={pageStyles.wrapper}>
       <Dashboard />
      <div className={pageStyles.rightSide}>
        <LikesNav /> 
         <div className={pageStyles.pageContent}>
            <div className={pageStyles.pageNav}>
            <button className={pageStyles.arrowBackBtn} onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={pageStyles.arrowBackImg}
              >
                <path
                  d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className={pageStyles.pageLabel}>
              <p className={pageStyles.pageLabelText}>Gallery</p>
            </div>
          </div>
          </div>
      </div>
    </div>
    
  )
}

export default Gallery
