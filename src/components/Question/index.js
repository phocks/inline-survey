import React, { useState } from "react";
import styles from "./styles.scss";

export default props => {
  const { text, questionId = "default", onChange } = props;

  const handleChange = event => {
    onChange({ questionId: questionId, selection: event.target.value });
  };

  return (
    <div className={styles.root} onChange={handleChange}>
      {text && <p>{text}</p>}
      <input
        type="radio"
        id={`${questionId}-strongly-disagree`}
        value={"strongly-disagree"}
        name={questionId}
      />
      <label htmlFor={`${questionId}-strongly-disagree`}>
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
      <label htmlFor={`${questionId}-dont-know`}>Don't know</label>
    </div>
  );
};
