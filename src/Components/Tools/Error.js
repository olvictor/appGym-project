import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  return <p className={styles.error}>{error}</p>;
};

export default Error;
