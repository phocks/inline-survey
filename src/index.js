import "regenerator-runtime/runtime"; // async/await support
import "./lib/polyfills";
import "intersection-observer"; // Polyfill
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { hashify } from "spanify";

const PROJECT_NAME = "inline-survey";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

// Only on page load. Not on hot reload
function preInit() {
  // Add a div before our header so we can attach animation
  const isAlreadyAttached = document.querySelector(
    ".storylab-header-animation"
  );

  if (!isAlreadyAttached) {
    var newEl = document.createElement("div");
    newEl.innerHTML = ``;
    newEl.className = "storylab-header-animation";
    newEl.style.marginBottom = "0";

    var ref = document.querySelector(".Header h1");

    insertBefore(newEl, ref);
  }

  // Convert hash anchors to divs
  hashify({
    defaultClass: "hide-after",
    hashList: [
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
      "children6916",
      "romantic6917"
    ]
  });

  // Convert chart divs
  hashify({
    hashList: [
      "customise",
      "interactivefooter",
      "money691chart",
      "money691chart2",
      "job698chart",
      "friends692chart",
      "work693chart",
      "nature694chart",
      "family695chart",
      "commute696chart",
      "sex697chart",
      "travel699chart",
      "community6910chart",
      "community6910chart2",
      "bettercare6911chart",
      "socialise6912chart",
      "socialmedia6913chart",
      "sleep6914chart",
      "errands6915chart",
      "errands6915chart2",
      "children6916chart",
      "children6916chart2",
      "romantic6917chart"
    ]
  });

  // Set custom text colours
  const headerUpdated = document.querySelector(".Main .Header-updated");
  if (headerUpdated) headerUpdated.style.color = "#1B1A65";

  const headerPublished = document.querySelector(".Main .Header-published");
  if (headerPublished) headerPublished.style.color = "#1B1A65";
}

function init() {
  render(<App projectName={PROJECT_NAME} />, root);
}

// Wait for Odyssey then call init
if (window.__ODYSSEY__) {
  preInit();
  init(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", e => {
    preInit();
    init(e.detail);
  });
}

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

// Helper functions
function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}
