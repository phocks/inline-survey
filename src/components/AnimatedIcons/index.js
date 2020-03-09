import "./keyshape.min";

// Make sure KeyshapeJS is in global
if (KeyshapeJS.version.indexOf("1.") != 0)
  throw Error("Expected KeyshapeJS v1.*.*");
window.ks = document.ks = KeyshapeJS;

import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { Portal } from "react-portal";
import styles from "./styles.scss";

import { useWindowSize } from "../../lib/utils";

import faceAnimation from "./Face.svg";
import cloudAnimation from "./cloud.svg";
import animate from "./animateCloud";

// Define our clouds. Position is percentage of screen x, y
// Size is percentage of average screen dimensions
const clouds = [
  { name: "cloud1", position: [1, 1], size: 29 },
  { name: "cloud2", position: [70, 60], size: 32 },
  { name: "cloud3", position: [20, 60], size: 39 },
  { name: "cloud4", position: [50, 20], size: 31 }
];

export default props => {
  const [cloudColor, setCloudColor] = useState("#ffbcaa");
  const size = useWindowSize();

  const initImages = () => {
    // console.log("init");
  };

  // Animation function moved to own file for brevity
  const animateCloud = animate;

  useEffect(() => {
    // When cloudColor changes change cloud color
    clouds.forEach(cloud => {
      // Grab the solid layer of the SVG
      const solid = document.querySelector(`#Front__${cloud.name}`);

      if (solid) {
        solid.style.transition = "fill 1s";
        solid.style.fill = cloudColor;
      }

      // Grab the gradient layer of the SVG
      const gradient = document.querySelector(
        `#Gradient-0__${cloud.name} stop:last-child`
      );

      if (gradient) {
        gradient.style.transition = "stop-color 1s";
        gradient.style.stopColor = cloudColor;
      }
    });
  }, [cloudColor, size.width, size.height]);

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

        {clouds.map((cloud, iteration) => {
          return (
            <div
              className={styles.cloud}
              key={iteration}
              onClick={() => {
                var randomColor = Math.floor(Math.random() * 16777215).toString(
                  16
                );

                setCloudColor("#" + randomColor);
              }}
            >
              <SVG
                src={cloudAnimation}
                uniquifyIDs={true}
                uniqueHash={cloud.name}
                style={{
                  position: "fixed",
                  width:
                    // Average out the screen dimensions
                    (((window.innerWidth + window.innerHeight) / 2) *
                      cloud.size) /
                      100 +
                    "px",
                  left: (window.innerWidth * cloud.position[0]) / 100 + "px",
                  top: (window.innerHeight * cloud.position[1]) / 100 + "px"
                }}
                onLoad={() => {
                  // Delay animation or else won't work
                  setTimeout(() => {
                    animateCloud(cloud.name);
                  }, Math.random() * 1000);
                }}
              />
            </div>
          );
        })}
      </div>
    </Portal>
  );
};
