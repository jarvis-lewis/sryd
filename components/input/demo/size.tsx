import React from "react";
import { UserOutlined } from "@sryd/icons";
import { Input } from "sryd";

const App: React.FC = () => (
  <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>
);

export default App;
