import React, { useEffect, useState } from "react";
import UseFetch from "../Hooks/UseFetch";
import { PHOTOS_GET } from "../../Api";
import { useContext } from "react";
import UserContext from "../../UserContext";
import styles  from './Galery.module.css'
const Galery = () => {

  const {loading,request,error} = UseFetch()
  const {data} = useContext(UserContext)
  const [photos,setPhotos] = useState([]);

useEffect(()=>{
  
  const getPhotos = async() =>{
    const {url,options} = PHOTOS_GET({user: data.id, total:-1 ,page: 1})
    const {json, response} = await request(url,options)
   setPhotos(json)
  }
  getPhotos();
},[])

 


  return <section className={`${styles.Galery} animeRigth`}>
    {photos && photos.map((photo)=>(
      <div className={styles.cardPhoto} key={photo.id}>
        <img src={photo.src} alt={photo.title}/>
      </div>
    ))}
  </section>
};

export default Galery;
