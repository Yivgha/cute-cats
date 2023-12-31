"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchImgToVote, fetchAddVote, fetchAllVotes, fetchAddToFav, fetchAllFavs } from "../../api/catapi";
import { myStatus, imgForVote, votingLogs, favouritesLogs } from "../../reducers/searchReducer";

import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Dashboard from "../Dashboard/Dashboard";
import LikesNav from "../LikesNav/LikesNav";
import LogElement from "../LogElement/LogElement";
import pageStyles from "../styles/navPages.module.css"
import styles from "./Voting.module.css";
import globStyles from "../styles/globalLikes.module.css"


const Voting = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const status = useSelector(myStatus);
  const oneImg = useSelector(imgForVote);

  const newLogs = useSelector(votingLogs);
  const allFavs = useSelector(favouritesLogs);

  const mixedArr = newLogs.concat(allFavs)


  useEffect(() => {
     if (status === "loading") {
            Loading.hourglass("Loading...");
        }
        if (status === "succeeded") {
            Loading.remove()
    }    
  }, []);

  useEffect(() => {
    dispatch(fetchImgToVote())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(fetchAllVotes({limit: 3}));
    dispatch(fetchAllFavs({limit: 3}))
}, [oneImg, dispatch])



  return (
    <div className={pageStyles.wrapper}>
      <Dashboard />

      <div className={pageStyles.rightSide}>
        <LikesNav />
        <div className={pageStyles.pageContent}>
          <div className={pageStyles.pageNav}>
            <button
              className={pageStyles.arrowBackBtn}
              onClick={() => {
                router.back();
              }}
            >
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
              <p className={pageStyles.pageLabelText}>Voting</p>
            </div>
          </div>
          <div className={styles.votingImgBox}>
            <img
              id="image-to-vote-on"
              src={oneImg?.url}
              alt={oneImg?.id}
              width={640}
              height={360}
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
            <ul id="vote-options" className={styles.votingIconsList}>
              <li className={`${styles.votingIconsEl} `} key={1}>
                <button
                  className={`${styles.votingIconBtn} ${styles.greenIcon}`}
                  onClick={() => {
                    dispatch(fetchAddVote({ image_id: oneImg?.id, value: 1 }));
                    dispatch(fetchImgToVote());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
              <li className={styles.votingIconsEl} key={2}>
                <button
                  className={`${styles.votingIconBtn} ${styles.redIcon}`}
                  onClick={() => {
                    dispatch(fetchAddToFav({ image_id: oneImg?.id }));
                    dispatch(fetchImgToVote());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M8.07107 4C4.71811 4 2 6.71811 2 10.0711C2 11.6812 2.63963 13.2254 3.77817 14.364L15 25.5858L26.2218 14.364C27.3604 13.2254 28 11.6812 28 10.0711C28 6.71811 25.2819 4 21.9289 4C20.3188 4 18.7746 4.63963 17.636 5.77817L15.7071 7.70711C15.3166 8.09763 14.6834 8.09763 14.2929 7.70711L12.364 5.77818C11.2254 4.63963 9.68121 4 8.07107 4ZM0 10.0711C0 5.61354 3.61354 2 8.07107 2C10.2116 2 12.2646 2.85034 13.7782 4.36396L15 5.58579L16.2218 4.36396C17.7354 2.85034 19.7884 2 21.9289 2C26.3865 2 30 5.61354 30 10.0711C30 12.2116 29.1497 14.2646 27.636 15.7782L15.7071 27.7071C15.3166 28.0976 14.6834 28.0976 14.2929 27.7071L2.36396 15.7782C0.850339 14.2646 0 12.2116 0 10.0711Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
              <li className={styles.votingIconsEl} key={3}>
                <button
                  className={`${styles.votingIconBtn} ${styles.yellowIcon}`}
                  onClick={() => {
                    dispatch(fetchAddVote({ image_id: oneImg?.id, value: -1 }));
                    dispatch(fetchImgToVote());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.votingLogsBox}>

            
            {mixedArr?.length != 0 ? (
              <>
                {mixedArr.sort((a,b) => b.created_at > a.created_at ? 1 : -1).map((logEl) => (
                  <LogElement key={logEl.id} log={logEl} />
                ))}

              </>
            ) : (<div className={globStyles.notFoundBox}>
              <p className={globStyles.notFoundText}>No votes found</p>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;