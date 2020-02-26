import React, { useState } from "react";
import styles from "./styles.scss";

export default props => {
  const { pre = "WHAT DO YOU THINK?", text, questionId = "default", onChange, theme } = props;

  const handleChange = event => {
    const answer = event.target.value;

    const key = {
      "strongly-disagree": 1,
      "somewhat-disagree": 2,
      neutral: 3,
      "somewhat-agree": 4,
      "strongly-agree": 5,
      "dont-know": 0
    };

    onChange({ questionId: questionId, selection: answer, value: key[answer] });
  };

  return (
    <div className={`${styles.root} ${styles.pink}`} onChange={handleChange}>
      {pre && <div className={styles.pre}>{pre}</div>}
      {text && <h2 className={styles.title}>{text}</h2>}
      <div className={styles.choices}>
        <input
          type="radio"
          id={`${questionId}-strongly-disagree`}
          value={"strongly-disagree"}
          name={questionId}
        />
        <label htmlFor={`${questionId}-strongly-disagree`} >
          Strongly disagree
        </label>
        <input
          type="radio"
          id={`${questionId}-somewhat-disagree`}
          name={questionId}
          value={"somewhat-disagree"}
        />
        <label htmlFor={`${questionId}-somewhat-disagree`}>
          Somewhat disagree
        </label>
        <input
          type="radio"
          id={`${questionId}-neutral`}
          name={questionId}
          value={"neutral"}
        />
        <label htmlFor={`${questionId}-neutral`}>Neutral</label>
        <input
          type="radio"
          id={`${questionId}-somewhat-agree`}
          name={questionId}
          value={"somewhat-agree"}
        />
        <label htmlFor={`${questionId}-somewhat-agree`}>Somewhat agree</label>
        <input
          type="radio"
          id={`${questionId}-strongly-agree`}
          name={questionId}
          value={"strongly-agree"}
        />
        <label htmlFor={`${questionId}-strongly-agree`}>Strongly agree</label>
        <input
          type="radio"
          id={`${questionId}-dont-know`}
          name={questionId}
          value={"dont-know"}
        />
        <label className={styles.dontKnow} htmlFor={`${questionId}-dont-know`}>
          Don&rsquo;t know
        </label>
      </div>
    </div>
  );
};
