import React, { useState, useRef, useEffect } from "react";
import { scaleLinear } from "d3-scale";
import SVG from "react-inlinesvg";

import { useWindowSize } from "../../lib/utils";

import styles from "./styles.scss";

import brace from "./brace.svg";

// Make a function to control size of dot
const scale = scaleLinear()
  .domain([0.0, 1.0])
  .range([2, 70]);

// Percentage values sit on top of dots
const VALUE_OFFSET = 10;
const ANNOTATION_OFFSET = 48;
const ANNOTATION_WIDTH_OFFSET = 6;
const ROW_TITLE_OFFSET = 34;

export default props => {
  const { theme = "pink" } = props;

  const size = useWindowSize();

  const [disagreeX, setDisagreeX] = useState(null);
  const [agreeX, setAgreeX] = useState(null);
  const [disagreeWidth, setDisagreeWidth] = useState(null);
  const [agreeWidth, setAgreeWidth] = useState(null);

  const dot1container = useRef(null);
  const dot2container = useRef(null);
  const dot4container = useRef(null);
  const dot5container = useRef(null);

  const filteredData = props.data.filter(entry => {
    return entry.question === props.questionId && entry.group === props.group;
  });

  let chartData = {};

  for (const item of filteredData) {
    if (typeof chartData[item.by_group] === "undefined")
      chartData[item.by_group] = [];
    chartData[item.by_group].push(item.value);
  }

  const getDimensions = data => {
    let size = Math.round(scale(data));

    // Bump size to keep vertically centered
    if (size % 2 !== 0) size++;

    return {
      width: size + "px",
      height: size + "px"
    };
  };

  useEffect(() => {
    // Calculate the middle of dots for annotations
    // First 2 dots
    const dot1Bounds = dot1container.current.getBoundingClientRect();
    const dot2Bounds = dot2container.current.getBoundingClientRect();

    const dot1Center = (dot1Bounds.left + dot1Bounds.right) / 2;
    const dot2Center = (dot2Bounds.left + dot2Bounds.right) / 2;

    setDisagreeX(dot1Center - dot1Bounds.left);
    setDisagreeWidth(dot2Center - dot1Center);

    // Last 2 dots
    const dot4Bounds = dot4container.current.getBoundingClientRect();
    const dot5Bounds = dot5container.current.getBoundingClientRect();

    const dot4Center = (dot4Bounds.left + dot4Bounds.right) / 2;
    const dot5Center = (dot5Bounds.left + dot5Bounds.right) / 2;

    setAgreeX(dot4Center - dot1Bounds.left);
    setAgreeWidth(dot5Center - dot4Center);
  }, [size.width, size.height]);

  return (
    <div className={`${styles.root} ${styles[theme]}`}>
      <div className={styles.container}>
        <h3>{props.heading}</h3>
        <div className={styles.opinions}>
          <div className={styles.opinion}>STRONGLY DISAGREE</div>
          <div className={styles.opinion}>SOMEWHAT DISAGREE</div>
          <div className={styles.opinion}>NEUTRAL</div>
          <div className={styles.opinion}>SOMEWHAT AGREE</div>
          <div className={styles.opinion}>STRONGLY AGREE</div>
        </div>

        {Object.keys(chartData).map((row, iteration) => {
          return (
            <div key={iteration}>
              {/* Row label */}
              <div
                className={styles.byGroup}
                style={
                  props.annotateRows &&
                  props.annotateRows[row] &&
                  props.annotateRows[row].show &&
                  props.annotateRows[row].disagree
                    ? {
                        minHeight: `${Math.max(
                          ROW_TITLE_OFFSET + scale(chartData[row][0]) / 2,
                          ROW_TITLE_OFFSET + scale(chartData[row][1]) / 2
                        )}px`
                      }
                    : {}
                }
              >
                {row}
              </div>

              <div className={styles.row}>
                <div className={styles.line}></div>

                <div className={styles.layer}>
                  <div className={styles.dotContainer} ref={dot1container}>
                    <div
                      className={styles.dot}
                      style={getDimensions(chartData[row][0])}
                    ></div>
                  </div>
                  <div className={styles.dotContainer} ref={dot2container}>
                    <div
                      className={styles.dot}
                      style={getDimensions(chartData[row][1])}
                    ></div>
                  </div>
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.dot}
                      style={getDimensions(chartData[row][2])}
                    ></div>
                  </div>
                  <div className={styles.dotContainer} ref={dot4container}>
                    <div
                      className={styles.dot}
                      style={getDimensions(chartData[row][3])}
                    ></div>
                  </div>
                  <div className={styles.dotContainer} ref={dot5container}>
                    <div
                      className={styles.dot}
                      style={getDimensions(chartData[row][4])}
                    ></div>
                  </div>
                </div>

                <div className={styles.layer}>
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.value}
                      style={{
                        transform: `translateY(-${VALUE_OFFSET +
                          scale(chartData[row][0]) * 0.5}px)`
                      }}
                    >
                      {(chartData[row][0] * 100).toFixed(0) + "%"}
                    </div>
                  </div>
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.value}
                      style={{
                        transform: `translateY(-${VALUE_OFFSET +
                          scale(chartData[row][1]) * 0.5}px)`
                      }}
                    >
                      {(chartData[row][1] * 100).toFixed(0) + "%"}
                    </div>
                  </div>
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.value}
                      style={{
                        transform: `translateY(-${VALUE_OFFSET +
                          scale(chartData[row][2]) * 0.5}px)`
                      }}
                    >
                      {(chartData[row][2] * 100).toFixed(0) + "%"}
                    </div>
                  </div>
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.value}
                      style={{
                        transform: `translateY(-${VALUE_OFFSET +
                          scale(chartData[row][3]) * 0.5}px)`
                      }}
                    >
                      {(chartData[row][3] * 100).toFixed(0) + "%"}
                    </div>
                  </div>
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.value}
                      style={{
                        transform: `translateY(-${VALUE_OFFSET +
                          scale(chartData[row][4]) * 0.5}px)`
                      }}
                    >
                      {(chartData[row][4] * 100).toFixed(0) + "%"}
                    </div>
                  </div>
                </div>

                {/* Optional annotations to display total agree/disagree */}
                <div className={styles.relativeLayer}>
                  {props.annotateRows &&
                    props.annotateRows[row] &&
                    props.annotateRows[row].show &&
                    props.annotateRows[row].disagree && (
                      <div
                        className={styles.annotationContainer}
                        style={{
                          left: disagreeX - ANNOTATION_WIDTH_OFFSET / 2,
                          width: disagreeWidth + ANNOTATION_WIDTH_OFFSET,
                          transform: `translateY(-${Math.max(
                            ANNOTATION_OFFSET + scale(chartData[row][0]) * 0.5,
                            ANNOTATION_OFFSET + scale(chartData[row][1]) * 0.5
                          )}px)`
                        }}
                      >
                        <span className={styles.annotationValue}>
                          DISAGREE{" "}
                          {Math.round(
                            (chartData[row][0] + chartData[row][1]) * 100
                          )}
                          %
                        </span>
                        <SVG
                          src={brace}
                          uniquifyIDs={true}
                          uniqueHash="disagree-brace"
                          style={{ width: "100%" }}
                        />
                      </div>
                    )}

                  {props.annotateRows &&
                    props.annotateRows[row] &&
                    props.annotateRows[row].show &&
                    props.annotateRows[row].agree && (
                      <div
                        className={styles.annotationContainer}
                        style={{
                          left: agreeX - ANNOTATION_WIDTH_OFFSET / 2,
                          width: agreeWidth + ANNOTATION_WIDTH_OFFSET,
                          // Get highest offset
                          transform: `translateY(-${Math.max(
                            ANNOTATION_OFFSET + scale(chartData[row][3]) * 0.5,
                            ANNOTATION_OFFSET + scale(chartData[row][4]) * 0.5
                          )}px)`
                        }}
                      >
                        <span className={styles.annotationValue}>
                          AGREE{" "}
                          {Math.round(
                            (chartData[row][3] + chartData[row][4]) * 100
                          )}
                          %
                        </span>
                        <SVG
                          src={brace}
                          uniquifyIDs={true}
                          uniqueHash="agree-brace"
                          style={{ width: "100%" }}
                        />
                      </div>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
