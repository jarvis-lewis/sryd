import React from "react";
import { DownOutlined } from "@sryd/icons";
import { Dropdown, Space } from "sryd";

const App: React.FC = () => (
  <Space>
    <Dropdown.Button icon={<DownOutlined />} menu={{ items: [] }}>
      Submit
    </Dropdown.Button>
  </Space>
);

export default App;
