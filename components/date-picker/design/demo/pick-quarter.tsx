import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'sryd';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const Demo: FC = () => <PureDatePicker picker="quarter" />;

export default Demo;