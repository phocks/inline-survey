import React, { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

export default props => {
  const { questionId, choice, data, group } = props;

  const [averages, setAverages] = useState([]);

  const scale = scaleLinear()
    .domain([1, 5])
    .range([0, 100]);

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    // If group is specified further filter the data
    if (group) {
      const split = filtered.filter(row => row.Group === group);
      setAverages(split);
    } else {
      setAverages(filtered);
    }
  }, []);

  let previousGroup = null;

  return (
    <div className={styles.root}>
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
