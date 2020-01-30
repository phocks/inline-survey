import React, { useEffect } from "react";
import styles from "./styles.scss";

import data from "./data.json";


export default props => {
  const { show, questionId } = props;

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
  }, []);

  return (
    <div className={styles.root}>
      
        
    </div>
  );
};
