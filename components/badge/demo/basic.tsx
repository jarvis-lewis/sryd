import React from "react";
import { ClockCircleOutlined } from "@sryd/icons";
import { Avatar, Badge, Space } from "sryd";

const App: React.FC = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);

export default App;
