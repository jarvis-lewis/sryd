import React from "react";
import { QuestionCircleOutlined } from "@sryd/icons";
import { FloatButton } from "sryd";

const App: React.FC = () => (
  <>
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="primary"
      style={{ insetInlineEnd: 24 }}
    />
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="default"
      style={{ insetInlineEnd: 94 }}
    />
  </>
);

export default App;
