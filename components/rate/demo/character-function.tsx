import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@sryd/icons";
import { Flex, Rate } from "sryd";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const App: React.FC = () => (
  <Flex gap="middle" vertical>
    <Rate defaultValue={2} character={({ index = 0 }) => index + 1} />
    <Rate
      defaultValue={3}
      character={({ index = 0 }) => customIcons[index + 1]}
    />
  </Flex>
);

export default App;
