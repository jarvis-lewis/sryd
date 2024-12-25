import React from "react";
import { DownOutlined } from "@sryd/icons";
import type { MenuProps } from "sryd";
import { Dropdown, message, Space } from "sryd";

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;
