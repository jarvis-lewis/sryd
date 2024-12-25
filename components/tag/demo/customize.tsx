import React from "react";
import { CloseCircleOutlined } from "@sryd/icons";
import { Flex, Tag } from "sryd";

const App: React.FC = () => (
  <Flex gap="4px 0" wrap>
    <Tag closable closeIcon="关 闭">
      Tag1
    </Tag>
    <Tag closable closeIcon={<CloseCircleOutlined />}>
      Tag2
    </Tag>
  </Flex>
);

export default App;
