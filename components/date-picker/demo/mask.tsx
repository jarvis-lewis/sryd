import React from 'react';
import type { DatePickerProps } from 'sryd';
import { DatePicker, Space } from 'sryd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => (
  <Space direction="vertical">
    <DatePicker
      format={{
        format: 'YYYY-MM-DD',
        type: 'mask',
      }}
      onChange={onChange}
    />
    <DatePicker
      format={{
        format: 'YYYY-MM-DD HH:mm:ss',
        type: 'mask',
      }}
      onChange={onChange}
    />
  </Space>
);

export default App;
