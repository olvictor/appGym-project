import React, { useEffect, useState, useRef } from "react";
import UseFetch from "../Hooks/UseFetch";
import { PHOTOS_GET } from "../../Api";
import { useContext } from "react";
import UserContext from "../../UserContext";
import { Galleria } from 'primereact/galleria';
import styles  from './Galery.module.css'
import { Image } from 'primereact/image';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

const Galery = () => {
  const {loading,request,error} = UseFetch()
  const {data} = useContext(UserContext)
  const [photos,setPhotos] = useState([]);
  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);    
  const galleria = useRef(null);


const itemTemplate = (item) => {
    return <img src={item.src} alt={item.title} style={{ width: '100%', display: 'block' }} />;
}

const thumbnailTemplate = (item) => {
  console.log(item)
    return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
}

useEffect(()=>{
  
  const getPhotos = async() =>{
    const {url,options} = PHOTOS_GET({user: data.id, total:-1 ,page: 1})
    const {json, response} = await request(url,options)
   setPhotos(json)
   setImages(json)
  }
  getPhotos();
},[])

 


  return <section className={`${styles.Galery} animeRigth`}>
  
    <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={photos} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div style={{ maxWidth: '100%', maxHeight:'auto', display:'flex', gap:'10px',marginTop:'50px',flexWrap:'wrap' }}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.src}  alt={image.title} style={{ cursor: 'pointer' , width:'250px' , height:'300px',borderRadius:'10px'}} onClick={
                            () => {setActiveIndex(index); galleria.current.show()}
                        } />
                        return (
                            <div className={styles.Galery} style={{position:'relative'}} key={index}>
                                {imgEl}
                                <div className="teste">
                                  <i style={ { position:'absolute',left:'0' ,backgroundColor:'red'}}  className="pi pi-check"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


  </section>
};

export default Galery;
