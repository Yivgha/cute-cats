"use client";
import React, {useEffect} from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { byInput, inpVal, oneCatData, myStatus } from "@/reducers/searchReducer";
import Dashboard from "../Dashboard/Dashboard";
import LikesNav from "../LikesNav/LikesNav";
import styles from "../styles/globalLikes.module.css";
import infoStyles from "./BreedInfo.module.css";
// import { Carousel } from "react-responsive-carousel";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const BreedInfo = () => {
  const router = useRouter();
  const pathname = usePathname();
  const inp = useSelector(byInput);
  const searchedItem = useSelector(inpVal);
    const oneCat = useSelector(oneCatData);
    const status = useSelector(myStatus)
 
    
    useEffect(() => {
        if (status === "loading") {
            Loading.hourglass("Loading...");
        }
        if (status === "succeeded") {
            Loading.remove()
        }
    }, [status, oneCat])

  console.log(oneCat);
  return (
    <div className={styles.wrapper}>
      <Dashboard />
      <div className={styles.rightSide}>
        <LikesNav />
        <div className={styles.likesContent}>
          <div className={styles.pageNav}>
            <button
              className={styles.arrowBackBtn}
              onClick={() => router.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={styles.arrowBackImg}
              >
                <path
                  d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className={infoStyles.nonActive}>
              <p className={infoStyles.nonActiveText}>Breeds</p>
            </div>
            <div className={styles.pageLabel}>
              {" "}
              <p className={styles.pageLabelText}>{oneCat.id}</p>
            </div>
          </div>
                  <div className={infoStyles.imageBox}>
                      <img src={oneCat?.image?.url} alt={oneCat.name} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "20px"}} />
          </div>
          <div className={infoStyles.infoBox}>
            <div className={infoStyles.infoTitleBox}>
              <p className={infoStyles.infoBoxTitle}>{oneCat.name}</p>
            </div>
            <div className={infoStyles.infoBoxDescription}>
              <span className={infoStyles.infoBoxDescSpan}>
                {oneCat.description}
                          </span>
                          <div className={infoStyles.overlayDesc}>
                  {oneCat.description}
                </div>
            </div>
            <div className={infoStyles.detailedInfo}>
              <div className={infoStyles.leftSideBox}>
                <p className={infoStyles.detailTitle}>Temperament:</p>
                <span
                  className={`${infoStyles.detailDescr} ${infoStyles.tempWrap}`}
                >
                  {oneCat.temperament}
                </span>
              </div>
              <div className={infoStyles.rightSideBox}>
                <p className={infoStyles.detailDescr}>
                  <span className={infoStyles.detailTitle}>Origin:</span>
                  {oneCat.origin}
                </p>
                <p className={infoStyles.detailDescr}>
                                  <span className={infoStyles.detailTitle}>Weight:</span>
                                  {oneCat?.weight?.metric}
                </p>
                <p className={infoStyles.detailDescr}>
                  <span className={infoStyles.detailTitle}>Life span</span>
                  {oneCat.life_span}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedInfo;
