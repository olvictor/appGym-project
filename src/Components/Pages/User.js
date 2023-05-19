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

  const [kcal, setKcal] = useState('');
  const [proteina, setProteina] = useState('');
  const [carbo, setCarbo] = useState('');
  const [gordura, setGordura] = useState('');



  return <section className={styles.section}>
    <form className={styles.formUser}> 
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
      <button>Register info</button>  
    </form>

    <div className={styles.userInfo}>
        <input type='text'  placeholder={`Nome: ${data.nome}`} disabled/>
        <input type='text'  placeholder={`Altura: ${height.value} m`} disabled/>
        <input type='text'  placeholder={`Idade: ${age.value} Anos`} disabled/>
        <input type='text'  placeholder={`Peso: ${peso.value} kg`} disabled/>
    </div>
  </section>;
};

export default User;
