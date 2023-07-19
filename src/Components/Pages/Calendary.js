import React, { useEffect, useState } from "react";
import styles from './Calendary.module.css';


const Calendary = () => {

  const [workout,setWorkout] = useState([])
  const [workouts,setWorkouts] = useState([]);
  const [seeMore,setSeeMore] = useState(false);
  const chestWorkout = workouts.filter((item)=> item.workout.includes('peito'));
  const bicepsWorkout = workouts.filter((item)=> item.workout.includes('biceps'));
  const tricepsWorkout = workouts.filter((item)=> item.workout.includes('triceps'));
  const backWorkout = workouts.filter((item)=> item.workout.includes('costa'));
  const cardioWorkout = workouts.filter((item)=> item.workout.includes('cardio'));
  const legsWorkout = workouts.filter((item)=> item.workout.includes('perna'));
  const ombroWorkout = workouts.filter((item)=> item.workout.includes('ombro'));


  const handleSubmit = (e) =>{
  e.preventDefault()
   const date = new Date()
   const day = date.getDate();
   const Hour = date.getHours();
   const Month = date.getMonth();
   const training = {
      date:
      day,
      Hour,
      Month
      ,
      workout
    }
   setWorkouts([...workouts, training])
  }
  useEffect(()=>{
    const getWorkout = JSON.parse(localStorage.getItem('workout'));
    if(getWorkout)setWorkouts(getWorkout)

  },[])
  useEffect(()=>{
    if(workouts.length > 0) localStorage.setItem('workout',JSON.stringify(workouts))
  },[workouts])

  return (  
    <section className={styles.calendarySection}>
      <form onSubmit={handleSubmit}> 
        <h3>Register your train </h3>
        <select defaultValue={0} onChange={(e)=>{
          if(e.target.value !== '')setWorkout([...workout, e.target.value])
        }}>
          <option value={0}>Default</option>
          <option value='peito'>Peito</option>
          <option value='triceps'>Triceps</option>
          <option value='costa'>Costa</option>
          <option value='ombro'>Ombro</option>
          <option value='biceps'>Biceps</option>
          <option value='perna'>Perna</option>
          <option value='cardio'>Cardio</option>
        </select>
        <select defaultValue={0} onChange={(e)=>{
          if(e.target.value !== '')setWorkout([...workout, e.target.value])
        }}>
          <option value={0}>Default</option>
          <option value='peito'>Peito</option>
          <option value='triceps'>Triceps</option>
          <option value='costa'>Costa</option>
          <option value='ombro'>Ombro</option>
          <option value='biceps'>Biceps</option>
          <option value='perna'>Perna</option>
          <option value='cardio'>Cardio</option>
        </select>
        <select defaultValue={0} onChange={(e)=>{
          if(e.target.value !== '')setWorkout([...workout, e.target.value])
        }}>
          <option value={0}>Default</option>
          <option value='peito'>Peito</option>
          <option value='triceps'>Triceps</option>
          <option value='costa'>Costa</option>
          <option value='ombro'>Ombro</option>
          <option value='biceps'>Biceps</option>
          <option value='perna'>Perna</option>
          <option value='cardio'>Cardio</option>
        </select>
        <select defaultValue={0}onChange={(e)=>{
          if(e.target.value !== '')setWorkout([...workout, e.target.value])
        }}>
          <option value={0}>Default</option>
          <option value='peito'>Peito</option>
          <option value='triceps'>Triceps</option>
          <option value='costa'>Costa</option>
          <option value='ombro'>Ombro</option>
          <option value='biceps'>Biceps</option>
          <option value='perna'>Perna</option>
          <option value='cardio'>Cardio</option>
        </select>
        <button>Submit</button>
      </form>
      <div className={styles.calendaryInfo}>
        <div className={styles.infoCards}>
          {workouts && workouts.map((i,index)=>(
            <div className={styles.calendaryCard} key={index}>
                <p className={styles.cardDate}><span>Day</span> {i.date}</p>
                <p className={styles.cardMonth}><span>Month: </span>{`${i.Month+1}`}</p>
                <p>{i.Hour} H</p>
                <div className={styles.cardWorkout} style={{display:'flex', gap:'3px'}}>
                {i.workout.map((i,index)=>(
                  <p key={index}>{i}</p>
                  ))}
                </div>
            </div>
          ))} 
        </div>
        <div className={styles.calendaryStatistic}>
                  <p>Number of Training: {workouts.length}</p>
                  {!seeMore ? <p style={{cursor:'pointer',color:'blue'}} onClick={()=>setSeeMore(true)}>Show more...</p> : ''}
                  {seeMore ? 
                  <div> 
                  <p>Number of Chest Training: {chestWorkout.length}</p>
                  <p>Number of biceps Training: {bicepsWorkout.length}</p>
                  <p>Number of triceps Training: {tricepsWorkout.length}</p>
                  <p>Number of back Training: {backWorkout.length}</p>
                  <p>Number of cardio Training: {cardioWorkout.length}</p>
                  <p>Number of legs Training: {legsWorkout.length}</p>
                  <p>Number of ombro Training: {ombroWorkout.length}</p> 
                  </div>
                  :  ''}
                  {seeMore ? <p style={{cursor:'pointer',color:'blue'}} onClick={()=>setSeeMore(false)}>Show Less...</p> : ''}
        </div>
      </div>
    </section>
  )
};

export default Calendary;
