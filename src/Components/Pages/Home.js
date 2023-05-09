import React, { useState } from "react";
import Head from "../../Head";
import runningIMG from "../../img/bg.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import ShowMuscle from "../ShowMuscle/ShowMuscle";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [listTargetMuscles, setListTargetMuscles] = useState(null);
  const [targetMuscle, setTargetMuscle] = useState(null);
  // useEffect(async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "52b2bef0b1msh7a3c3d95569cc0bp16bb3bjsnb4948159ced3",
  //       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //     },
  //   };
  //   fetch("https://exercisedb.p.rapidapi.com/exercises/targetList", options)
  //     .then((response) => response.json())
  //     .then((response) => setListTargetMuscles(response))
  //     .catch((err) => console.error(err));
  // }, []);

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
      {listTargetMuscles !== null && (
        <section>
          <nav className={styles.navmuscles}>
            <h3>Search Exercise by muscle group :</h3>
            <select
              defaultValue="0"
              onChange={(e) => setTargetMuscle(e.target.value)}
            >
              <option value="0">Select Muscle Group</option>
              {listTargetMuscles.map((targetMuscle) => (
                <option key={targetMuscle} value={targetMuscle}>
                  {targetMuscle}
                </option>
              ))}
            </select>
          </nav>
          {targetMuscle !== null && <ShowMuscle targetMuscle={targetMuscle} />}
        </section>
      )}
    </div>
  );
};

export default Home;
