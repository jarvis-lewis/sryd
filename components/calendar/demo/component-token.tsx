import React from 'react';
import { Calendar, ConfigProvider } from 'sryd';
import type { CalendarProps } from 'sryd';
import type { Dayjs } from 'dayjs';

/** Test usage. Do not use in your production. */
export default () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Calendar: {
            fullBg: 'red',
            fullPanelBg: 'green',
            itemActiveBg: 'black',
          },
        },
      }}
    >
      <Calendar onPanelChange={onPanelChange} />
      <br />
      <Calendar onPanelChange={onPanelChange} fullscreen={false} />
    </ConfigProvider>
  );
};
