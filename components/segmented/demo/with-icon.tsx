import React from "react";
import { AppstoreOutlined, BarsOutlined } from "@sryd/icons";
import { Segmented } from "sryd";

const Demo: React.FC = () => (
  <Segmented
    options={[
      { label: "List", value: "List", icon: <BarsOutlined /> },
      { label: "Kanban", value: "Kanban", icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;
