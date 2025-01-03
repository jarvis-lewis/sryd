import React from 'react';
import { Checkbox, Radio, Space, Upload } from 'sryd';

const App: React.FC = () => (
  <Space>
    <Upload>
      <Radio>Radio</Radio>
    </Upload>
    <Upload>
      <Checkbox>Checkbox</Checkbox>
    </Upload>
  </Space>
);

export default App;
