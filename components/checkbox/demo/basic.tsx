import React from 'react';
import { Checkbox } from 'sryd';
import type { CheckboxProps } from 'sryd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default App;
