import React from "react";
import { AntDesignOutlined } from "@sryd/icons";
import { Button } from "sryd";

import SemanticPreview from "../../../.dumi/components/SemanticPreview";
import useLocale from "../../../.dumi/hooks/useLocale";

const locales = {
  cn: {
    icon: "图标元素",
  },
  en: {
    icon: "Icon element",
  },
};

const App: React.FC = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      semantics={[{ name: "icon", desc: locale.icon, version: "5.5.0" }]}
    >
      <Button type="primary" icon={<AntDesignOutlined />}>
        Ant Design
      </Button>
    </SemanticPreview>
  );
};

export default App;
