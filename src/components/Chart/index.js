import React from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

const scale = scaleLinear()
  .domain([0.0, 1.0])
  .range([2, 70]);

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

  const getDimensions = data => {
    let size = Math.round(scale(data));

    // Bump size to keep vertically centered
    if (size % 2 !== 0) size++;

    return {
      width: size + "px",
      height: size + "px"
    };
  };

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
            <div className={styles.row} key={iteration}>
              <div className={styles.line}></div>

              <div className={styles.layer}>
                <div className={styles.dotContainer}>
                  <div
                    className={styles.dot}
                    style={getDimensions(chartData[row][0])}
                  ></div>
                </div>
                <div className={styles.dotContainer}>
                  <div
                    className={styles.dot}
                    style={getDimensions(chartData[row][1])}
                  ></div>
                </div>
                <div className={styles.dotContainer}>
                  <div
                    className={styles.dot}
                    style={getDimensions(chartData[row][2])}
                  ></div>
                </div>
                <div className={styles.dotContainer}>
                  <div
                    className={styles.dot}
                    style={getDimensions(chartData[row][3])}
                  ></div>
                </div>
                <div className={styles.dotContainer}>
                  <div
                    className={styles.dot}
                    style={getDimensions(chartData[row][4])}
                  ></div>
                </div>
              </div>

              <div className={styles.layer}>
                <div className={styles.byGroup}>{row}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
