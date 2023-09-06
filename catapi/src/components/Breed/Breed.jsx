"use client"
import React, {use, useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { myStatus, selectRES, byLimit, selectOrder } from '@/reducers/searchReducer';
import { fetchAllValues, fetchByLimit, fetchAscended, fetchDescended } from '@/api/catapi';
import Store from '@/reducers/store';

import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from './Breed.module.css'
import pageStyles from "../styles/navPages.module.css"



const defaultLimit = [
  { name: 5, id: "1", description: "Limit: 5" },
  { name: 10, id: "2", description: "Limit: 10" },
  { name: 15, id: "3", description: "Limit: 15" },
  { name: 20, id: "4",  description: "Limit: 20" }
];
  
const Breed = () => {
  const router = useRouter();
// const API_URL = 'https://api.thecatapi.com/v1/breeds';
// const API_KEY = "live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT"

  // const [values, setValues] = useState([]);
  const [option, setOption] = useState("All breeds");

  
  const dispatch = useDispatch()
  const state = Store.getState()

  const status = useSelector(myStatus)
  const res = useSelector(selectRES)
const limit = useSelector(byLimit)
const order = useSelector(selectOrder)



  useEffect(() => {
   if (status === "idle") {
      dispatch(fetchAllValues());
    }
  }, [status, dispatch]);


  
  // const fetchBreedById = async () => {
  //   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT`
    
  //   await fetch(url, { headers: { 'x-api-key': API_KEY } }).then(res => res.json()).then((data) => {
  //    console.log(data);
  //       setImages(data)
  //   });
  // }
  // useEffect(() => { fetchBreedById() }, []);

  
  useEffect(() => { console.log("limit store", state, "limit", limit, "order", order); }, [order, limit, state]);



  return (
    <div className={pageStyles.wrapper}>
        <Dashboard />
      <div className={pageStyles.rightSide}>
        <LikesNav /> 
        <>
          
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
              <p className={pageStyles.pageLabelText}>Breeds</p>
            </div>
        
            <select name="breeds" multiple={false} defaultValue={"All breeds"}
                onChange={(e) => { setOption(e.target.value)}} className={styles.dropdownBreed}>
                <option key={0} id="all" name="All breeds" value="All breeds">All breeds</option>
                {res?.map((opt) => <option key={opt.id} id={opt.id}>{opt.name}</option>)}
              </select>
              

           {/* change value for description instead of name */}
              <select name="limit"
                id="limit"
                defaultValue={defaultLimit[1].name}
                multiple={false}
                onChange={(e) => {
                  setOption(e.target.value); dispatch(fetchByLimit(e.target.value));
                    
                }} className={styles.limitBreed}>
              {defaultLimit?.map((opt, i) => <option key={opt.id}>{opt.name}</option>)}
            </select>
            
              <button className={styles.asc} type="button" name="ASC" id="ASC" onClick={() => {dispatch(fetchAscended(limit))}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path  d="M15 9.21284C15.2603 8.92905 15.6825 8.92905 15.9428 9.21284L19.9428 13.5728L19 14.6005L16.1381 11.481V30.8H14.8047V11.481L11.9428 14.6005L11 13.5728L15 9.21284ZM26.1381 10.4533C25.0335 10.4533 24.1381 11.4294 24.1381 12.6333V14.8133H28.1381V12.6333C28.1381 11.4294 27.2426 10.4533 26.1381 10.4533ZM28.1381 16.2667V19.1733H29.4714V12.6333C29.4714 10.6267 27.979 9 26.1381 9C24.2971 9 22.8047 10.6267 22.8047 12.6333V19.1733H24.1381V16.2667H28.1381ZM22.8047 20.6267H26.8047C28.2775 20.6267 29.4714 21.928 29.4714 23.5333C29.4714 24.4015 29.1222 25.1807 28.5686 25.7133C29.1222 26.2459 29.4714 27.0252 29.4714 27.8933C29.4714 29.4986 28.2775 30.8 26.8047 30.8H22.8047V20.6267ZM26.8047 24.9867C27.5411 24.9867 28.1381 24.336 28.1381 23.5333C28.1381 22.7307 27.5411 22.08 26.8047 22.08H24.1381V24.9867H26.8047ZM24.1381 26.44H26.8047C27.5411 26.44 28.1381 27.0907 28.1381 27.8933C28.1381 28.696 27.5411 29.3467 26.8047 29.3467H24.1381V26.44Z" fill="currentColor"/>
</svg>
            </button>
            <button className={styles.desc} onClick={()=> {dispatch(fetchDescended(limit));
    }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M14.8047 29.319V10H16.1381V29.319L19 26.1995L19.9428 27.2272L15.9428 31.5872C15.8178 31.7234 15.6482 31.8 15.4714 31.8C15.2946 31.8 15.125 31.7234 15 31.5872L11 27.2272L11.9428 26.1995L14.8047 29.319ZM26.1381 11.4533C25.0335 11.4533 24.1381 12.4294 24.1381 13.6333V15.8133H28.1381V13.6333C28.1381 12.4294 27.2426 11.4533 26.1381 11.4533ZM28.1381 17.2667V20.1733H29.4714V13.6333C29.4714 11.6267 27.979 10 26.1381 10C24.2971 10 22.8047 11.6267 22.8047 13.6333V20.1733H24.1381V17.2667H28.1381ZM22.8047 21.6267H26.8047C28.2775 21.6267 29.4714 22.928 29.4714 24.5333C29.4714 25.4015 29.1222 26.1807 28.5686 26.7133C29.1222 27.2459 29.4714 28.0252 29.4714 28.8933C29.4714 30.4986 28.2775 31.8 26.8047 31.8H22.8047V21.6267ZM26.8047 25.9867C27.5411 25.9867 28.1381 25.336 28.1381 24.5333C28.1381 23.7307 27.5411 23.08 26.8047 23.08H24.1381V25.9867H26.8047ZM24.1381 27.44H26.8047C27.5411 27.44 28.1381 28.0907 28.1381 28.8933C28.1381 29.696 27.5411 30.3467 26.8047 30.3467H24.1381V27.44Z" fill="currentColor"/>
</svg>
            </button>
            </div>
    <div className={styles.breedContent}>       
              <h1>{option}</h1>
              
              <div className={styles.gridBreed}>
                
                {option !== "All breeds" ? (res?.map((item) => {
                if (item.name === option) {
                  // console.log(item);
                  return (<div key={item.id} className={styles.item}>
                <img key={item.id} src={item.image.url} alt={item.name}
                className={styles.gridImg}
                  />
                  {/* {item.name} */}
                  <div className={styles.imgOverlay}>
                    <div className={styles.imgOverlayLabel}>
                      <p className={styles.imgOverlayText}>{item.name}</p>
                    </div>
                  </div>
             </div>)
                  }
                })) : (res?.map((item) => (
                <div key={item.id} className={styles.item}>
                <img key={item.id} src={item.image.url} alt={item.name}
                className={styles.gridImg}
                  />
                  {/* {item.name} */}
                  <div className={styles.imgOverlay}>
                    <div className={styles.imgOverlayLabel}>
                      <p className={styles.imgOverlayText}>{item.name}</p>
                    </div>
                  </div>
             </div>
              )))}
              
              
              </div>
              </div> 
           </div>
            
          
        </>
      </div>
    </div>
    
  )
}

export default Breed
