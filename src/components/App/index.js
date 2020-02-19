import React, { useEffect, useRef } from "react";
import styles from "./styles.scss";
import Survey from "../Survey";
import { addClass } from "../../lib/utils";

export default props => {
  return (
    <div className={styles.root}>
      <Survey />
    </div>
  );
};
