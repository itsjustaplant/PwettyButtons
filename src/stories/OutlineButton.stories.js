import React from 'react';

import Button from '../components/ButtonContainer/Button';

export default {
  title: 'Outline Button',
  component: Button,
  args: {
    variant: 'outline',
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
    disabled: {
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

export const Outline = Story.bind({});
export const Small = Story.bind({});
export const Medium = Story.bind({});
export const Large = Story.bind({});

Small.storyName = 'Small Outline';
Medium.storyName = 'Medium Outline';
Large.storyName = 'Large Outline';

Small.args = {
  size: 'sm',
};
Medium.args = {
  size: 'md',
};
Large.args = {
  size: 'lg',
};
