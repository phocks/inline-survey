import React, { useState, useEffect } from "react";
import styles from "./styles.scss";
import Question from "../Question";
import Result from "../Result";

export default props => {
  const [answers, setAnswers] = useState({});

  const handleChange = data => {
    const newData = { [data.questionId]: data.value };
    setAnswers({ ...answers, ...newData });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements);
  };

  useEffect(() => {
    console.log(answers)
    if ('Q69_1' in answers) console.log("In there!")
  }, [answers]) 

  return (
    <div className={styles.root}>
      <div className={styles.container}>
      <h2 className={styles.heading}>I think I would be happier if I...</h2>
      <form onSubmit={handleSubmit}>
        <Question
          text="Had more money"
          questionId={"Q69_1"}
          onChange={handleChange}
        />
        {('Q69_1' in answers) && <Result show={true} />}
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
    </div>
  );
};
