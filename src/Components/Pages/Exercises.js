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
  const [domingo,setDomingo] = useState([]);
  const [days,setDays] = useState(['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'])
  const [weekDay, setWeekDay] = useState(null);
  const [muscle,setMuscle] = useState(null);

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
  </section>;
};

export default Exercises;
