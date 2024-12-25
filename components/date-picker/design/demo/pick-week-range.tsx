import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'sryd';

const { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;

const Demo: FC = () => <PureRangePicker picker="week" />;

export default Demo;
