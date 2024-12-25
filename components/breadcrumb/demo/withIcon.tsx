import React from "react";
import { HomeOutlined, UserOutlined } from "@sryd/icons";
import { Breadcrumb } from "sryd";

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: "",
        title: <HomeOutlined />,
      },
      {
        href: "",
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: "Application",
      },
    ]}
  />
);

export default App;
