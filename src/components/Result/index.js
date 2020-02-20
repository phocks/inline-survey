import React, { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";

import styles from "./styles.scss";

// import data from "./data.json";

export default props => {
  const { questionId, choice, data } = props;

  const [averages, setAverages] = useState([]);
  // const [grow, setGrow] = useState()

  const scale = scaleLinear()
    .domain([1, 5])
    .range([0, 100]);

  useEffect(() => {
    const filtered = data.filter(row => {
      return row.QID === questionId;
    });

    console.log(filtered);
    // filtered.sort((a, b) => (a.value < b.value ? 1 : -1));
    setAverages(filtered);

    // setTimeout(() => setGrow(true), 10 )

    // TODO: further filter this by only relevant
    // qns in an array eg. ["age_report", "overall_report"]
  }, []);

  function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = "";

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + "px";
      });
    });

    // mark the section as "currently collapsed"
    element.setAttribute("data-collapsed", "true");
  }

  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + "px";

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener("transitionend", function(e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener("transitionend", arguments.callee);

      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });

    // mark the section as "currently not collapsed"
    element.setAttribute("data-collapsed", "false");
  }

  let previousGroup = null;

  return (
    <div className={styles.root}>
      {/* <div className={styles.root} style={{maxHeight: grow ? `${averages.length * 50}px` : "0px"}}> */}
      <div className={styles.key}>
        <span className={styles.left}>AGREE LESS</span>
        <span className={styles.mid}>NEUTRAL</span>
        <span className={styles.right}>AGREE MORE</span>
      </div>

      <div className={styles.lineContainer}>
        <div
          className={styles.text}
          style={{
            left: `${scale(choice)}%`,
            opacity: `${choice === 0 ? 0.0 : 1.0}`,
            color: "black",
            fontWeight: "900"
          }}
        >
          You said
        </div>

        <div className={styles.line}>
          <div className={styles.midBar}></div>
          {choice !== 0 && (
            <div
              className={styles.yourDot}
              style={{ left: `${scale(choice)}%` }}
            ></div>
          )}
        </div>
      </div>

      {averages &&
        averages.map((average, iteration) => {
          let groupHeading;

          if (previousGroup !== average.Group) {
            groupHeading = average.Group;
          }

          previousGroup = average.Group;

          return (
            <div key={iteration} className={styles.lineContainer}>
              {groupHeading && <p>{groupHeading}</p>}
              <div
                className={styles.text}
                style={{ left: `${scale(average.value)}%` }}
              >
                {average.by_group}
              </div>
              <div className={styles.line}>
                <div className={styles.midBar}></div>
                <div
                  className={styles.dot}
                  style={{ left: `${scale(average.value)}%` }}
                ></div>
              </div>
            </div>
            // <line
            //   key={iteration}
            //   x1={scale(average.value)}
            //   y1={height - margin.bottom - 4}
            //   x2={scale(average.value)}
            //   y2={height - margin.bottom - 24}
            // />
          );
        })}
    </div>
  );
};
