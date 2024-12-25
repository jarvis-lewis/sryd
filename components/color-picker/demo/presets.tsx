import React from "react";
import { generate, green, presetPalettes, red } from "@sryd/colors";
import { ColorPicker, theme } from "sryd";
import type { ColorPickerProps } from "sryd";

type Presets = Required<ColorPickerProps>["presets"][number];

const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
  }));

const Demo: React.FC = () => {
  const { token } = theme.useToken();
  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
  });
  return <ColorPicker presets={presets} defaultValue="#1677ff" />;
};

export default Demo;
