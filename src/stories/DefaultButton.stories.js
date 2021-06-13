import React from 'react';

import Button from '../components/ButtonContainer/Button';

export default {
  title: 'Default Button',
  description: 'This is a button',
  component: Button,
  args: {
    variant: 'default',
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
    onClick: {
      table: {disable: true},
    },
    color: {
      options: ['default', 'primary', 'secondary', 'danger'],
      control: {type: 'select'},
      description: 'Adjust color of the button',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'default'},
      },
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
      description: 'Toggle button ability',
      table: {
        type: {summary: 'bool'},
        defaultValue: {summary: false},
      },
    },
    disableShadow: {
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

export const Default = Story.bind({});
export const Small = Story.bind({});
export const Medium = Story.bind({});
export const Large = Story.bind({});
export const DisabledDefault = Story.bind({});
export const Primary = Story.bind({});
export const Secondary = Story.bind({});
export const Danger = Story.bind({});

Small.storyName = 'Small Default';
Medium.storyName = 'Medium Default';
Large.storyName = 'Large Default';
DisabledDefault.storyName = 'Disabled Default';
Primary.storyName = 'Primary Default';
Secondary.storyName = 'Secondary Default';
Danger.storyName = 'Danger Default';

Small.args = {
  size: 'sm',
};
Medium.args = {
  size: 'md',
};
Large.args = {
  size: 'lg',
};
DisabledDefault.args = {
  disabled: true,
};
Primary.args = {
  color: 'primary',
};
Secondary.args = {
  color: 'secondary',
};
Danger.args = {
  color: 'danger',
};

