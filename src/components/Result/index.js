import React, { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

// import data from "./data.json";

export default props => {
  const { questionId, choice, data } = props;

  const [averages, setAverages] = useState([]);
  // const [grow, setGrow] = useState()

  const scale = scaleLinear()
    .domain([1, 5])
    .range([0, 100]);

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
    // filtered.sort((a, b) => (a.value < b.value ? 1 : -1));
    setAverages(filtered);

    // setTimeout(() => setGrow(true), 10 )

    // TODO: further filter this by only relevant
    // qns in an array eg. ["age_report", "overall_report"]
  }, []);

  let previousGroup = null;

  return (
    <div className={styles.root}>
      {/* <div className={styles.root} style={{maxHeight: grow ? `${averages.length * 50}px` : "0px"}}> */}
      <div className={styles.key}>
        <span className={styles.left}>AGREE LESS</span>
        <span className={styles.mid}>NEUTRAL</span>
        <span className={styles.right}>AGREE MORE</span>
      </div>

      <div className={styles.lineContainer}>
        <div
          className={styles.text}
          style={{
            left: `${scale(choice)}%`,
            opacity: `${choice === 0 ? 0.0 : 1.0}`,
            color: "#1B1A65",
            fontWeight: "900"
          }}
        >
          You said
        </div>

        <div className={styles.line}>
          <div className={styles.midBar}></div>
          {choice !== 0 && (
            <div
              className={styles.yourDot}
              style={{ left: `${scale(choice)}%` }}
            ></div>
          )}
        </div>
      </div>

      {averages &&
        averages.map((average, iteration) => {
          let groupHeading;

          if (previousGroup !== average.Group) {
            groupHeading = average.Group;
          }

          previousGroup = average.Group;

          return (
            <div key={iteration} className={styles.lineContainer}>
              {groupHeading && <p>{groupHeading}</p>}
              <div
                className={styles.text}
                style={{ left: `${scale(average.value)}%` }}
              >
                {average.by_group}
              </div>
              <div className={styles.line}>
                <div className={styles.midBar}></div>
                <div
                  className={styles.dot}
                  style={{ left: `${scale(average.value)}%` }}
                ></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
