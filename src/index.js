import "regenerator-runtime/runtime"; // async/await support
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { hashify } from "spanify";

const PROJECT_NAME = "inline-survey";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

function init() {
  hashify({
    hashList: [
      "customise",
      "money691",
      "friends692",
      "work693",
      "nature694",
      "family695",
      "commute696",
      "sex697",
      "job698",
      "travel699",
      "community6910",
      "bettercare6911",
      "socialise6912",
      "socialmedia6913",
      "sleep6914",
      "errands6915",
      "children6917",
      "romantic6917"
    ]
  });

  render(<App projectName={PROJECT_NAME} />, root);
}

init();

if (module.hot) {
  module.hot.accept("./components/App", () => {
    try {
      init();
    } catch (err) {
      import("./components/ErrorBox").then(exports => {
        const ErrorBox = exports.default;
        render(<ErrorBox error={err} />, root);
      });
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}
