import React from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

const scale = scaleLinear()
  .domain([0.0, 1.0])
  .range([1, 50]);

export default props => {
  const filteredData = props.data.filter(entry => {
    return entry.question === props.questionId && entry.group === props.group;
  });

  console.log(filteredData);

  let chartData = {};

  for (const item of filteredData) {
    if (typeof chartData[item.by_group] === "undefined")
      chartData[item.by_group] = [];
    chartData[item.by_group].push(item.value);
  }

  console.log(chartData);

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

        {Object.keys(chartData).map((row, iteration) => {
          console.log(chartData[row]);
          return (
            <div className={styles.row}>
              <div className={styles.line}></div>
              <div className={styles.dotContainer}>
                <div
                  className={styles.dot}
                  style={{
                    width: Math.round(scale(chartData[row][0])) + "px",
                    height: Math.round(scale(chartData[row][0])) + "px"
                  }}
                ></div>
              </div>
              <div className={styles.dotContainer}>
                <div
                  className={styles.dot}
                  style={{
                    width: Math.round(scale(chartData[row][1])) + "px",
                    height: Math.round(scale(chartData[row][1])) + "px"
                  }}
                ></div>
              </div>
              <div className={styles.dotContainer}>
                <div
                  className={styles.dot}
                  style={{
                    width: Math.round(scale(chartData[row][2])) + "px",
                    height: Math.round(scale(chartData[row][2])) + "px"
                  }}
                ></div>
              </div>
              <div className={styles.dotContainer}>
                <div
                  className={styles.dot}
                  style={{
                    width: Math.round(scale(chartData[row][3])) + "px",
                    height: Math.round(scale(chartData[row][3])) + "px"
                  }}
                ></div>
              </div>
              <div className={styles.dotContainer}>
                <div
                  className={styles.dot}
                  style={{
                    width: Math.round(scale(chartData[row][4])) + "px",
                    height: Math.round(scale(chartData[row][4])) + "px"
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
