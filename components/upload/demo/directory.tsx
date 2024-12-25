import React from "react";
import { UploadOutlined } from "@sryd/icons";
import { Button, Upload } from "sryd";

const App: React.FC = () => (
  <Upload
    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    directory
  >
    <Button icon={<UploadOutlined />}>Upload Directory</Button>
  </Upload>
);

export default App;
