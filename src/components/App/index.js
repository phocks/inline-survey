import React, { useEffect, useRef } from "react";
import styles from "./styles.scss";
import Survey from "../Survey";

import AnimatedIcons from "../AnimatedIcons";

export default props => {
  return (
    <div className={styles.root}>
      <AnimatedIcons />
      <Survey />
    </div>
  );
};
