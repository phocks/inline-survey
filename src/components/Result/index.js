import React, { useEffect } from "react";
import styles from "./styles.scss";

import data from "./data.json";


export default props => {
  const { questionId, choice } = props;

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
  }, []);

  return (
    <div className={styles.root}>
      {choice}
    </div>
  );
};
