import React from 'react';
import type { InputNumberProps } from 'sryd';
import { InputNumber } from 'sryd';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} changeOnWheel />
);

export default App;
