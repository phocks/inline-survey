/**
 * Just keeping this file as a backup. It was something
 * we were trying as a test.
 */


import React, { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

// import data from "./data.json";

export default props => {
  const {
    questionId,
    choice,
    data,
    width = 500,
    height = 60,
    margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  } = props;

  console.log(choice);

  const [averages, setAverages] = useState();

  const scale = scaleLinear()
    .domain([0.999, 5])
    .range([margin.left, width - margin.right]);

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
    setAverages(filtered);
  }, []);

  return (
    <div className={styles.root}>
      <svg
        width={width}
        height={height}
        style={{
          // backgroundColor: "#f9f9f9",
          stroke: "rgba(0,0,0,0.3)",
          strokeWidth: "1px"
        }}
        shape-rendering="crispEdges"
      >
        <line
          x1={margin.left}
          y1={height - margin.bottom}
          x2={width - margin.right}
          y2={height - margin.bottom}
        />

        {averages &&
          averages.map((average, iteration) => {
            return (
              <line
                key={iteration}
                x1={scale(average.value)}
                y1={height - margin.bottom - 4}
                x2={scale(average.value)}
                y2={height - margin.bottom - 24}
              />
            );
          })}

        <line
          x1={scale(choice)}
          y1={height - margin.bottom - 4}
          x2={scale(choice)}
          y2={height - margin.bottom - 24}
          style={{ stroke: "red" }}
        />
      </svg>
      {/* <div>
        <span>You:</span> <span>{choice}</span>
      </div>
      {averages &&
        averages.map((average, iteration) => {
          return (
            <div key={iteration}>
              <span>{average.by_group}:</span> <span>{average.value}&nbsp; &nbsp;</span>
            </div>
          );
        })} */}
    </div>
  );
};
