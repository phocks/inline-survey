import React, { useState, useEffect } from "react";
import { Portal } from "react-portal";
import fetch from "unfetch";
import to from "await-to-js";

import styles from "./styles.scss";
import Question from "../Question";
import Result from "../Result";

export default props => {
  const [ageBracket, setAgeBracket] = useState();
  const [gender, setGender] = useState();
  const [region, setRegion] = useState();
  const [answers, setAnswers] = useState({});
  const [data, setData] = useState();

  const handleChange = data => {
    const newData = { [data.questionId]: data.value };
    setAnswers({ ...answers, ...newData });
  };

  const init = async () => {
    const [errFetched, fetched] = await to(
      fetch(`${__webpack_public_path__}/data.json`).then(r => r.json())
    );

    if (errFetched) console.error(errFetched);

    console.log(fetched);

    setData(fetched);
  };

  // Init effect
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <div className={styles.root}>
      <Portal node={document.querySelector(".customise")}>
        <div className={styles.container}>
          <div className={styles.optionalQuestion}>
            <p>What is your age group?</p>
            <button
              className={`${styles.button} ${
                ageBracket === "18-24" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("18-24")}
            >
              18-24
            </button>
            <button
              className={`${styles.button} ${
                ageBracket === "25-29" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("25-29")}
            >
              25-29
            </button>
            <button
              className={`${styles.button} ${
                ageBracket === "30-39" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("30-39")}
            >
              30-39
            </button>
            <button
              className={`${styles.button} ${
                ageBracket === "40-49" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("40-49")}
            >
              40-49
            </button>
            <button
              className={`${styles.button} ${
                ageBracket === "50-64" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("50-64")}
            >
              50-64
            </button>
            <button
              className={`${styles.button} ${
                ageBracket === "65-74" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("65-74")}
            >
              65-74
            </button>
            <button
              className={`${styles.button} ${
                ageBracket === "75+" ? styles.selected : ""
              }`}
              onClick={() => setAgeBracket("75+")}
            >
              75+
            </button>
          </div>

          <div className={styles.optionalQuestion}>
            <p>What is your gender?</p>
            <button
              className={`${styles.button} ${
                gender === "woman" ? styles.selected : ""
              }`}
              onClick={() => setGender("woman")}
            >
              Woman
            </button>
            <button
              className={`${styles.button} ${
                gender === "man" ? styles.selected : ""
              }`}
              onClick={() => setGender("man")}
            >
              Man
            </button>
            <button
              className={`${styles.button} ${
                gender === "other" ? styles.selected : ""
              }`}
              onClick={() => setGender("other")}
            >
              Other
            </button>
          </div>

          <div className={styles.optionalQuestion}>
            <p>Where do you live?</p>
            <button
              className={`${styles.button} ${
                region === "Inner metro" ? styles.selected : ""
              }`}
              onClick={() => setRegion("Inner metro")}
            >
              Inner metro
            </button>
            <button
              className={`${styles.button} ${
                region === "Outer metro" ? styles.selected : ""
              }`}
              onClick={() => setRegion("Outer metro")}
            >
              Outer metro
            </button>
            <button
              className={`${styles.button} ${
                region === "Regional" ? styles.selected : ""
              }`}
              onClick={() => setRegion("Regional")}
            >
              Regional
            </button>
            <button
              className={`${styles.button} ${
                region === "Rural" ? styles.selected : ""
              }`}
              onClick={() => setRegion("Rural")}
            >
              Rural
            </button>
          </div>
        </div>
      </Portal>
      <Portal node={document.querySelector(".money691")}>
        <div className={styles.questionContainer}>
          <Question
            text="I think I would be happier if I had more money"
            questionId={"Q69_1"}
            onChange={handleChange}
          />
          {"Q69_1" in answers && (
            <Result questionId={"Q69_1"} choice={answers.Q69_1} data={data} />
          )}
        </div>
      </Portal>

      <Portal node={document.querySelector(".friends692")}>
        <div className={styles.questionContainer}>
          <Question
            text="I think I would be happier if I had more friends"
            questionId={"Q69_2"}
            onChange={handleChange}
          />
          {"Q69_2" in answers && (
            <Result questionId={"Q69_2"} choice={answers.Q69_2} data={data} />
          )}
        </div>
      </Portal>

      <Portal node={document.querySelector(".work693")}>
        <div className={styles.questionContainer}>
          <Question
            text="I think I would be happier if I worked less"
            questionId={"Q69_3"}
            onChange={handleChange}
          />
          {"Q69_3" in answers && (
            <Result questionId={"Q69_3"} choice={answers.Q69_3} data={data} />
          )}
        </div>
      </Portal>

      <Portal node={document.querySelector(".nature694")}>
        <Question
          text="Spent more time in nature"
          questionId={"Q69_4"}
          onChange={handleChange}
        />
        {"Q69_4" in answers && (
          <Result questionId={"Q69_4"} choice={answers.Q69_4} data={data} />
        )}
      </Portal>

      <Portal node={document.querySelector(".family695")}>
        <Question
          text="Spent more time with family"
          questionId={"Q69_5"}
          onChange={handleChange}
        />
        {"Q69_5" in answers && (
          <Result questionId={"Q69_5"} choice={answers.Q69_5} data={data} />
        )}
      </Portal>

      <Portal node={document.querySelector(".commute696")}>
        <Question
          text="Spent less time commuting"
          questionId={"Q69_6"}
          onChange={handleChange}
        />

        {"Q69_6" in answers && (
          <Result questionId={"Q69_6"} choice={answers.Q69_6} data={data} />
        )}
      </Portal>

      <Portal node={document.querySelector(".sex697")}>
        <Question
          text="Had a better sex life"
          questionId={"Q69_7"}
          onChange={handleChange}
        />

        {"Q69_7" in answers && (
          <Result questionId={"Q69_7"} choice={answers.Q69_7} data={data} />
        )}
      </Portal>

      <div className={styles.displayNone}>
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
        <Question
          text="Were more involved in my community"
          questionId={"Q69_10"}
          onChange={handleChange}
        />
        {"Q69_10" in answers && <Result questionId={"Q69_10"} />}
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
      </div>
    </div>
  );
};
