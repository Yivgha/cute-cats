"use client";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  myStatus,
  selectRES,
  byLimit,
  getOneCat
} from "@/reducers/searchReducer";
import {
  fetchAllValues,
  fetchByLimit,
  fetchAscended,
  fetchDescended,
  fetchRandom
} from "@/api/catapi";

import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Dashboard from "../Dashboard/Dashboard";
import LikesNav from "../LikesNav/LikesNav";
import styles from "./Gallery.module.css";
import pageStyles from "../styles/navPages.module.css";
import breedStyles from "../Breed/Breed.module.css"

const defaultLimit = [
  { name: 5, id: "1", description: "Limit: 5" },
  { name: 10, id: "2", description: "Limit: 10" },
  { name: 15, id: "3", description: "Limit: 15" },
  { name: 20, id: "4", description: "Limit: 20" },
];

const Gallery = () => {
  const router = useRouter();


    const [option, setOption] = useState("All breeds");
  const [baseLimit, setBaseLimit] = useState(defaultLimit[1].name);

  const dispatch = useDispatch();

  const status = useSelector(myStatus);
  const res = useSelector(selectRES);
  const limit = useSelector(byLimit);


  useEffect(() => {
    // if (status === "idle") {
    //   dispatch(fetchAllValues());
    // }
    if (status === "loading") {
            Loading.hourglass("Loading...");
        }
        if (status === "succeeded") {
            Loading.remove()
        }
  }, [status]);

  const handleOrder = (e) => {
    if (e.target.value === "ASC") {
      dispatch(fetchAscended(limit));
      console.log("set asc");
    } else if (e.target.value === "DESC") {
      dispatch(fetchDescended(limit));
      console.log("set desc");
    } else if (e.target.value === "RAND") {
      dispatch(fetchRandom(limit));
      console.log("set random");
    }
  }

  return (
    <div className={pageStyles.wrapper}>
      <Dashboard />
      <div className={pageStyles.rightSide}>
        <LikesNav />
        <div className={pageStyles.pageContent}>
          <div className={`${pageStyles.pageNav} ${styles.navAlign}`}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                className={pageStyles.arrowBackBtn}
                onClick={() => router.back()}
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
                <p className={pageStyles.pageLabelText}>Gallery</p>
              </div>
            </div>
            <div>
              <button type="button" className={styles.uploadBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className={styles.uploadBtnSVG}
                >
                  <path
                    d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
                    fill="currentColor"
                  />
                </svg>
                <p className={styles.uploadBtnText}>Upload</p>
              </button>
            </div>
          </div>
          <div className={styles.gallerySelectionBox}>
            <label className={styles.selectLabel}>Order
              <select name="order" id="order" multiple={false} className={styles.dropdownBreed} onChange={(e)=>{handleOrder(e)}}>
                <option key={0} name="RAND" value="RAND">Random</option>
                <option  key={1} name="ASC" value="ASC" >Ascended</option>
              <option  key={2} name="DESC" value="DESC" >Descended</option>
            </select>
            </label>

             <label className={styles.selectLabel}>Type
              <select name="type" id="type" multiple={false} className={styles.dropdownBreed}>
                <option key={0} name="All" value="All">All</option>
                <option  key={1} name="Static" value="Static" >Static</option>
              <option  key={2} name="Animated" value="Animated">Animated</option>
            </select>
            </label>

            <label className={styles.selectLabel}>Breed
            <select
              name="breeds"
              id="breeds"
                multiple={false}
                defaultValue={{ name: "All breeds" }}
                onChange={(e) => {
                  setOption(e.target.value);
                }}
                className={styles.dropdownBreed}
              >
                <option key={0} id="all" name="All breeds" value="All breeds">
                  All breeds
                </option>
                {res?.map((opt) => (
                  <option key={opt.id} id={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </label>
             <label className={styles.selectLabel}>Limit
              <select
                name="limit"
                id="limit"
                defaultValue={baseLimit}
                multiple={false}
                onChange={(e) => {
                  setBaseLimit(e.target.value);
                  dispatch(fetchByLimit(e.target.value));
                }}
                className={styles.limitBreed}
              >
                {defaultLimit?.map((opt, i) => (
                  <option key={opt.id}>{opt.name}</option>
                ))}
              </select>
            </label>
            <button type="button" className={styles.updateBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className={styles.updateBtnSVG}>
  <path d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z" fill="currentColor"/>
</svg>
            </button>
          </div>


          {/* //Gallery */}


          <div className={styles.breedContent} >
              <h1>{option}</h1>

              <div className={styles.gridBreed}>
                {option !== "All breeds"
                  ? res?.map((item) => {
                      if (item.name === option) {
                        
                        return (
                          <div key={item.id} className={breedStyles.item} onClick={() => {
                              dispatch(getOneCat(item));
                      console.log("set item", item);
                      router.push("/breed/info")
                            }}>
                            <img
                              key={item.id}
                              src={item?.image?.url}
                              alt={item.name}
                              className={breedStyles.gridImg}
                            />
                           
                            <div className={breedStyles.imgOverlay}>
                              <div className={breedStyles.imgOverlayLabel}>
                                <p className={breedStyles.imgOverlayText}>
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  : res?.map((item) => (
                      <div key={item.id} className={breedStyles.item} onClick={() => {
                              dispatch(getOneCat(item));
                      console.log("set item", item);
                      router.push("/breed/info")
                            }}>
                       
                            <img
                              src={item?.image?.url}
                              alt={item.name}
                              className={breedStyles.gridImg}
                            />
                       
                            <div className={breedStyles.imgOverlay}>
                              <div className={breedStyles.imgOverlayLabel}>
                                <p className={breedStyles.imgOverlayText}>
                                  {item.name}
                                </p>
                              </div>
                            </div>
                      </div>
                    ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
