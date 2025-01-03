import React from "react";
import { UserOutlined } from "@sryd/icons";
import { Avatar, Badge, Space } from "sryd";

const App: React.FC = () => (
  <Space size={24}>
    <Badge count={1}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
    <Badge dot>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space>
);

export default App;
