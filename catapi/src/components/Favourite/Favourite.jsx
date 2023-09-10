"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllFavs, fetchDeleteFav } from "@/api/catapi";
import { myStatus, favouritesLogs} from "@/reducers/searchReducer";

import { Loading } from "notiflix/build/notiflix-loading-aio";

import Dashboard from "../Dashboard/Dashboard";
import LikesNav from "../LikesNav/LikesNav";
import styles from "../styles/globalLikes.module.css";
import breedStyle from "../Breed/Breed.module.css";
import pageStyles from "./Favourite.module.css"

const Favourite = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const status = useSelector(myStatus);
  const favLogs = useSelector(favouritesLogs);

 let heart = "Full"

  console.log("logs in favs", favLogs );

  useEffect(() => {
    if (status === "loading") {
      Loading.hourglass("Loading...");
    }
    if (status === "succeeded") {
      Loading.remove();
    }
  }, []);

  useEffect(() => {
    dispatch(fetchAllFavs({ limit: 10 }));    
  }, []);
  

  return (
    <div className={styles.wrapper}>
       <Dashboard />
      <div className={styles.rightSide}>
        <LikesNav /> 
        <div className={styles.likesContent}>
          <div className={styles.pageNav}>
             <button className={styles.arrowBackBtn} onClick={() => router.back()}>
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
            <div className={styles.pageLabel}>
              <p className={styles.pageLabelText}>Favourites</p>
            </div>
          </div>


         <div className={breedStyle.breedContent}>

            {favLogs.length > 0 && (
              <div className={breedStyle.gridBreed} >
                {favLogs?.map((i, idx) => (
                  <div key={idx} className={breedStyle.item}>
                    <img
                      key={i.id}
                      src={i?.image?.url}
                      alt={i.name}
                      className={breedStyle.gridImg}
                    />

                    <div className={breedStyle.imgOverlayBox} >
                      <button className={pageStyles.imgOverlayBtn} onClick={(e) => {
                        e.preventDefault();
                        heart = "Unfav";
                        dispatch(fetchDeleteFav({ id: i.id }));
                        
                        dispatch(fetchAllFavs({ limit: 10 }));   
                      }}>
                        {heart === "Full" ?  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={pageStyles.imgOverlayBtnText}>
<path d="M15.3807 11C12.409 11 10 13.409 10 16.3807C10 17.8078 10.5669 19.1764 11.576 20.1854L19.5286 28.1381C19.7889 28.3984 20.2111 28.3984 20.4714 28.1381L28.424 20.1854C29.4331 19.1764 30 17.8078 30 16.3807C30 13.409 27.591 11 24.6193 11C23.1922 11 21.8236 11.5669 20.8146 12.576L20 13.3905L19.1854 12.576C18.1764 11.5669 16.8078 11 15.3807 11Z" fill="#FF868E"/>
                        </svg>
                          : <svg xmlns="http://www.w3.org/2000/svg"width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={pageStyles.imgOverlayBtnText}>
<path d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="currentColor"/>
</svg>}
                       
                    </button>
                  </div>
                  </div>
                ))}
              </div>
            )}
            {favLogs.length === 0 && <div className={styles.notFoundBox}>
              <p className={styles.notFoundText}>No items found</p>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourite