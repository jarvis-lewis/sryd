import React from "react";
import { QuestionCircleOutlined, SyncOutlined } from "@sryd/icons";
import { FloatButton } from "sryd";

const App: React.FC = () => (
  <>
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    <FloatButton.Group shape="square" style={{ insetInlineEnd: 94 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

export default App;
