import React from "react";
import { AppstoreOutlined, BarsOutlined } from "@sryd/icons";
import { Segmented } from "sryd";

const Demo: React.FC = () => (
  <Segmented
    vertical
    options={[
      { value: "List", icon: <BarsOutlined /> },
      { value: "Kanban", icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;
