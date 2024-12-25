import * as React from 'react';
import CloseOutlined from '@sryd/icons/CloseOutlined';
import LeftOutlined from '@sryd/icons/LeftOutlined';
import RightOutlined from '@sryd/icons/RightOutlined';
import RotateLeftOutlined from '@sryd/icons/RotateLeftOutlined';
import RotateRightOutlined from '@sryd/icons/RotateRightOutlined';
import SwapOutlined from '@sryd/icons/SwapOutlined';
import ZoomInOutlined from '@sryd/icons/ZoomInOutlined';
import ZoomOutOutlined from '@sryd/icons/ZoomOutOutlined';
import classNames from 'classnames';
import RcImage from 'rc-image';
import type { GroupConsumerProps } from 'rc-image/lib/PreviewGroup';

import { useZIndex } from '../_util/hooks/useZIndex';
import { getTransitionName } from '../_util/motion';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useStyle from './style';

export const icons = {
  rotateLeft: <RotateLeftOutlined />,
  rotateRight: <RotateRightOutlined />,
  zoomIn: <ZoomInOutlined />,
  zoomOut: <ZoomOutOutlined />,
  close: <CloseOutlined />,
  left: <LeftOutlined />,
  right: <RightOutlined />,
  flipX: <SwapOutlined />,
  flipY: <SwapOutlined rotate={90} />,
};

const InternalPreviewGroup: React.FC<GroupConsumerProps> = ({
  previewPrefixCls: customizePrefixCls,
  preview,
  ...otherProps
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('image', customizePrefixCls);
  const previewPrefixCls = `${prefixCls}-preview`;
  const rootPrefixCls = getPrefixCls();

  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const [zIndex] = useZIndex(
    'ImagePreview',
    typeof preview === 'object' ? preview.zIndex : undefined,
  );

  const mergedPreview = React.useMemo<GroupConsumerProps['preview']>(() => {
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === 'object' ? preview : {};
    const mergedRootClassName = classNames(
      hashId,
      cssVarCls,
      rootCls,
      _preview.rootClassName ?? '',
    );

    return {
      ..._preview,
      transitionName: getTransitionName(rootPrefixCls, 'zoom', _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, 'fade', _preview.maskTransitionName),
      rootClassName: mergedRootClassName,
      zIndex,
    };
  }, [preview]);

  return wrapCSSVar(
    <RcImage.PreviewGroup
      preview={mergedPreview}
      previewPrefixCls={previewPrefixCls}
      icons={icons}
      {...otherProps}
    />,
  );
};

export default InternalPreviewGroup;
