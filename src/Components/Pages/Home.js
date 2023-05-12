import React, { useEffect, useState } from "react";
import Head from "../../Head";
import runningIMG from "../../img/bg.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import ShowMuscle from "../ShowMuscle/ShowMuscle";
import { TypeAnimation } from "react-type-animation";

const Home = () => {

  return (
    <div>
      <Head title="Home" />
      <div className={styles.main__content}>
        <div className={styles.main__text + " animeDown"}>
          <TypeAnimation
            sequence={["", 1000, "Get the best part of you day !"]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            style={{ fontSize: "3em", display: "inline-block", color: "#fff" }}
          />
          <h2>- you fit here</h2>
          <p>
            We provide serious fitness but within a fun and friendly, safe
            space.
          </p>
          <Link to="/login">Join now</Link>
        </div>
        <img
          className={styles.mainIMG + ` animeRigth`}
          src={runningIMG}
          al="Gym background"
          alt='Background gym home'
        />
      </div>  
       </div>
  );
};

export default Home;
