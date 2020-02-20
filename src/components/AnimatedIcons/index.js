import "./keyshape.min";

// Make sure KeyshapeJS is in global
if (KeyshapeJS.version.indexOf("1.") != 0)
  throw Error("Expected KeyshapeJS v1.*.*");
window.ks = document.ks = KeyshapeJS;

import React from "react";
import SVG from "react-inlinesvg";
import { Portal } from "react-portal";
import styles from "./styles.scss";

import faceAnimation from "./Face.svg";

export default props => {
  return (
    <Portal node={document.querySelector(".storylab-header-animation")}>
      <div className={styles.root}>
        <SVG
          src={faceAnimation}
          // uniquifyIDs={true}
          // uniqueHash="face"
          // style={{}}
          // onLoad={globeLoop}
        />
      </div>
    </Portal>
  );
};
