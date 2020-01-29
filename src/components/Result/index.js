import React, { useEffect } from "react";
import styles from "./styles.scss";

import data from "./data.json";
// console.log(data);

export default props => {
  const { show, question } = props;

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === "Q69_1";
    });

    console.log(filtered);
  }, []);

  return (
    <div className={styles.root}>
      {show && (
        <div>
          Find me in <strong>src/components/Result/index.js</strong>
        </div>
      )}
    </div>
  );
};
