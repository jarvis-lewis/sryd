import type { ReactNode } from 'react';
import * as React from 'react';
import CheckOutlined from '@sryd/icons/CheckOutlined';
import CloseCircleFilled from '@sryd/icons/CloseCircleFilled';
import CloseOutlined from '@sryd/icons/CloseOutlined';
import DownOutlined from '@sryd/icons/DownOutlined';
import LoadingOutlined from '@sryd/icons/LoadingOutlined';
import SearchOutlined from '@sryd/icons/SearchOutlined';

import { devUseWarning } from '../_util/warning';

type RenderNode = React.ReactNode | ((props: any) => React.ReactNode);

export default function useIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  prefixCls,
  showSuffixIcon,
  feedbackIcon,
  showArrow,
  componentName,
}: {
  suffixIcon?: React.ReactNode;
  clearIcon?: RenderNode;
  menuItemSelectedIcon?: RenderNode;
  removeIcon?: RenderNode;
  loading?: boolean;
  multiple?: boolean;
  hasFeedback?: boolean;
  feedbackIcon?: ReactNode;
  prefixCls: string;
  showSuffixIcon?: boolean;
  showArrow?: boolean;
  componentName: string;
}) {
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning(componentName);

    warning.deprecated(!clearIcon, 'clearIcon', 'allowClear={{ clearIcon: React.ReactNode }}');
  }

  // Clear Icon
  const mergedClearIcon = clearIcon ?? <CloseCircleFilled />;

  // Validation Feedback Icon
  const getSuffixIconNode = (arrowIcon?: ReactNode) => {
    if (suffixIcon === null && !hasFeedback && !showArrow) {
      return null;
    }
    return (
      <>
        {showSuffixIcon !== false && arrowIcon}
        {hasFeedback && feedbackIcon}
      </>
    );
  };

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(<LoadingOutlined spin />);
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open && showSearch) {
        return getSuffixIconNode(<SearchOutlined className={iconCls} />);
      }
      return getSuffixIconNode(<DownOutlined className={iconCls} />);
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <CheckOutlined />;
  } else {
    mergedItemIcon = null;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = <CloseOutlined />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
