import React from "react";
import { NotificationOutlined } from "@sryd/icons";
import { Badge, Space } from "sryd";

const App: React.FC = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
);

export default App;
