import React from "react";
import styles from "./styles.scss";

import data from "./data.json";
console.log(data);

export default props => {
  const { show } = props;
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
