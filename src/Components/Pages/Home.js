import React from "react";
import Head from "../../Head";
import runningIMG from "../../img/bg.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {

  return (
    <section>
      <Head title="Home" />
      <div className={styles.main__content}>
        <div className={styles.main__text + " animeDown"}>
          <TypeAnimation
            sequence={["", 1000, "Tenha a melhor parte do seu dia!"]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            style={{ fontSize: "3em", display: "inline-block", color: "#fff" }}
          />
          <h2>- você se encaixa aqui</h2>
          <p>
          Um pequeno progresso é melhor que nenhum progresso. Siga firme, continue e não desista.
          </p>
          <Link to="/login">Entrar</Link>
        </div>
        <div className={styles.img}>
        <img
          className={styles.mainIMG + ` animeRigth`}
          src={runningIMG}
          al="Gym background"
          alt='Background gym home'
        />
        </div>
      </div>  
       </section>
  );
};

export default Home;
