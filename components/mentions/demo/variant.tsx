import React from 'react';
import { Flex, Mentions } from 'sryd';

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Mentions placeholder="Outlined" />
    <Mentions placeholder="Filled" variant="filled" />
    <Mentions placeholder="Borderless" variant="borderless" />
  </Flex>
);

export default App;
