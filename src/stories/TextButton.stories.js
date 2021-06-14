import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Text Button',
  component: Button,
  description: {summary: 'Sto'},
  args: {
    variant: 'text',
  },
  argTypes: {
    variant: {
      table: {disable: true},
    },
    startIcon: {
      table: {disable: true},
    },
    endIcon: {
      table: {disable: true},
    },
    disableShadow: {
      table: {disable: true},
    },
    color: {
      table: {disable: true},
    },
    onClick: {
      table: {disable: true},
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {type: 'select'},
      description: 'Adjust the size',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'md'},
      },
    },
    disabled: {
      options: [true, false],
      control: {type: 'radio'},
      description: 'Toggle button shadow',
      table: {
        type: {summary: 'bool'},
        defaultValue: {summary: false},
      },
    },
    text: {
      control: {type: 'text'},
      description: 'Label of the button',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'Default'},
      },
    },
  },
};

const Story = (args) => <Button {...args}/>;

export const Text = Story.bind({});
export const Small = Story.bind({});
export const Medium = Story.bind({});
export const Large = Story.bind({});
export const Disabled = Story.bind({});

Small.storyName = 'Small Text';
Medium.storyName = 'Medium Text';
Large.storyName = 'Large Text';
Disabled.storyName = 'Disabled Text';

Small.args = {
  size: 'sm',
};
Medium.args = {
  size: 'md',
};
Large.args = {
  size: 'lg',
};
Disabled.args = {
  disabled: true,
};
