import React from 'react';
import { Flex, Splitter, Tabs, Typography } from 'sryd';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

const App: React.FC = () => {
  const SplitterContent = (
    <Splitter
      style={{
        height: 200,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Splitter.Panel collapsible>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel
        collapsible={{
          start: true,
        }}
      >
        <Desc text={2} />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text={3} />
      </Splitter.Panel>
    </Splitter>
  );
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          key: '1',
          label: 'General',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'Splitter Tab',
          children: SplitterContent,
        },
      ]}
    />
  );
};

export default App;
