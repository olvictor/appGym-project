import React, { useEffect, useState } from "react";
import styles from "./ShowMuscle.module.css";
function ShowMuscle({ targetMuscle }) {
  const [muscleExercise, setMuscleExercise] = useState(null);

  useEffect(() => {
    const getexercByMuscle = async() =>{
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${targetMuscle}`;
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
        setMuscleExercise(result);
      } catch (error) {
        console.error(error);
      }
    }
    getexercByMuscle()
  }, [targetMuscle]);
  return (
    <div className={styles.showExercise__content}>
      {muscleExercise &&
        muscleExercise.map((exercise) => (
          <div className={styles.muscle__card} key={exercise.id}>
            <h3>{exercise.name}</h3>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <div className={styles.muscle__card__espec}>
              <p>
                Bodyparty - <span>{exercise.bodyPart}</span>
              </p>
              {"|"}
              <p>
                Equipment - <span>{exercise.equipment}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShowMuscle;
