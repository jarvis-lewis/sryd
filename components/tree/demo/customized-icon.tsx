import React from "react";
import {
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@sryd/icons";
import { Tree } from "sryd";
import type { TreeDataNode } from "sryd";

const treeData: TreeDataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    icon: <SmileOutlined />,
    children: [
      {
        title: "leaf",
        key: "0-0-0",
        icon: <MehOutlined />,
      },
      {
        title: "leaf",
        key: "0-0-1",
        icon: ({ selected }) =>
          selected ? <FrownFilled /> : <FrownOutlined />,
      },
    ],
  },
];

const App: React.FC = () => (
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={["0-0-0"]}
    switcherIcon={<DownOutlined />}
    treeData={treeData}
  />
);

export default App;
