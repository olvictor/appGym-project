import React, { useState } from "react";
import styles from './Exercises.module.css';
import { TypeAnimation } from "react-type-animation";

const Exercises = () => {
  const [segunda,setSegunda] = useState([]);
  const [terça,setTerça] = useState([]);
  const [quarta,setQuarta] = useState([]);
  const [quinta,setQuinta] = useState([]);
  const [sexta,setSexta] = useState([]);
  const [sabado,setSabado] = useState([]);
  const [domingo,setdomingo] = useState([]);
  const [days,setDays] = useState(['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'])
  const [weekDay, setWeekDay] = useState(null);
  const [muscle,setMuscle] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault()


    let day = weekDay;

    switch(day){
      case segunda:
        setSegunda([...segunda,muscle]);
        break;
          case terça:
            setTerça([...terça,muscle]);
            break;
              case quarta:
              setQuarta([...quarta,muscle]);
              break;
      }
    console.log(segunda,terça,quarta);
  }
  

  return <section className={styles.contentExercises}>
   <TypeAnimation
          sequence={["", 1000, "Your training ! "]}
          wrapper="p"
          cursor={true}
          repeat={0}
          style={{ fontSize: "2rem", display: "inline-block", color: "#fff" }}
  />
    <form className={styles.exercisesForm} onSubmit={handleSubmit}>
      <h3>Build your training |</h3>
      <h4>Select a day:</h4>
      <select onChange={(e)=>setWeekDay(e.target.value)} defaultValue='0'>
      <option value='0'>Day</option>
        <option value='segunda'>Segunda-feira</option>
        <option value='terça'>Terça-feira</option>
        <option value='quarta'>Quarta-feira</option>
        <option value='quinta'>Quinta-feira</option>
        <option value='sexta'>Sexta-feira</option>
        <option value='sabado'>Sabado</option>
        <option value='domingo'>Domingo</option>
      </select>
      <h4>Select a Muscle :</h4>
      <select  onChange={(e)=>setMuscle(e.target.value)} defaultValue='0'>
      <option value='0'>Muscle</option>
        <option value='peito'>Peito</option>
        <option value='costas'>Costas</option>
        <option value='biceps'>Biceps</option>
        <option value='triceps'>Triceps</option>
        <option value='perna'>Perna</option>
        <option value='ombro'>Ombro</option>
        <option value='gluteo'>Glúteo</option>
      </select>
      <button>Register</button>
    </form>

    <table border='1'>
  <tr>
    {days.map((day)=>(
      <th>{day}</th>
    ))}
  </tr>
  <td>
   <tr> Alfreds Futterkiste</tr>
   <tr>Maria Anders</tr> 
   <tr>Germany</tr>
  </td>
  <td>
   <tr> Alfreds Futterkiste</tr>
   <tr>Maria Anders</tr> 
   <tr>Germany</tr>
  </td>
  <td>asasopások</td>
  <td>asasopások</td>
</table>
  </section>;
};

export default Exercises;
