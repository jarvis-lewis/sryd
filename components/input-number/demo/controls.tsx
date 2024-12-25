import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@sryd/icons";
import { InputNumber } from "sryd";

const App: React.FC = () => (
  <InputNumber
    controls={{ upIcon: <ArrowUpOutlined />, downIcon: <ArrowDownOutlined /> }}
  />
);

export default App;
