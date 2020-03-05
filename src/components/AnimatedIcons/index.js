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
import cloudAnimation from "./cloud.svg";

export default props => {
  const initImages = () => {
    console.log("init");
  };
  return (
    <Portal node={document.querySelector(".storylab-header-animation")}>
      <div className={styles.root}>
        <div className={styles.face}>
          <SVG
            src={faceAnimation}
            uniquifyIDs={true}
            uniqueHash="face"
            style={{}}
            onLoad={initImages}
          />
        </div>

        <div className={styles.cloud}>
          <SVG
            src={cloudAnimation}
            uniquifyIDs={true}
            uniqueHash="cloud"
            style={{}}
            onLoad={initImages}
          />
        </div>
      </div>
    </Portal>
  );
};
