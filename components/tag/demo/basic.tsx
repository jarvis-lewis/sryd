import React from "react";
import { CloseCircleOutlined } from "@sryd/icons";
import { Tag } from "sryd";

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log("Clicked! But prevent default.");
};

const App: React.FC = () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a
        href="https://github.com/ant-design/ant-design/issues/1862"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>
    </Tag>
    <Tag closeIcon onClose={preventDefault}>
      Prevent Default
    </Tag>
    <Tag closeIcon={<CloseCircleOutlined />} onClose={console.log}>
      Tag 2
    </Tag>
  </>
);

export default App;
