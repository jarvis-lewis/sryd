import React, { useState } from "react";
import { CloseSquareFilled } from "@sryd/icons";
import { Mentions } from "sryd";

const App: React.FC = () => {
  const [value, setValue] = useState("hello world");
  return (
    <>
      <Mentions value={value} onChange={setValue} allowClear />
      <br />
      <br />
      <Mentions
        value={value}
        onChange={setValue}
        allowClear={{ clearIcon: <CloseSquareFilled /> }}
      />
      <br />
      <br />
      <Mentions value={value} onChange={setValue} allowClear rows={3} />
    </>
  );
};

export default App;
