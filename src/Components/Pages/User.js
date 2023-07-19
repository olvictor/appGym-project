import React, { useContext, useState } from "react";
import styles from "./User.module.css"
import Input from "../Tools/Input";
import UserContext from "../../UserContext";
import { TypeAnimation } from "react-type-animation";
import UseForm from '../Hooks/UseForm'

const User = () => {

  const {data} = useContext(UserContext);

  const [settings,setSettings] = useState(null);
  const age = UseForm()
  const height = UseForm()
  const peso = UseForm()

  const [sexo, setSexo] = useState(null)
  const [kcal, setKcal] = useState(2000);
  const [kcalING,setKcalING] = useState(1000)
  const [proteina, setProteina] = useState('');
  const [carbo, setCarbo] = useState('');
  const [gordura, setGordura] = useState('');
  const [imc,setImc] = useState(null)
  const [meta,setMeta] = useState(null)
  

  const calculateImc = () =>{

    let imc = peso.value / (height.value * height.value)


    setImc(imc.toFixed(2))

  }

  const calcKcal = () =>{

    if(sexo === 'masculino'){
      let kcal = ((0.063 * peso.value + 2.896) * 239).toFixed(2) - meta
      setKcal(+kcal)
    }if(sexo === 'feminino'){
      let kcal = ((0.062 * peso.value + 2.036) * 239).toFixed(2)
      setKcal(+kcal)
    }


  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    calculateImc()
    calcKcal()


  }



  return <section className={styles.section}>
    <form className={styles.formUser} onSubmit={handleSubmit}> 
    <TypeAnimation
            sequence={["", 1000, `Hi, ${data.nome} Here you can enter your information !`]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            style={{ fontSize: "1.4em", display: "inline-block", color: "#fff" }}
          />
    <hr />
        <Input type='text' placeholder='Height'{...height}/>
        <Input type='number' placeholder='Peso' {...peso}/>
        <Input type='number' placeholder='Idade' {...age}/>
        <select defaultValue='0' onChange={(e)=>setSexo(e.target.value)}>
        <option value='0'>select</option>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
        </select>
        <select defaultValue='0' onChange={(e)=>setMeta(e.target.value)}>
        <option value='-1'>select your goal</option>
          <option value='0'>Maintain weight</option>
          <option value='300'>Lose weight</option>
          <option value='-300'>Gain weight</option>
        </select>
      <button>Register info</button>  
    </form>

    <div className={styles.userInfo}>
        <input type='text'  placeholder={`Nome: ${data.nome}`} disabled/>
        <input type='text'  placeholder={`Altura: ${height.value} m`} disabled/>
        <input type='text'  placeholder={`Idade: ${age.value} Anos`} disabled/>
        <input type='text'  placeholder={`Peso: ${peso.value} kg`} disabled/>
        <input type='text'  placeholder={`IMC: ${imc}`} disabled/>

        <meter className={styles.meterKcal} min='0' max={kcal} low='30' high='70' value={kcalING}></meter> {kcalING} of {kcal}  kcal p/day
    </div>
  </section>;
};

export default User;
