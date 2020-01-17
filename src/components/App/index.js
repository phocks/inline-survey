import React from "react";
import styles from "./styles.scss";
import Survey from "../Survey";

export default props => {
  return (
    <div className={styles.root}>
      <Survey />
    </div>
  );
};
