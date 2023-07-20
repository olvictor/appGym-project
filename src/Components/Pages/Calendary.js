import React, { useEffect, useState } from "react";
import styles from './Calendary.module.css';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import { IoIosFitness } from "react-icons/io";

const Calendary = () => {

  const [selectedTreinos, setSelectedTreinos] = useState(null);

  

  const treinos =[
    {nome: 'Peito'},
    {nome: 'Triceps'},
    {nome: 'Perna'},
    {nome: 'Costa'},
    {nome: 'Ombro'},
    {nome: 'Biceps'},
    {nome: 'Abdomen'},
  ]
  const [workout,setWorkout] = useState([])
  const [workouts,setWorkouts] = useState([]);
  // const [seeMore,setSeeMore] = useState(false);
  // const chestWorkout = workouts.filter((item)=> item.workout.includes('Peito'));
  // const bicepsWorkout = workouts.filter((item)=> item.workout.includes('Biceps'));
  // const tricepsWorkout = workouts.filter((item)=> item.workout.includes('Triceps'));
  // const backWorkout = workouts.filter((item)=> item.workout.includes('Costa'));
  // const cardioWorkout = workouts.filter((item)=> item.workout.includes('Cardio'));
  // const legsWorkout = workouts.filter((item)=> item.workout.includes('Perna'));
  // const ombroWorkout = workouts.filter((item)=> item.workout.includes('Ombro'));
  // const abdmoenWorkout = workouts.filter((item)=> item.workout.includes('Abdomen'));



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
      Month,
      selectedTreinos
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
    <section>
      <div className="card flex justify-content-center">
          <form onSubmit={handleSubmit}> 
            <MultiSelect value={selectedTreinos} panelStyle={{borderRadius:'4px', backgroundColor:'hsl(235, 21%, 21%)', padding:'10px',marginTop:'10px'}} onChange={(e) => setSelectedTreinos(e.value)} options={treinos} optionLabel="nome" display="comma"  
            placeholder="Selecione oque você treinou." maxSelectedLabels={5} className="w-full md:w-20rem" style={{color:'white',backgroundColor:'hsl(235, 21%, 21%)' , width:'200px',height:'30px',borderRadius:'8px',fontWeight:'bolder',padding:'8px 5px 5px 6px', fontSize:'.8rem'}}/>
            <button className={styles.button} >Registrar treino</button>
          </form>
      </div>
      <div className={styles.calendaryInfo}>
        <div className={styles.infoCards}>
           {workouts && workouts.map((i,index)=>(
                    <div className={styles.calendaryCard} key={index}>
                        <p className={styles.cardDate}><span>DIA</span> {i.date}</p>
                          <p className={styles.cardMonth}><span>Mês: </span>{`${i.Month+1}`}</p>
                            <p>{i.Hour}H</p>
                          <IoIosFitness  fill="black"/>
                       <div className={styles.cardWorkout} style={{display:'flex', gap:'3px'}}>
                          {i.selectedTreinos.map((i,index)=>(
                              <p key={index}>{i.nome}</p>
                          ))}
                      </div>
                    </div>
          ))} 
         </div>
      </div>
    </section>
  )
};

export default Calendary;
