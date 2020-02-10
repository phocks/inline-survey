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

    // TODO: further filter this by only relevant
    // qns in an array eg. ["age_report", "overall_report"]
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.key}>
        <span className={styles.left}>AGREE LESS</span>
        <span className={styles.mid}>NEUTRAL</span>
        <span className={styles.right}>AGREE MORE</span>
      </div>

      <div className={styles.line}>
        {/* <div className={styles.text}>You said</div> */}
        <div className={styles.midBar}></div>
        {choice !== 0 && (
          <div
            className={styles.yourDot}
            style={{ left: `${scale(choice)}%` }}
          ></div>
        )}
      </div>
      {averages &&
        averages.map((average, iteration) => {
          return (
            <div className={styles.line} key={iteration}>
              <div className={styles.midBar}></div>
              <div
                className={styles.dot}
                style={{ left: `${scale(average.value)}%` }}
              ></div>
            </div>
            // <line
            //   key={iteration}
            //   x1={scale(average.value)}
            //   y1={height - margin.bottom - 4}
            //   x2={scale(average.value)}
            //   y2={height - margin.bottom - 24}
            // />
          );
        })}
    </div>
  );
};
