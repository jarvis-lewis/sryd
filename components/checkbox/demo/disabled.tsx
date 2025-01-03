import React from 'react';
import { Checkbox } from 'sryd';

const App: React.FC = () => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox indeterminate disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>
);

export default App;
