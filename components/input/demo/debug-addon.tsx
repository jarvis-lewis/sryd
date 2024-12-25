import React from "react";
import { SettingOutlined } from "@sryd/icons";
import { Button, Input, Space } from "sryd";

const App: React.FC = () => (
  <Space direction="vertical">
    Input addon Button:
    <Input
      addonAfter={<Button type="primary">Submit</Button>}
      defaultValue="mysite"
    />
    <Input addonAfter={<Button>Submit</Button>} defaultValue="mysite" />
    <br />
    <br />
    Input addon Button icon:
    <Input
      addonAfter={
        <Button>
          <SettingOutlined />
        </Button>
      }
      defaultValue="mysite"
    />
  </Space>
);

export default App;
