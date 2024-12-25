import React from "react";
import { QuestionCircleOutlined } from "@sryd/icons";
import { Button, Popconfirm } from "sryd";

const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default App;
