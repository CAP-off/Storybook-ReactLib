import CodeDisplay from './CodeDisplay';

export default {
  title: 'Library/CodeDisplay/CodeDisplay',
  component: CodeDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    code: { control: 'text' },
    theme: { control: 'select', options: ['atomDark', 'prism', 'solarizedlight'] },
  },
};

export const AtomDark = {
  args: {
    code: 'const foo = "bar";',
    theme: 'atomDark',
  },
};

export const Prism = {
  args: {
    code: 'alert("Hello World");',
    theme: 'prism',
  },
};

export const Solarizedlight = {
  args: {
    code: 'const foo = "bar";',
    theme: 'solarizedlight',
  },
};
