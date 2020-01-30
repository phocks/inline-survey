import React, { useState, useEffect } from "react";
import styles from "./styles.scss";

import data from "./data.json";

export default props => {
  const { questionId, choice } = props;

  const [averages, setAverages] = useState();

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
    setAverages(filtered);
  }, []);

  return (
    <div className={styles.root}>
      <div>
        <span>You:</span> <span>{choice}</span>
      </div>
      {averages &&
        averages.map((average, iteration) => {
          return (
            <div key={iteration}>
              <span>{average.by_group}:</span> <span>{average.value}</span>
            </div>
          );
        })}
    </div>
  );
};
