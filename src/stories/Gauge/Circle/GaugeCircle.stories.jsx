import React from 'react';
import { GaugeCircle } from './GaugeCircle';

export default {
  title: 'Library/Gauge/GaugeCircle',
  component: GaugeCircle,
  parameters: {
    layout: 'centered',
  },
    tags : ['autodocs'],
};

export const Default = {
  args: {
    value: 25,
  },
};

export const CustomCenterColor = {
  args: {
    value: 75,
    centerColor: 'red', // Couleur rouge au centre
  },
};

export const CustomImageCenter = {
  args: {
    value: 50,
    centerColor: 'url(https://example.com/image.png)', // URL de l'image à utiliser au centre
  },
};

export const LargeSize = {
  args: {
    value: 80,
    size: 300, // Augmenter la taille de la jauge circulaire à 300 pixels
  },
};
