import React from "react";
import styles from "./styles.scss";

export default props => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h3>{props.heading}</h3>
        <div className={styles.opinions}>
          <div className={styles.opinion}>STRONGLY AGREE</div>
          <div className={styles.opinion}>SOMEWHAT DISAGREE</div>
          <div className={styles.opinion}>NEUTRAL</div>
          <div className={styles.opinion}>SOMEWHAT AGREE</div>
          <div className={styles.opinion}>STRONGLY AGREE</div>
        </div>
      </div>
    </div>
  );
};
