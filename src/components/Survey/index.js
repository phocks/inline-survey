import React, { useState } from "react";
import styles from "./styles.scss";
import Question from "../Question";

export default props => {
  const handleChange = data => {
    console.log(data);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements);
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <Question
          text="Had more money"
          questionId={"Q69_1"}
          onChange={handleChange}
        />
        <Question
          text="Were more involved in my community"
          questionId={"Q69_10"}
          onChange={handleChange}
        />
        <Question
          text="Took better care of myself"
          questionId={"Q69_11"}
          onChange={handleChange}
        />
        <Question
          text="Socialised more"
          questionId={"Q69_12"}
          onChange={handleChange}
        />
        <Question
          text="Spent less time on social media"
          questionId={"Q69_13"}
          onChange={handleChange}
        />
        <Question
          text="Slept more"
          questionId={"Q69_14"}
          onChange={handleChange}
        />
        <Question
          text="Spent less time running errands and doing chores"
          questionId={"Q69_15"}
          onChange={handleChange}
        />
        <Question
          text="Had (more) children"
          questionId={"Q69_16"}
          onChange={handleChange}
        />
        <Question
          text="Had a more fulfilling romantic relationship"
          questionId={"Q69_17"}
          onChange={handleChange}
        />
        <Question
          text="Had more friends"
          questionId={"Q69_2"}
          onChange={handleChange}
        />
        <Question
          text="Worked less"
          questionId={"Q69_3"}
          onChange={handleChange}
        />
        <Question
          text="Spent more time in nature"
          questionId={"Q69_4"}
          onChange={handleChange}
        />
        <Question
          text="Spent more time with family"
          questionId={"Q69_5"}
          onChange={handleChange}
        />
        <Question
          text="Spent less time commuting"
          questionId={"Q69_6"}
          onChange={handleChange}
        />
        <Question
          text="Had a better sex life"
          questionId={"Q69_7"}
          onChange={handleChange}
        />
        <Question
          text="Had a better job"
          questionId={"Q69_8"}
          onChange={handleChange}
        />
        <Question
          text="Travelled more often"
          questionId={"Q69_9"}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
