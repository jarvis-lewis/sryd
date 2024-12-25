import React from 'react';
import { Button, Flex } from 'sryd';

const Demo: React.FC = () => (
  <Flex wrap gap="small">
    {Array.from({ length: 24 }, (_, i) => (
      <Button key={i} type="primary">
        Button
      </Button>
    ))}
  </Flex>
);

export default Demo;
