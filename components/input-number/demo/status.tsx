import React from 'react';
import ClockCircleOutlined from '@sryd/icons/ClockCircleOutlined';
import { InputNumber, Space } from 'sryd';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="error" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
    <InputNumber status="warning" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
  </Space>
);

export default App;
