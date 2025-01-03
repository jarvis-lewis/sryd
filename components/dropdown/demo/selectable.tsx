import React from "react";
import { DownOutlined } from "@sryd/icons";
import type { MenuProps } from "sryd";
import { Dropdown, Space, Typography } from "sryd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

const App: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ["3"],
    }}
  >
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default App;
