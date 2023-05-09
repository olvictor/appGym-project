import React, { useEffect, useState } from "react";
import styles from "./ShowMuscle.module.css";
function ShowMuscle({ targetMuscle }) {
  const [muscleExercise, setMuscleExercise] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "52b2bef0b1msh7a3c3d95569cc0bp16bb3bjsnb4948159ced3",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    fetch(
      `https://exercisedb.p.rapidapi.com/exercises/target/${targetMuscle}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMuscleExercise(response))
      .catch((err) => console.error(err));
  }, [targetMuscle]);
  console.log(muscleExercise);
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
