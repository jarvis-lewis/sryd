import React from 'react';
import { message } from 'sryd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;

export default () => <InternalPanel content="Hello World!" type="error" />;