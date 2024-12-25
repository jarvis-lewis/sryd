import React from "react";
import { UserOutlined } from "@sryd/icons";
import { InputNumber } from "sryd";

const App: React.FC = () => (
  <>
    <InputNumber prefix="￥" style={{ width: "100%" }} />
    <br />
    <br />
    <InputNumber
      addonBefore={<UserOutlined />}
      prefix="￥"
      style={{ width: "100%" }}
    />
    <br />
    <br />
    <InputNumber prefix="￥" disabled style={{ width: "100%" }} />
    <br />
    <br />
    <InputNumber suffix="RMB" style={{ width: "100%" }} />
  </>
);

export default App;
