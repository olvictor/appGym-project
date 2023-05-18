import React, { useContext, useState } from "react";
import styles from "./User.module.css"
import Input from "../Tools/Input";
import UserContext from "../../UserContext";
import { TypeAnimation } from "react-type-animation";
import UseForm from '../Hooks/UseForm'

const User = () => {

  const {data} = useContext(UserContext);

  const [settings,setSettings] = useState(null);
  const Height = UseForm()


  return <section className={styles.section}>
    <form className={styles.formUser}> 
    <TypeAnimation
            sequence={["", 1000, `Hi, ${data.nome} Here you can enter your information !`]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            style={{ fontSize: "1.4em", display: "inline-block", color: "#fff" }}
          />
    {/* <h2>Hi, {data.nome} Here you can enter your information </h2> */}
    <hr />
        <Input type='text' placeholder='Height'/>
        <Input type='text' placeholder='Peso'/>
        <Input type='text' placeholder='Idade'/>
      <button>Register info</button>  
    </form>
  </section>;
};

export default User;
