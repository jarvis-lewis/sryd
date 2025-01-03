import React from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@sryd/icons";
import { Steps } from "sryd";

const App: React.FC = () => (
  <Steps
    items={[
      {
        title: "Login",
        status: "finish",
        icon: <UserOutlined />,
      },
      {
        title: "Verification",
        status: "finish",
        icon: <SolutionOutlined />,
      },
      {
        title: "Pay",
        status: "process",
        icon: <LoadingOutlined />,
      },
      {
        title: "Done",
        status: "wait",
        icon: <SmileOutlined />,
      },
    ]}
  />
);

export default App;
