"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Gallery } from "react-grid-gallery";
import Dashboard from '../Dashboard/Dashboard'
import LikesNav from '../LikesNav/LikesNav'
import styles from './Breed.module.css'
import arrowBack from "../../assets/images/nav/arrow-back.svg"

const defaultLimit = [
  { name: 5, id: "1", description: "Limit: 5" },
  { name: 10, id: "2", description: "Limit: 10" },
  { name: 15, id: "3", description: "Limit: 15" },
  { name: 20, id: "4",  description: "Limit: 20" }
];
  
const Breed = () => {
  const router = useRouter();
const API_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = "live_rqbkVVw0UwNco4qdCMCbVM7KJ9hj0b95WQUfWe023g97Hv7dYQC6zvKR4HChhnyT"
  const [images, setImages] = useState([]);
  const [values, setValues] = useState([]);
  const [option, setOption] = useState("All breeds");
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("asc");
  const [id, setId] = useState("")



  const fetchAll = async () => {
   const url = `${API_URL}?limit=${limit}&order=${order}&api_key=${API_KEY}`
    await fetch(url, { headers: { 'x-api-key': API_KEY } }).then((res) => res.json()).then((data) => { setValues(data)});
    console.log("got all");
}

  useEffect(() => {
    fetchAll()
  }, []);

 const gallery = values?.map((item) => (
                <div key={item.id} className={styles.item}>
                <Image src={item.image.url} alt={item.name} width={200} height={140} 
                className={styles.gridImg}
                  />
              </div>
            ))


  const fetchBreedByLimit = async () => {
    const url = `${API_URL}?limit=${limit}&order=${order}&api_key=${API_KEY}`
    await fetch(url, { headers: { 'x-api-key': API_KEY } }).then((res) => res.json()).then((data) => { setValues(data);});
  }
  
  useEffect(() => { fetchBreedByLimit() }, [limit]);

  // const fetchBreedByName = async () => {
  //   // const url = `${API_URL}/${values}?limit=${limit}&order=${order}&api_key=${API_KEY}`
  //   const url = `https://api.thecatapi.com/v1/breeds/${id}?limit=${limit}&order=${order}&api_key=${API_KEY}`
  //   await fetch(url, { headers: { 'x-api-key': API_KEY } }).then((res) => res.json()).then((data) => { setValues(data) });
  // }
   
  //   useEffect(() => { fetchBreedByName() }, [id]);
  

  const fetchAsc = async () => {
    const url = `${API_URL}?limit=${limit}&order=asc&api_key=${API_KEY}`
    await fetch(url, { headers: { 'x-api-key': API_KEY } }).then((res) => res.json()).then((data) => {setValues(data); setOrder("asc")});
    console.log("ascended");
  }

  const fetchDesc = async () => {
    const url = `${API_URL}?limit=${limit}&order=desc&api_key=${API_KEY}`
    await fetch(url, { headers: { 'x-api-key': API_KEY } }).then((res) => res.json()).then((data) => {setValues(data); setOrder("desc")});
    console.log("descended");
  }

  return (
    <div className={styles.wrapper}>
        <Dashboard />
      <div className={styles.rightSide}>
        <LikesNav /> 
        <>
          <div className={styles.pageNav}>
            <button className={styles.arrowBackBtn} onClick={() => router.push('/')}>
              <Image src={arrowBack} alt='arrow back' width={20} height={20} className={styles.arrowBackImg}/>
            </button>
            <div className={styles.pageLabel}>
              <p className={styles.pageLabelText}>Breeds</p>
            </div>
        
            <select name="breeds" value={option} multiple={false}
              onChange={(e) => { setOption(e.target.value)}} className={styles.dropdownBreed}>
                <option key={0} id="0" name="all">All breeds</option>
              {values?.map((opt, i) => <option key={i} id={i} onClick={e => { setId(e.opt.id)}}>{opt.name}</option>)}
              </select>
              
           
            <select name="limit" id="limit" value={limit} onChange={(e) => { setLimit(e.target.value)}} className={styles.limitBreed}>
              {defaultLimit?.map((opt, i) => <option key={opt.id}>{opt.name}</option>)}
            </select>
            
            <button className={styles.asc} onClick={fetchAsc}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="10" fill="#F8F8F7"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15 9.21284C15.2603 8.92905 15.6825 8.92905 15.9428 9.21284L19.9428 13.5728L19 14.6005L16.1381 11.481V30.8H14.8047V11.481L11.9428 14.6005L11 13.5728L15 9.21284ZM26.1381 10.4533C25.0335 10.4533 24.1381 11.4294 24.1381 12.6333V14.8133H28.1381V12.6333C28.1381 11.4294 27.2426 10.4533 26.1381 10.4533ZM28.1381 16.2667V19.1733H29.4714V12.6333C29.4714 10.6267 27.979 9 26.1381 9C24.2971 9 22.8047 10.6267 22.8047 12.6333V19.1733H24.1381V16.2667H28.1381ZM22.8047 20.6267H26.8047C28.2775 20.6267 29.4714 21.928 29.4714 23.5333C29.4714 24.4015 29.1222 25.1807 28.5686 25.7133C29.1222 26.2459 29.4714 27.0252 29.4714 27.8933C29.4714 29.4986 28.2775 30.8 26.8047 30.8H22.8047V20.6267ZM26.8047 24.9867C27.5411 24.9867 28.1381 24.336 28.1381 23.5333C28.1381 22.7307 27.5411 22.08 26.8047 22.08H24.1381V24.9867H26.8047ZM24.1381 26.44H26.8047C27.5411 26.44 28.1381 27.0907 28.1381 27.8933C28.1381 28.696 27.5411 29.3467 26.8047 29.3467H24.1381V26.44Z" fill="#8C8C8C"/>
</svg>
            </button>
            <button className={styles.desc} onClick={fetchDesc}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="10" fill="#F8F8F7"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.8047 29.319V10H16.1381V29.319L19 26.1995L19.9428 27.2272L15.9428 31.5872C15.8178 31.7234 15.6482 31.8 15.4714 31.8C15.2946 31.8 15.125 31.7234 15 31.5872L11 27.2272L11.9428 26.1995L14.8047 29.319ZM26.1381 11.4533C25.0335 11.4533 24.1381 12.4294 24.1381 13.6333V15.8133H28.1381V13.6333C28.1381 12.4294 27.2426 11.4533 26.1381 11.4533ZM28.1381 17.2667V20.1733H29.4714V13.6333C29.4714 11.6267 27.979 10 26.1381 10C24.2971 10 22.8047 11.6267 22.8047 13.6333V20.1733H24.1381V17.2667H28.1381ZM22.8047 21.6267H26.8047C28.2775 21.6267 29.4714 22.928 29.4714 24.5333C29.4714 25.4015 29.1222 26.1807 28.5686 26.7133C29.1222 27.2459 29.4714 28.0252 29.4714 28.8933C29.4714 30.4986 28.2775 31.8 26.8047 31.8H22.8047V21.6267ZM26.8047 25.9867C27.5411 25.9867 28.1381 25.336 28.1381 24.5333C28.1381 23.7307 27.5411 23.08 26.8047 23.08H24.1381V25.9867H26.8047ZM24.1381 27.44H26.8047C27.5411 27.44 28.1381 28.0907 28.1381 28.8933C28.1381 29.696 27.5411 30.3467 26.8047 30.3467H24.1381V27.44Z" fill="#8C8C8C"/>
</svg>
            </button>
          </div>
          <div className={styles.breedContent}>
            Breeds gallery
            <h1>{option}</h1>
            <h2>{limit} </h2>
           <div className={styles.gridBreed}>
              {values?.map((item) => (
                <div key={item.id} className={styles.item}>
                <img key={item.id} src={item.image.url} alt={item.name}
                className={styles.gridImg}
                  />
             </div>
            ))}
              </div>
           
            </div>
          
        </>
      </div>
    </div>
    
  )
}

export default Breed
