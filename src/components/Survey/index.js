import React, { useState, useEffect } from "react";
import { Portal } from "react-portal";
import fetch from "unfetch";
import to from "await-to-js";
import isEmpty from "lodash.isempty";

import styles from "./styles.scss";
import Question from "../Question";
import Result from "../Result";
import Chart from "../Chart";

// Helpers for element classes
import { hasClass, addClass, removeClass } from "../../lib/utils";

const hashLookup = {
  Q69_1: "money691",
  Q69_8: "job698",
  Q69_11: "bettercare6911",
  Q69_14: "sleep6914",
  Q69_12: "socialise6912",
  Q69_10: "community6910",
  Q69_2: "friends692",
  Q69_5: "family695",
  Q69_16: "children6916",
  Q69_17: "romantic6917",
  Q69_7: "sex697",
  Q69_3: "work693",
  Q69_15: "errands6915",
  Q69_6: "commute696",
  Q69_13: "socialmedia6913",
  Q69_9: "travel699",
  Q69_4: "nature694"
};

export default props => {
  const [answers, setAnswers] = useState({});
  const [data, setData] = useState();
  const [percentData, setPercentData] = useState();

  const handleChange = data => {
    const newData = {
      [data.questionId]: data.value
    };
    setAnswers({ ...answers, ...newData });

    // Remove hide
    const section = hashLookup[data.questionId];
    let targetEl = document.querySelector("." + section);
    removeClass(targetEl, "hide-after");
  };

  const init = async () => {
    // Fetch average data
    // const [errFetched, fetched] = await to(
    //   fetch(`${__webpack_public_path__}/data.json`).then(r => r.json())
    // );
    // if (errFetched) console.error(errFetched);
    // setData(fetched);

    // Fetch percentage data
    const [errPercent, percentFetched] = await to(
      fetch(`${__webpack_public_path__}/percent-data.json`).then(r => r.json())
    );
    if (errPercent) console.error(errPercent);

    setPercentData(percentFetched);
  };

  // Init effect
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    // Don't fire on mount
    if (isEmpty(answers)) return;
  }, [answers]);

  return (
    <div className={styles.root}>
      <Portal node={document.querySelector(".money691")}>
        <div className={styles.questionContainer}>
          <Question
            pre="What do you think?"
            text="I think I would be happier if I had more money"
            questionId={"Q69_1"}
            onChange={handleChange}
            theme={"pink"}
          />
        </div>
      </Portal>

      <Portal node={document.querySelector(".money691chart")}>
        {"Q69_1" in answers && (
          <Chart
            heading={"Even the rich think more money would make them happier."}
            group={"income"}
            questionId={"Q69_1"}
            choice={answers.Q69_1}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".money691chart2")}>
        {"Q69_1" in answers && (
          <Chart
            heading={"As people get older, they desire money less"}
            group={"age2"}
            questionId={"Q69_1"}
            choice={answers.Q69_1}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".travel699")}>
        <Question
          text="I think I would be happier if travelled more often"
          questionId={"Q69_9"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".travel699chart")}>
        {"Q69_9" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"age2"}
            questionId={"Q69_9"}
            choice={answers.Q69_9}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".sleep6914")}>
        <Question
          text="I think I would be happier if slept more"
          questionId={"Q69_14"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".sleep6914chart")}>
        {"Q69_14" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"age2"}
            questionId={"Q69_14"}
            choice={answers.Q69_14}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".sex697")}>
        <Question
          text="I think I would be happier if had a better sex life"
          questionId={"Q69_7"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".sex697chart")}>
        {"Q69_7" in answers && (
          <Chart
            heading={"Responses by sex"}
            group={"sex"}
            questionId={"Q69_7"}
            choice={answers.Q69_7}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".errands6915")}>
        <Question
          text="I think I would be happier if spent less time running errands and doing chores"
          questionId={"Q69_15"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".errands6915chart")}>
        {"Q69_15" in answers && (
          <Chart
            heading={"Responses by income"}
            group={"income"}
            questionId={"Q69_15"}
            choice={answers.Q69_15}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".errands6915chart2")}>
        {"Q69_15" in answers && (
          <Chart
            heading={"Responses by sex"}
            group={"sex"}
            questionId={"Q69_15"}
            choice={answers.Q69_15}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".socialmedia6913")}>
        <Question
          text="I think I would be happier if spent less time on social media"
          questionId={"Q69_13"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".socialmedia6913chart")}>
        {"Q69_13" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"age2"}
            questionId={"Q69_13"}
            choice={answers.Q69_13}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".family695")}>
        <Question
          text="I think I would be happier if spent more time with family"
          questionId={"Q69_5"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".family695chart")}>
        {"Q69_5" in answers && (
          <Chart
            heading={"Responses by religion"}
            group={"religion"}
            questionId={"Q69_5"}
            choice={answers.Q69_5}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".children6916")}>
        <Question
          text="I think I would be happier if had (more) children"
          questionId={"Q69_16"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".children6916chart")}>
        {"Q69_16" in answers && (
          <Chart
            heading={"Responses by sex"}
            group={"sex"}
            questionId={"Q69_16"}
            choice={answers.Q69_16}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".children6916chart2")}>
        {"Q69_16" in answers && (
          <Chart
            heading={"Responses by religion"}
            group={"religion"}
            questionId={"Q69_16"}
            choice={answers.Q69_16}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".romantic6917")}>
        <Question
          text="I think I would be happier if had a more fulfilling romantic relationship"
          questionId={"Q69_17"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".romantic6917chart")}>
        {"Q69_17" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"age2"}
            questionId={"Q69_17"}
            choice={answers.Q69_17}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".job698")}>
        <Question
          text="I think I would be happier if had a better job"
          questionId={"Q69_8"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".job698chart")}>
        {"Q69_8" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"age2"}
            questionId={"Q69_8"}
            choice={answers.Q69_8}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".community6910")}>
        <Question
          text="I think I would be happier if were more involved in my community"
          questionId={"Q69_10"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".community6910chart")}>
        {"Q69_10" in answers && (
          <Chart
            heading={"Responses by region"}
            group={"region"}
            questionId={"Q69_10"}
            choice={answers.Q69_10}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".community6910chart2")}>
        {"Q69_10" in answers && (
          <Chart
            heading={"Responses by vote at 2019 election"}
            group={"vote"}
            questionId={"Q69_10"}
            choice={answers.Q69_10}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".bettercare6911")}>
        <Question
          text="I think I would be happier if took better care of myself"
          questionId={"Q69_11"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".bettercare6911chart")}>
        {"Q69_11" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"age2"}
            questionId={"Q69_11"}
            choice={answers.Q69_11}
            data={percentData}
          />
        )}
      </Portal>

      <Portal node={document.querySelector(".nature694")}>
        <Question
          text="I think I would be happier if spent more time in nature"
          questionId={"Q69_4"}
          onChange={handleChange}
        />
      </Portal>

      <Portal node={document.querySelector(".nature694chart")}>
        {"Q69_4" in answers && (
          <Chart
            heading={"Responses by age"}
            group={"state"}
            questionId={"Q69_4"}
            choice={answers.Q69_4}
            data={percentData}
          />
        )}
      </Portal>
      <div className={styles.displayNone}></div>
    </div>
  );
};
