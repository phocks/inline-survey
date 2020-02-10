import React, { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

// import data from "./data.json";

export default props => {
  const { questionId, choice, data } = props;

  const [averages, setAverages] = useState();

  const scale = scaleLinear()
    .domain([1, 5])
    .range([0, 100]);

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
    setAverages(filtered);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.youSaid}>
        {/* <div className={styles.text}>You said</div> */}
        <div className={styles.midBar}></div>
        <div className={styles.yourDot}></div>
      </div>
    </div>
  );
};
