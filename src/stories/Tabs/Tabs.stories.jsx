import React from 'react';
import Tabs from './Tabs';

// Exemple de contenu pour chaque onglet
const tab1Content = <div>Contenu du Tab 1</div>;
const tab2Content = <div>Contenu du Tab 2</div>;
const tab3Content = <div>Contenu du Tab 3</div>;

// Exemple de données pour les onglets (à personnaliser selon tes besoins)
const tabsData = [
  {
    name: 'tab1',
    label: 'Tab 1',
    content: tab1Content,
  },
  {
    name: 'tab2',
    label: 'Tab 2',
    content: tab2Content,
  },
  {
    name: 'tab3',
    label: 'Tab 3',
    content: tab3Content,
  },
];

export default {
  title: 'Library/Tabs/Tabs',
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: {
        type: 'radio',
        options: ['left', 'center'],
      },
    },
  },
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: tabsData,
  defaultTab: 'tab1',
};

export const CenteredTabsVertical = Template.bind({});
CenteredTabsVertical.args = {
  tabs: tabsData,
  defaultTab: 'tab1',
  align: 'center',
  vertical: true,
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  tabs: tabsData,
  defaultTab: 'tab1',
  align: 'center',
  className: 'custom-tabs',
  underlineColor: '#ff0000',
  colordiv: '#ff0000',
};
