import React, { useEffect, useRef } from "react";
import styles from "./styles.scss";
import Survey from "../Survey";
import {addClass} from "../../lib/utils"

export default props => {
  const myRef = useRef(null);

  useEffect(() => {
    addClass(myRef.current.parentNode.parentNode, "u-full");
  }, []);

  return (
    <div className={styles.root} ref={myRef}>
      <Survey />
    </div>
  );
};

