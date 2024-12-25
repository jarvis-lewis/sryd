import React from 'react';
import { ColorPicker } from 'sryd';

export default () => {
  const [color, setColor] = React.useState<string>('#1677ff');

  return (
    <ColorPicker
      value={color}
      allowClear
      onChange={(c) => {
        setColor(c.toHexString());
      }}
    />
  );
};
