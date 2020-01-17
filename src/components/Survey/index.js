import React from "react";
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
