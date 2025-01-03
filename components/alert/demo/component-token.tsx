import React from "react";
import { SmileOutlined } from "@sryd/icons";
import { Alert, ConfigProvider } from "sryd";

const icon = <SmileOutlined />;

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Alert: {
          withDescriptionIconSize: 32,
          withDescriptionPadding: 16,
        },
      },
    }}
  >
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
  </ConfigProvider>
);

export default App;
