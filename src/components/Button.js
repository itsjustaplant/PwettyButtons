/* eslint-disable react/prop-types, max-len, require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';

import {DefaultButton} from './PrettyButtons';
import {OutlineButton} from './PrettyButtons';
import {DisabledDefaultButton} from './PrettyButtons';
import {TextButton} from './PrettyButtons';
import {DisabledText} from './PrettyButtons';

export class Button extends React.Component {
  render() {
    let button;

    const defaultText = (this.props.children) ? (this.props.children) : (this.props.text);
    const disabledText = (this.props.children) ? (this.props.children) : 'Disabled';

    let startIconDisplay = ''; let endIconDisplay ='';

    if (this.props.startIcon === '') {
      startIconDisplay = 'none';
    }
    if (this.props.endIcon === '') {
      endIconDisplay = 'none';
    }

    const childProps = {
      variant: this.props.variant,
      disabled: this.props.disabled,
      size: this.props.size,
      color: this.props.color,
      disableShadow: this.props.disableShadow,
    };

    if (this.props.disabled) {
      switch (this.props.variant) {
        default:
          button = <DisabledDefaultButton specs={childProps}>{disabledText}</DisabledDefaultButton>;
          break;
        case 'text':
          button = <DisabledText specs={childProps}>{disabledText}</DisabledText>;
      }
    } else {
      switch (this.props.variant) {
        default:
          button = <DefaultButton data-testid="default_button" onClick={this.props.onClick} specs={childProps}>
            <span style={{display: startIconDisplay}} className="material-icons-outlined startIcon">
              {this.props.startIcon}
            </span>
            {defaultText}
            <span style={{display: endIconDisplay}} className="material-icons-outlined endIcon">
              {this.props.endIcon}
            </span>
          </DefaultButton>;
          break;
        case 'outline':
          button = <OutlineButton onClick={this.props.onClick} specs={childProps}>{defaultText}</OutlineButton>;
          break;
        case 'text':
          button = <TextButton data-testid="text_button" onClick={this.props.onClick} specs={childProps}>{defaultText}</TextButton>;
      }
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}
Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  text: 'Default',
  variant: 'default',
  disableShadow: false,
  disabled: false,
  size: 'md',
  color: 'default',
  startIcon: '',
  endIcon: '',
};
