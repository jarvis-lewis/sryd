import React from "react";
import { ClockCircleOutlined } from "@sryd/icons";
import { Timeline } from "sryd";

const App: React.FC = () => (
  <Timeline
    mode="right"
    items={[
      {
        children: "Create a services site 2015-09-01",
      },
      {
        children: "Solve initial network problems 2015-09-01",
      },
      {
        dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
        color: "red",
        children: "Technical testing 2015-09-01",
      },
      {
        children: "Network problems being solved 2015-09-01",
      },
    ]}
  />
);

export default App;
