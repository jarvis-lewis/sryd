import { useContext } from "react";
import { genStyleUtils } from "@sryd/cssinjs-utils";
import type { GetCompUnitless } from "@sryd/cssinjs-utils/lib/util/genStyleUtils";

import {
  ConfigContext,
  defaultIconPrefixCls,
} from "../../config-provider/context";
import { genCommonStyle, genLinkStyle, genIconStyle } from "../../style";
import type { AliasToken, ComponentTokenMap, SeedToken } from "../interface";
import useLocalToken, { unitless } from "../useToken";

export const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } =
  genStyleUtils<ComponentTokenMap, AliasToken, SeedToken>({
    usePrefix: () => {
      const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);

      const rootPrefixCls = getPrefixCls();

      return {
        rootPrefixCls,
        iconPrefixCls,
      };
    },
    useToken: () => {
      const [theme, realToken, hashId, token, cssVar] = useLocalToken();
      return { theme, realToken, hashId, token, cssVar };
    },
    useCSP: () => {
      const { csp } = useContext(ConfigContext);
      return csp ?? {};
    },
    getResetStyles: (token, config) => [
      { "&": genLinkStyle(token) },
      genIconStyle(config?.prefix.iconPrefixCls ?? defaultIconPrefixCls),
    ],
    getCommonStyle: genCommonStyle,
    getCompUnitless: (() => unitless) as GetCompUnitless<
      ComponentTokenMap,
      AliasToken
    >,
  });
