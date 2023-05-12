import React, { useEffect, useState } from "react";
import styles from './Exercises.module.css';
import { TypeAnimation } from "react-type-animation";
import ShowMuscle from "../ShowMuscle/ShowMuscle";

const Exercises = () => {
  const [segunda,setSegunda] = useState([]);
  const [terça,setTerça] = useState([]);
  const [quarta,setQuarta] = useState([]);
  const [quinta,setQuinta] = useState([]);
  const [sexta,setSexta] = useState([]);
  const [sabado,setSabado] = useState([]);
  const [domingo,setDomingo] = useState([]);
  const [days,setDays] = useState(['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'])
  const [weekDay, setWeekDay] = useState(null);
  const [muscle,setMuscle] = useState(null);

  const [listTargetMuscles, setListTargetMuscles] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState(null);
  
  useEffect(() => {
    const getTargetMuscley =async() =>{
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f1c6fe8ad9msh54f8722877ef276p13b3bfjsn2b3b8d943027',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setListTargetMuscles(result);
      } catch (error) {
        console.error(error);
      }
  }
  getTargetMuscley()
 }, []);
console.log(!! targetMuscle)

  const handleSubmit = (e) =>{
    e.preventDefault()

let diaDaSemana = weekDay;
let setFunction;

switch (diaDaSemana) {
  case 'domingo':
    setFunction = setDomingo([...domingo, muscle]);
    break;
  case 'segunda':
    setFunction = setSegunda([...segunda, muscle]);
    break;
  case 'terça':
    setFunction = setTerça([...terça, muscle]);
    break;
  case 'quarta':
    setFunction = setQuarta([...quarta, muscle]);
    break;
  case 'quinta':
    setFunction = setQuinta([...quinta, muscle]);
    break;
  case 'sexta':
    setFunction = setSexta([...sexta, muscle]);
    break;
  case 'sabado':
    setFunction = setSabado([...sabado, muscle]);
    break;
  default:
    setFunction = "Dia inválido";
}


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
      <thead>
    <tr>
      {days.map((day,index)=>(
        <th key={index}>{day}</th>
      ))}
    </tr>
  </thead>
 <tbody>
  <td>
  {segunda && segunda.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
  </td>
  <td>
  {terça && terça.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
  </td>
  <td> 
  {quarta && quarta.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
   </td>
  <td> 
  {quinta && quinta.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
  </td>
  <td> 
  {sexta && sexta.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
  </td>
  <td> 
  {sabado && sabado.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
  </td>
  <td> 
  {domingo && domingo.map((treino ,index)=>(
   <p key={index}>{treino}</p>
  ))}
  </td>
   </tbody>
    </table>
    {listTargetMuscles && 
      <div className={styles.targetMuscles}>
        <h2>You can find exercise by muscle :</h2>
        <select defaultValue='0' onChange={(e)=>{
          if(e.target.value !== '0')setTargetMuscle(e.target.value)
        }}>
          <option value='0'>Muscle</option>
        {listTargetMuscles.map((muscle, index)=>(
          <option value={muscle} key={index}>{muscle}</option>
        ))}
        </select>
      </div>}
      {targetMuscle && <ShowMuscle targetMuscle={targetMuscle} />}
  </section>;
};

export default Exercises;
