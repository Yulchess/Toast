import React from 'react';

import { ToastNotification } from './index';

export default {
  title: 'TestComponent',
  component: ToastNotification,
};

export const Template = (args) => <ToastNotification {...args} />;
