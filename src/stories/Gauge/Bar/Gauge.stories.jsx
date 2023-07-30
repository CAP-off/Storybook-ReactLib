import React from 'react';
import { Gauge } from './Gauge';

export default {
  title: 'Library/Gauge/Gauge',
  component: Gauge,
  parameters: {
    layout: 'centered',
  },
  tags : ['autodocs'],
};

export const Default = {
    args: {
      value: 50,
    },
  };

  export const CustomSize = {
    args: {
      value: 50,
      minValue: 20,
    maxValue: 50,
      width: 8000,
      height: 20,
      fillColor: 'blue',
      maxValue: 70,
    },
  };

  export const LargeSize = {
    args: {
      value: 80,
      width: 8000,
      height: 30,
      backgroundBgColor: 'red',
      fillColor: 'orange',

    },
  };
