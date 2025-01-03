import React from "react";
import { createFromIconfontCN } from "@sryd/icons";
import { Space } from "sryd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const App: React.FC = () => (
  <Space>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" style={{ color: "#1877F2" }} />
    <IconFont type="icon-twitter" />
  </Space>
);

export default App;
