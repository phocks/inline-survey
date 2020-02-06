import React from "react";
import { action } from "@storybook/addon-actions";
import Result from "../src/components/Result";

import data from "../public/data.json"

export default {
  title: "Chart",
  component: Result
};

export const Bar = () => <Result questionId={"Q69_2"} choice={""} data={data} />;

// export const Emoji = () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       🐀🐀🐀🐀
//     </span>
//   </Button>
// );
