import React from "react";
import { UploadOutlined } from "@sryd/icons";
import type { UploadProps } from "sryd";
import { Button, ConfigProvider, Upload } from "sryd";

const props: UploadProps = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "uploading",
      url: "http://www.baidu.com/xxx.png",
      percent: 33,
    },
    {
      uid: "2",
      name: "yyy.png",
      status: "done",
      url: "http://www.baidu.com/yyy.png",
    },
    {
      uid: "3",
      name: "zzz.png",
      status: "error",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/zzz.png",
    },
  ],
};

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Upload: {
          actionsColor: "yellow",
        },
      },
    }}
  >
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  </ConfigProvider>
);

export default App;
